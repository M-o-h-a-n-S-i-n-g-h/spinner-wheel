import React from 'react'

interface InputProps {
  className?: string
  type: string
  label: string
  name: string
  placeholder?: string
  value: string
  Icon: React.ReactNode
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const IconInput = ({
  type,
  label,
  name,
  className,
  onChange,
  value,
  placeholder,
  Icon
}: InputProps) => {
  return (
    <div
      className={`w-full h-[64px] bg-white rounded-t-md border-b border-b-darkGreen mb-2`}
    >
      <div className={`flex w-full h-full ${className}`}>
        <div className="w-16 flex justify-center items-center">{Icon}</div>
        <div className="w-full flex flex-col px-2 py-2">
          <label className="text-sm text-gray-700">{label}</label>
          <input
            name={name}
            type={type}
            maxLength={type === 'tel' ? 10 : 255}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`h-full w-full text-md border-2 border-gray-300 rounded-md appearance-none outline-none border-none ${className}`}
          />
        </div>
      </div>
    </div>
  )
}

export default IconInput
