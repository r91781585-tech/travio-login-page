import { useState } from 'react'
import { validateSignupForm } from '@/lib/validation'
import { SignupCredentials, FormState } from '@/types'

export function useSignupForm() {
  const [formData, setFormData] = useState<SignupCredentials>({
    fullName: '',
    email: '',
    password: ''
  })
  
  const [formState, setFormState] = useState<FormState & { success?: boolean }>({
    isLoading: false,
    errors: {},
    success: false
  })

  const updateField = (field: keyof SignupCredentials, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    
    // Clear field error when user starts typing
    if (formState.errors[field]) {
      setFormState(prev => ({
        ...prev,
        errors: { ...prev.errors, [field]: '' },
        success: false
      }))
    }
  }

  const validateForm = () => {
    const errors = validateSignupForm(formData)
    setFormState(prev => ({ ...prev, errors, success: false }))
    return Object.keys(errors).length === 0
  }

  const submitForm = async (onSubmit: (data: SignupCredentials) => Promise<void>) => {
    if (!validateForm()) return

    setFormState(prev => ({ ...prev, isLoading: true, success: false }))
    
    try {
      await onSubmit(formData)
      setFormState(prev => ({ 
        ...prev, 
        isLoading: false, 
        success: true,
        errors: {} 
      }))
    } catch (error: any) {
      console.error('Form submission error:', error)
      
      // Handle different types of errors
      let errorMessage = 'An error occurred. Please try again.'
      
      if (error.message) {
        errorMessage = error.message
      } else if (typeof error === 'string') {
        errorMessage = error
      }
      
      setFormState(prev => ({
        ...prev,
        isLoading: false,
        success: false,
        errors: { general: errorMessage }
      }))
    }
  }

  const resetForm = () => {
    setFormData({ fullName: '', email: '', password: '' })
    setFormState({ isLoading: false, errors: {}, success: false })
  }

  return {
    formData,
    formState,
    updateField,
    submitForm,
    resetForm,
    validateForm
  }
}