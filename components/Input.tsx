import { InputHTMLAttributes, forwardRef } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', ...props }, ref) => {
    const inputClasses = `w-full px-4 py-4 border rounded-lg text-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent ${
      error ? 'border-red-500' : 'border-gray-300'
    } ${className}`.trim()

    return (
      <div className="space-y-2">
        {label && (
          <label htmlFor={props.id} className="block text-lg font-medium text-black">
            {label}
          </label>
        )}
        <input ref={ref} className={inputClasses} {...props} />
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input