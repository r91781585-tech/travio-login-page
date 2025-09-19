// Form validation utilities

export interface LoginFormData {
  email: string
  password: string
}

export interface ValidationErrors {
  email?: string
  password?: string
}

export const validateEmail = (email: string): string | undefined => {
  if (!email) {
    return 'Email or username is required'
  }
  
  // Check if it's an email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (email.includes('@') && !emailRegex.test(email)) {
    return 'Please enter a valid email address'
  }
  
  return undefined
}

export const validatePassword = (password: string): string | undefined => {
  if (!password) {
    return 'Password is required'
  }
  
  if (password.length < 6) {
    return 'Password must be at least 6 characters'
  }
  
  return undefined
}

export const validateLoginForm = (data: LoginFormData): ValidationErrors => {
  const errors: ValidationErrors = {}
  
  const emailError = validateEmail(data.email)
  if (emailError) errors.email = emailError
  
  const passwordError = validatePassword(data.password)
  if (passwordError) errors.password = passwordError
  
  return errors
}

export const hasValidationErrors = (errors: ValidationErrors): boolean => {
  return Object.keys(errors).length > 0
}