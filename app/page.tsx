'use client'

import { useState } from 'react'
import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log('Login attempt:', { email, password })
  }

  return (
    <div className="min-h-screen bg-travio-gray">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-6">
        <h1 className="text-4xl font-bold text-black">Travio</h1>
        <div className="flex gap-4">
          <button className="bg-black text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors">
            Log in
          </button>
          <button className="bg-black text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors">
            Sign up
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex items-center justify-center px-8 py-12">
        <div className="flex gap-16 items-center max-w-6xl w-full">
          {/* Left Side - Clean yellow section */}
          <div className="flex-1 max-w-md">
            <div className="bg-travio-yellow h-96 w-full rounded-lg">
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="flex-1 max-w-md">
            <div className="space-y-8">
              <h2 className="text-5xl font-bold text-black text-center mb-12">Log in</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email/Username Field */}
                <div>
                  <label htmlFor="email" className="block text-lg font-medium text-black mb-3">
                    Email / Username
                  </label>
                  <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="username@email"
                    className="w-full px-4 py-4 border border-gray-300 rounded-lg text-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                </div>

                {/* Password Field */}
                <div>
                  <label htmlFor="password" className="block text-lg font-medium text-black mb-3">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="***************"
                    className="w-full px-4 py-4 border border-gray-300 rounded-lg text-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  className="w-full bg-black text-white py-4 rounded-lg text-lg font-medium hover:bg-gray-800 transition-colors mt-8"
                >
                  Log in
                </button>
              </form>

              {/* Forgot Password */}
              <div className="text-center">
                <a href="#" className="text-gray-600 hover:text-black transition-colors">
                  Forgot your password?
                </a>
              </div>

              {/* Social Login */}
              <div className="text-center space-y-6">
                <p className="text-gray-600">--- or sign with socials ---</p>
                <div className="flex justify-center gap-6">
                  <button className="p-3 hover:bg-gray-200 rounded-full transition-colors">
                    <FaTwitter className="w-8 h-8 text-black" />
                  </button>
                  <button className="p-3 hover:bg-gray-200 rounded-full transition-colors">
                    <FaFacebook className="w-8 h-8 text-black" />
                  </button>
                  <button className="p-3 hover:bg-gray-200 rounded-full transition-colors">
                    <FaLinkedin className="w-8 h-8 text-black" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}