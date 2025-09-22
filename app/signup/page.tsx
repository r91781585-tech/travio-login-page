'use client'

import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'
import { Button, Input, SocialButton } from '@/components'
import { useSignupForm } from '@/hooks/useSignupForm'
import { SignupCredentials } from '@/types'

export default function SignupPage() {
  const { formData, formState, updateField, submitForm } = useSignupForm()

  const handleSignup = async (credentials: SignupCredentials) => {
    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      })

      const result = await response.json()

      if (result.success) {
        console.log('Signup successful:', result.user)
        // Future: Redirect to dashboard or handle successful signup
        alert('Account created successfully! Please log in.')
        window.location.href = '/'
      } else {
        console.error('Signup failed:', result.message)
        // Error handling is managed by the hook
      }
    } catch (error) {
      console.error('Signup error:', error)
      throw error // Let the hook handle the error
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    submitForm(handleSignup)
  }

  return (
    <div className="min-h-screen bg-travio-gray flex items-center justify-center px-8 py-12">
      <div className="flex justify-center items-center max-w-6xl w-full">
        {/* Signup Form */}
        <div className="w-full lg:w-1/2 max-w-md lg:pr-12">
          <div className="space-y-8">
            <h2 className="text-5xl font-bold text-black text-center mb-12">Sign up</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* General Error Message */}
              {formState.errors.general && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                  {formState.errors.general}
                </div>
              )}

              {/* Success Message */}
              {formState.success && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
                  Account created successfully! Redirecting to login...
                </div>
              )}

              {/* Full Name Field */}
              <Input
                id="fullName"
                type="text"
                label="Full Name"
                placeholder="Enter your Name"
                value={formData.fullName}
                onChange={(e) => updateField('fullName', e.target.value)}
                error={formState.errors.fullName}
                disabled={formState.isLoading}
                required
              />

              {/* Email/Phone Field */}
              <div className="space-y-2">
                <Input
                  id="email"
                  type="text"
                  label="Email / Phone no."
                  placeholder="Enter email or phone no."
                  value={formData.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  error={formState.errors.email}
                  disabled={formState.isLoading}
                  required
                />
                <div className="text-sm text-gray-500">
                  <span className="bg-yellow-100 px-2 py-1 rounded">
                    1. No need to have separate component for Email or phone
                    <br />
                    2. The moment user starts enter his/her input text input will change dynamically
                  </span>
                </div>
              </div>

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
                required
              />

              {/* Signup Button */}
              <Button
                type="submit"
                size="lg"
                fullWidth
                className="mt-8"
                disabled={formState.isLoading}
              >
                {formState.isLoading ? 'Creating Account...' : 'Sign up'}
              </Button>
            </form>

            {/* Forgot Password */}
            <div className="text-center">
              <a 
                href="#" 
                className="text-gray-600 hover:text-black transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  console.log('Forgot password clicked')
                }}
              >
                Forgot your password?
              </a>
            </div>

            {/* Social Login */}
            <div className="text-center space-y-6">
              <p className="text-gray-600">--- or sign up with socials ---</p>
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

            {/* Login Link */}
            <div className="text-center mt-8">
              <p className="text-gray-600">
                Already have an account?{' '}
                <a href="/" className="text-black font-semibold hover:underline">
                  Log in
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Background Image Section */}
        <div className="hidden lg:flex lg:w-1/2 justify-center items-center">
          <div className="w-96 h-96 bg-yellow-200 rounded-lg flex items-center justify-center">
            <img 
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Travel Signup Background" 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}