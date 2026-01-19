import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'
import { headers } from 'next/headers'

export async function GET(request: Request) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')
  
  // Get the correct origin - use x-forwarded-host for proxied requests (Render, Vercel, etc.)
  const headersList = headers()
  const forwardedHost = headersList.get('x-forwarded-host')
  const forwardedProto = headersList.get('x-forwarded-proto') || 'https'
  
  // Use forwarded host if available (production), otherwise fall back to request origin (local dev)
  const origin = forwardedHost 
    ? `${forwardedProto}://${forwardedHost}`
    : requestUrl.origin

  // #region agent log
  console.log('[AUTH_CALLBACK] Origin detection:', { 
    forwardedHost, 
    forwardedProto, 
    requestOrigin: requestUrl.origin, 
    finalOrigin: origin,
    hasCode: !!code 
  })
  // #endregion

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

