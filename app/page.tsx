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
    <div className="min-h-screen flex">
      {/* Left Side - Travel Image */}
      <div className="hidden lg:flex lg:w-3/5 relative">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
            alt="Beautiful travel destination with mountains and lake" 
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
        </div>
        
        {/* Travel-themed content overlay */}
        <div className="relative z-10 flex flex-col justify-center items-start p-12 text-white">
          <div className="max-w-md">
            <h1 className="text-4xl font-bold mb-4">Welcome to Travio</h1>
            <p className="text-xl mb-6 leading-relaxed">
              Discover amazing destinations and create unforgettable memories with our travel platform.
            </p>
            <div className="flex items-center space-x-4 text-sm opacity-90">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-travio-yellow rounded-full mr-2"></span>
                <span>Trusted by 10M+ travelers</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-2/5 flex items-center justify-center bg-white px-8 py-12">
        <div className="w-full max-w-md">
          <div className="space-y-8">
            {/* Logo/Brand */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Sign in to Travio</h2>
              <p className="text-gray-600">Welcome back! Please enter your details.</p>
            </div>
            
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
                placeholder="Enter your email or username"
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
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) => updateField('password', e.target.value)}
                error={formState.errors.password}
                disabled={formState.isLoading}
              />

              {/* Remember me and Forgot password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                  <span className="ml-2 text-sm text-gray-600">Remember me</span>
                </label>
                <a 
                  href="#" 
                  className="text-sm text-blue-600 hover:text-blue-500 transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    alert('Forgot password functionality will be implemented soon!')
                  }}
                >
                  Forgot password?
                </a>
              </div>

              {/* Login Button */}
              <Button
                type="submit"
                size="lg"
                fullWidth
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
                disabled={formState.isLoading}
              >
                {formState.isLoading ? 'Signing in...' : 'Sign in'}
              </Button>
            </form>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-3 gap-3">
              <SocialButton provider="twitter">
                <FaTwitter className="w-5 h-5 text-blue-400" />
              </SocialButton>
              <SocialButton provider="facebook">
                <FaFacebook className="w-5 h-5 text-blue-600" />
              </SocialButton>
              <SocialButton provider="linkedin">
                <FaLinkedin className="w-5 h-5 text-blue-700" />
              </SocialButton>
            </div>

            {/* Sign Up Link */}
            <div className="text-center">
              <p className="text-gray-600">
                Don't have an account?{' '}
                <a href="/signup" className="text-blue-600 font-semibold hover:text-blue-500 transition-colors">
                  Sign up for free
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}