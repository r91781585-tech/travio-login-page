'use client'

import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'
import { Button, Input, SocialButton } from '@/components'
import { useLoginForm } from '@/hooks/useLoginForm'
import { LoginCredentials } from '@/types'

export default function LoginPage() {
  const { formData, formState, updateField, submitForm } = useLoginForm()

  const handleLogin = async (credentials: LoginCredentials) => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      })

      const result = await response.json()

      if (result.success) {
        console.log('Login successful:', result.user)
        // Future: Redirect to dashboard or handle successful login
      } else {
        console.error('Login failed:', result.message)
        // Future: Show error message to user
      }
    } catch (error) {
      console.error('Login error:', error)
      // Future: Show error message to user
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    submitForm(handleLogin)
  }

  return (
    <div className="min-h-screen bg-travio-gray">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-6">
        <h1 className="text-4xl font-bold text-black">Travio</h1>
        <div className="flex gap-4">
          <Button>Log in</Button>
          <Button>Sign up</Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex items-center justify-center px-8 py-12">
        <div className="flex justify-center items-center max-w-6xl w-full">
          {/* Login Form - Centered */}
          <div className="max-w-md w-full">
            <div className="space-y-8">
              <h2 className="text-5xl font-bold text-black text-center mb-12">Log in</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* General Error Message */}
                {formState.errors.general && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                    {formState.errors.general}
                  </div>
                )}

                {/* Email/Username Field */}
                <Input
                  id="email"
                  type="text"
                  label="Email / Username"
                  placeholder="username@email"
                  value={formData.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  error={formState.errors.email}
                  disabled={formState.isLoading}
                />

                {/* Password Field */}
                <Input
                  id="password"
                  type="password"
                  label="Password"
                  placeholder="***************"
                  value={formData.password}
                  onChange={(e) => updateField('password', e.target.value)}
                  error={formState.errors.password}
                  disabled={formState.isLoading}
                />

                {/* Login Button */}
                <Button
                  type="submit"
                  size="lg"
                  fullWidth
                  className="mt-8"
                  disabled={formState.isLoading}
                >
                  {formState.isLoading ? 'Logging in...' : 'Log in'}
                </Button>
              </form>

              {/* Forgot Password */}
              <div className="text-center">
                <a 
                  href="#" 
                  className="text-gray-600 hover:text-black transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    // Future: Add forgot password functionality
                    console.log('Forgot password clicked')
                  }}
                >
                  Forgot your password?
                </a>
              </div>

              {/* Social Login */}
              <div className="text-center space-y-6">
                <p className="text-gray-600">--- or sign with socials ---</p>
                <div className="flex justify-center gap-6">
                  <SocialButton provider="twitter">
                    <FaTwitter className="w-8 h-8 text-black" />
                  </SocialButton>
                  <SocialButton provider="facebook">
                    <FaFacebook className="w-8 h-8 text-black" />
                  </SocialButton>
                  <SocialButton provider="linkedin">
                    <FaLinkedin className="w-8 h-8 text-black" />
                  </SocialButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}