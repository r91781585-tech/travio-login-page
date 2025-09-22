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
        alert('Login successful! Welcome back.')
        // Future: Redirect to dashboard or handle successful login
      } else {
        // Handle API errors
        if (result.errors) {
          throw new Error(result.errors.general || result.message || 'Login failed')
        } else {
          throw new Error(result.message || 'Login failed')
        }
      }
    } catch (error: any) {
      console.error('Login error:', error)
      throw error // Let the hook handle the error display
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    submitForm(handleLogin)
  }

  return (
    <div className="min-h-screen bg-travio-gray flex items-center justify-center px-8 py-12">
      <div className="flex justify-center items-center max-w-6xl w-full">
        {/* Background Image Section */}
        <div className="hidden lg:flex lg:w-1/2 justify-center items-center pr-12">
          <div className="w-96 h-96 bg-yellow-200 rounded-lg flex items-center justify-center">
            <img 
              src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Travel Background" 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Login Form */}
        <div className="w-full lg:w-1/2 max-w-md">
          <div className="space-y-8">
            <h2 className="text-5xl font-bold text-black text-center mb-12">Log in</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* General Error Message */}
              {formState.errors.general && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                  {formState.errors.general}
                </div>
              )}

              {/* Demo Credentials Info */}
              <div className="bg-blue-50 border border-blue-200 text-blue-700 px-4 py-3 rounded-lg text-sm">
                <strong>Demo Login:</strong> demo@travio.com / password123
              </div>

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
                  alert('Forgot password functionality will be implemented soon!')
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

            {/* Sign Up Link */}
            <div className="text-center mt-8">
              <p className="text-gray-600">
                Don't have an account?{' '}
                <a href="/signup" className="text-black font-semibold hover:underline">
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}