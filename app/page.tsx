'use client'

import { useState } from 'react'
import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'
import { Button, Input, SocialButton } from '@/components'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({})

  const validateForm = () => {
    const newErrors: { email?: string; password?: string } = {}
    
    if (!email) {
      newErrors.email = 'Email or username is required'
    }
    
    if (!password) {
      newErrors.password = 'Password is required'
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (validateForm()) {
      // Handle login logic here
      console.log('Login attempt:', { email, password })
      // Future: Add authentication API call
    }
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
        <div className="flex gap-16 items-center max-w-6xl w-full">
          {/* Left Side - Clean yellow section */}
          <div className="flex-1 max-w-md">
            <div className="bg-travio-yellow h-96 w-full rounded-lg">
              {/* Future: Add background image or illustration */}
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="flex-1 max-w-md">
            <div className="space-y-8">
              <h2 className="text-5xl font-bold text-black text-center mb-12">Log in</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email/Username Field */}
                <Input
                  id="email"
                  type="text"
                  label="Email / Username"
                  placeholder="username@email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={errors.email}
                />

                {/* Password Field */}
                <Input
                  id="password"
                  type="password"
                  label="Password"
                  placeholder="***************"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  error={errors.password}
                />

                {/* Login Button */}
                <Button
                  type="submit"
                  size="lg"
                  fullWidth
                  className="mt-8"
                >
                  Log in
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