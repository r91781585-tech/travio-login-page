// User types
export interface User {
  id: string
  email: string
  name: string
  avatar?: string
}

// Authentication types
export interface LoginCredentials {
  email: string
  password: string
}

export interface AuthResponse {
  success: boolean
  message?: string
  user?: User
  errors?: Record<string, string>
}

// Social provider types
export type SocialProvider = 'twitter' | 'facebook' | 'linkedin'

// API response types
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  message?: string
  errors?: Record<string, string>
}

// Form state types
export interface FormState {
  isLoading: boolean
  errors: Record<string, string>
}

// Component prop types
export interface ButtonVariant {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
}

export interface InputProps {
  label?: string
  error?: string
  required?: boolean
}