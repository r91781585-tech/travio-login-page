import { NextRequest, NextResponse } from 'next/server'
import { validateLoginForm } from '@/lib/validation'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password } = body

    // Validate input
    const errors = validateLoginForm({ email, password })
    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { success: false, errors },
        { status: 400 }
      )
    }

    // TODO: Implement actual authentication logic
    // This is a placeholder for future implementation
    
    // Example authentication check (replace with real logic)
    if (email === 'demo@travio.com' && password === 'password123') {
      return NextResponse.json({
        success: true,
        message: 'Login successful',
        user: {
          id: '1',
          email: email,
          name: 'Demo User'
        }
      })
    }

    return NextResponse.json(
      { success: false, message: 'Invalid credentials' },
      { status: 401 }
    )
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    )
  }
}