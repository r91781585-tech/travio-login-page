import { ButtonHTMLAttributes, ReactNode } from 'react'

interface SocialButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  provider: 'twitter' | 'facebook' | 'linkedin'
}

export default function SocialButton({
  children,
  provider,
  className = '',
  ...props
}: SocialButtonProps) {
  const handleSocialLogin = () => {
    // Future implementation for social authentication
    console.log(`Login with ${provider}`)
  }

  return (
    <button
      className={`p-3 hover:bg-gray-200 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 ${className}`.trim()}
      onClick={handleSocialLogin}
      aria-label={`Login with ${provider}`}
      {...props}
    >
      {children}
    </button>
  )
}