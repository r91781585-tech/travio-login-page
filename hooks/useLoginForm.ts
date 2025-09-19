import { useState } from 'react'
import { validateLoginForm } from '@/lib/validation'
import { LoginCredentials, FormState } from '@/types'

export function useLoginForm() {
  const [formData, setFormData] = useState<LoginCredentials>({
    email: '',
    password: ''
  })
  
  const [formState, setFormState] = useState<FormState>({
    isLoading: false,
    errors: {}
  })

  const updateField = (field: keyof LoginCredentials, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    
    // Clear field error when user starts typing
    if (formState.errors[field]) {
      setFormState(prev => ({
        ...prev,
        errors: { ...prev.errors, [field]: '' }
      }))
    }
  }

  const validateForm = () => {
    const errors = validateLoginForm(formData)
    setFormState(prev => ({ ...prev, errors }))
    return Object.keys(errors).length === 0
  }

  const submitForm = async (onSubmit: (data: LoginCredentials) => Promise<void>) => {
    if (!validateForm()) return

    setFormState(prev => ({ ...prev, isLoading: true }))
    
    try {
      await onSubmit(formData)
    } catch (error) {
      console.error('Form submission error:', error)
      setFormState(prev => ({
        ...prev,
        errors: { general: 'An error occurred. Please try again.' }
      }))
    } finally {
      setFormState(prev => ({ ...prev, isLoading: false }))
    }
  }

  const resetForm = () => {
    setFormData({ email: '', password: '' })
    setFormState({ isLoading: false, errors: {} })
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