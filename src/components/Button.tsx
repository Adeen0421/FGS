import { ButtonHTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'

type ButtonVariant = 'primary' | 'secondary' | 'success' | 'outline' | 'ghost' | 'yellow'
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
  loading?: boolean
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  icon,
  iconPosition = 'left',
  className,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl',
  }

  const variantStyles = {
    primary: 'bg-[#0A192F] hover:bg-[#112240] text-white shadow-soft-md hover:shadow-soft-lg hover:-translate-y-0.5 active:translate-y-0 focus:ring-[#0A192F]/30',
    secondary: 'bg-white border-2 border-[#0A192F] text-[#0A192F] hover:bg-[#0A192F] hover:text-white shadow-soft-md hover:shadow-soft-lg hover:-translate-y-0.5 active:translate-y-0 focus:ring-[#0A192F]/30',
    success: 'bg-[#0A192F] text-white shadow-soft-md hover:shadow-soft-lg hover:-translate-y-0.5 active:translate-y-0 focus:ring-[#0A192F]/30',
    yellow: 'bg-[#0A192F] text-white shadow-soft-md hover:shadow-soft-lg hover:-translate-y-0.5 active:translate-y-0 focus:ring-[#0A192F]/30',
    outline: 'border-2 border-[#0A192F] text-[#0A192F] hover:bg-[#0A192F] hover:text-white focus:ring-[#0A192F]/30',
    ghost: 'text-[#0A192F] hover:bg-[#0A192F]/10 focus:ring-[#0A192F]/30',
  }

  const disabledStyles = 'opacity-50 cursor-not-allowed pointer-events-none'
  const loadingStyles = 'relative !text-transparent transition-none hover:!text-transparent'

  return (
    <button
      className={clsx(
        baseStyles,
        sizeStyles[size],
        variantStyles[variant],
        {
          'w-full': fullWidth,
          [disabledStyles]: disabled,
          [loadingStyles]: loading,
        },
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            className="animate-spin h-5 w-5 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </div>
      )}
      
      {icon && iconPosition === 'left' && !loading && (
        <span className="mr-2 -ml-1">{icon}</span>
      )}
      
      {children}
      
      {icon && iconPosition === 'right' && !loading && (
        <span className="ml-2 -mr-1">{icon}</span>
      )}
    </button>
  )
} 