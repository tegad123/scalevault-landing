'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'

export default function AuthCallbackPage() {
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const handleCallback = async () => {
      try {
        // Check if we have a hash fragment with tokens (implicit flow)
        const hashParams = new URLSearchParams(window.location.hash.substring(1))
        const accessToken = hashParams.get('access_token')
        const refreshToken = hashParams.get('refresh_token')

        if (accessToken) {
          // We have tokens from implicit flow - set the session
          const { error: sessionError } = await supabase.auth.setSession({
            access_token: accessToken,
            refresh_token: refreshToken || '',
          })

          if (sessionError) {
            console.error('Session error:', sessionError.message)
            setError('Failed to authenticate. Please try again.')
            setTimeout(() => router.push('/login?error=auth_failed'), 2000)
            return
          }

          // Success! Redirect to survey
          router.push('/login?survey=true')
          return
        }

        // Check for code parameter (PKCE flow)
        const urlParams = new URLSearchParams(window.location.search)
        const code = urlParams.get('code')

        if (code) {
          const { error: exchangeError } = await supabase.auth.exchangeCodeForSession(code)

          if (exchangeError) {
            console.error('Code exchange error:', exchangeError.message)
            setError('Failed to authenticate. Please try again.')
            setTimeout(() => router.push('/login?error=auth_failed'), 2000)
            return
          }

          // Success! Redirect to survey
          router.push('/login?survey=true')
          return
        }

        // Check for error in URL
        const errorParam = urlParams.get('error') || hashParams.get('error')
        if (errorParam) {
          console.error('Auth error:', errorParam)
          setError('Authentication was cancelled or failed.')
          setTimeout(() => router.push('/login?error=auth_failed'), 2000)
          return
        }

        // No tokens or code found
        console.error('No authentication data found')
        setError('No authentication data received.')
        setTimeout(() => router.push('/login'), 2000)

      } catch (err) {
        console.error('Callback error:', err)
        setError('An unexpected error occurred.')
        setTimeout(() => router.push('/login?error=auth_failed'), 2000)
      }
    }

    handleCallback()
  }, [router])

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        {error ? (
          <>
            <div className="text-red-400 text-xl mb-4">{error}</div>
            <p className="text-gray-400">Redirecting to login...</p>
          </>
        ) : (
          <>
            <div className="text-white text-xl mb-4">Completing sign in...</div>
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#F59E0B] mx-auto"></div>
          </>
        )}
      </div>
    </div>
  )
}
