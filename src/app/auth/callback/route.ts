import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')
  
  // Get headers for origin detection
  const forwardedHost = request.headers.get('x-forwarded-host')
  const forwardedProto = request.headers.get('x-forwarded-proto') || 'https'
  const actualHost = request.headers.get('host')
  
  // Determine the best origin to use:
  // 1. If accessed via onrender.com, stay on onrender.com (useful during DNS propagation)
  // 2. Otherwise use the forwarded host for production custom domains
  let origin: string
  
  if (actualHost?.includes('onrender.com')) {
    // User came from onrender.com, redirect back there
    origin = `https://${actualHost}`
  } else if (forwardedHost) {
    // Use forwarded host for proxied requests
    origin = `${forwardedProto}://${forwardedHost}`
  } else {
    // Fallback to request origin
    origin = requestUrl.origin
  }

  if (code) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    
    const supabase = createClient(supabaseUrl, supabaseAnonKey)
    
    // Exchange the code for a session
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    
    if (error) {
      console.error('Auth callback error:', error.message)
      // Redirect to login with error
      return NextResponse.redirect(`${origin}/login?error=auth_failed`)
    }
  }

  // Redirect to the survey after successful authentication
  return NextResponse.redirect(`${origin}/login?survey=true`)
}

