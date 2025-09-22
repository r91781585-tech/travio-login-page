// Form validation utilities

export interface LoginFormData {
  email: string
  password: string
}

export interface SignupFormData {
  fullName: string
  email: string
  password: string
}

export interface ValidationErrors {
  email?: string
  password?: string
  fullName?: string
  general?: string
}

export const validateEmail = (email: string): string | undefined => {
  if (!email) {
    return 'Email or phone number is required'
  }
  
  // Check if it's a phone number (basic validation)
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
  if (phoneRegex.test(email.replace(/[\s\-\(\)]/g, ''))) {
    return undefined // Valid phone number
  }
  
  // Check if it's an email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (email.includes('@') && !emailRegex.test(email)) {
    return 'Please enter a valid email address'
  }
  
  if (!email.includes('@') && !phoneRegex.test(email.replace(/[\s\-\(\)]/g, ''))) {
    return 'Please enter a valid email address or phone number'
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
  
  // Additional password strength validation
  if (!/(?=.*[a-zA-Z])/.test(password)) {
    return 'Password must contain at least one letter'
  }
  
  return undefined
}

export const validateFullName = (fullName: string): string | undefined => {
  if (!fullName) {
    return 'Full name is required'
  }
  
  if (fullName.trim().length < 2) {
    return 'Full name must be at least 2 characters'
  }
  
  if (!/^[a-zA-Z\s]+$/.test(fullName)) {
    return 'Full name can only contain letters and spaces'
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

export const validateSignupForm = (data: SignupFormData): ValidationErrors => {
  const errors: ValidationErrors = {}
  
  const fullNameError = validateFullName(data.fullName)
  if (fullNameError) errors.fullName = fullNameError
  
  const emailError = validateEmail(data.email)
  if (emailError) errors.email = emailError
  
  const passwordError = validatePassword(data.password)
  if (passwordError) errors.password = passwordError
  
  return errors
}

export const hasValidationErrors = (errors: ValidationErrors): boolean => {
  return Object.keys(errors).length > 0
}