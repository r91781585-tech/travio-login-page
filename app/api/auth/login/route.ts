import { NextRequest, NextResponse } from 'next/server'
import { validateLoginForm } from '@/lib/validation'
import { LoginCredentials, AuthResponse } from '@/types'

// Mock user database (should match the one in signup)
// In production, this would be a real database
const users: Array<{ id: string; email: string; name: string; password: string }> = [
  {
    id: '1',
    email: 'demo@travio.com',
    name: 'Demo User',
    password: 'password123'
  }
]

export async function POST(request: NextRequest) {
  try {
    const body: LoginCredentials = await request.json()
    const { email, password } = body

    // Validate input
    const validationErrors = validateLoginForm({ email, password })
    if (Object.keys(validationErrors).length > 0) {
      return NextResponse.json({
        success: false,
        message: 'Validation failed',
        errors: validationErrors
      } as AuthResponse, { status: 400 })
    }

    // Find user by email (case insensitive)
    const user = users.find(u => 
      u.email.toLowerCase() === email.toLowerCase()
    )

    if (!user) {
      return NextResponse.json({
        success: false,
        message: 'Invalid credentials',
        errors: { general: 'Email or password is incorrect' }
      } as AuthResponse, { status: 401 })
    }

    // Check password (in production, compare hashed passwords)
    if (user.password !== password) {
      return NextResponse.json({
        success: false,
        message: 'Invalid credentials',
        errors: { general: 'Email or password is incorrect' }
      } as AuthResponse, { status: 401 })
    }

    // Login successful - return user data (exclude password)
    const { password: _, ...userWithoutPassword } = user
    
    return NextResponse.json({
      success: true,
      message: 'Login successful',
      user: userWithoutPassword
    } as AuthResponse, { status: 200 })

  } catch (error) {
    console.error('Login error:', error)
    
    return NextResponse.json({
      success: false,
      message: 'Internal server error',
      errors: { general: 'Something went wrong. Please try again later.' }
    } as AuthResponse, { status: 500 })
  }
}