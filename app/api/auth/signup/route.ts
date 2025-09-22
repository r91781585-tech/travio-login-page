import { NextRequest, NextResponse } from 'next/server'
import { validateSignupForm } from '@/lib/validation'
import { SignupCredentials, AuthResponse } from '@/types'

// Mock user database (in production, use a real database)
const users: Array<{ id: string; email: string; name: string; password: string }> = []

export async function POST(request: NextRequest) {
  try {
    const body: SignupCredentials = await request.json()
    
    // Validate the form data
    const validationErrors = validateSignupForm(body)
    if (Object.keys(validationErrors).length > 0) {
      return NextResponse.json({
        success: false,
        message: 'Validation failed',
        errors: validationErrors
      } as AuthResponse, { status: 400 })
    }

    const { fullName, email, password } = body

    // Check if user already exists
    const existingUser = users.find(user => 
      user.email.toLowerCase() === email.toLowerCase()
    )

    if (existingUser) {
      return NextResponse.json({
        success: false,
        message: 'User already exists',
        errors: { email: 'An account with this email already exists' }
      } as AuthResponse, { status: 409 })
    }

    // Create new user (in production, hash the password)
    const newUser = {
      id: Date.now().toString(),
      email: email.toLowerCase(),
      name: fullName,
      password: password // In production, hash this password
    }

    users.push(newUser)

    // Return success response (exclude password)
    const { password: _, ...userWithoutPassword } = newUser
    
    return NextResponse.json({
      success: true,
      message: 'Account created successfully',
      user: userWithoutPassword
    } as AuthResponse, { status: 201 })

  } catch (error) {
    console.error('Signup error:', error)
    
    return NextResponse.json({
      success: false,
      message: 'Internal server error',
      errors: { general: 'Something went wrong. Please try again later.' }
    } as AuthResponse, { status: 500 })
  }
}