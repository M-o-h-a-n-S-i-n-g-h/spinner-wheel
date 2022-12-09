import React, { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  onClick?: (event: any) => void
  disabled?: boolean
  loading?: boolean
  className?: string
}

const Button = ({
  children,
  disabled,
  onClick,
  className,
  loading
}: ButtonProps) => {
  const defaultClass =
    'bg-[#146531] px-4 py-2 rounded-full text-white text-md font-bold hover:opacity-80'
  const disabledClass =
    'bg-[#146531] px-4 py-2 rounded-full text-white text-md font-bold opacity-50'

  return (
    <button
      className={`${disabled ? disabledClass : defaultClass} ${
        className && className
      }`}
      disabled={disabled}
      onClick={onClick}
    >
      {loading ? 'Loading...' : children}
    </button>
  )
}

export default Button
