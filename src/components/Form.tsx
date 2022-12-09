import React, { FormHTMLAttributes } from 'react'

interface FormProps {
  children: React.ReactNode
  disabled?: boolean
  [key: string]: FormHTMLAttributes<HTMLFormElement> | any
}

const Form = ({ children, disabled, onSubmit, ...otherProps }: FormProps) => {
  return (
    <form {...otherProps}>
      <fieldset disabled={disabled}>{children}</fieldset>
    </form>
  )
}

export default Form
