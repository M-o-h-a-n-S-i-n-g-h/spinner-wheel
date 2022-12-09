import React, { useState } from 'react'
import { useAppContext } from '../context/AppContext'

import Form from './Form'
import Button from './Button'
import IconInput from './IconInput'

import EmailIcon from '../assets/SVG/EmailSVG'
import PhoneIcon from '../assets/SVG/PhoneSVG'

interface FormData {
  email: string
  phone: string
  terms?: boolean
}

const ICON_WIDTH = 20
const ICON_HEIGHT = 20

const RegisterForm = ({ acceptTerms }: { acceptTerms?: boolean }) => {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    email: '',
    phone: '',
    terms: false
  })
  const { email, phone, terms } = formData
  const {
    state: { error },
    setState
  } = useAppContext()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleClick = () => {
    if (error) {
      setState((prevState) => ({ ...prevState, error: '' }))
    }

    if (!email || !phone) {
      setState((prevState) => ({
        ...prevState,
        error: 'Please fill in all fields!'
      }))
      return
    }

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
    if (!emailRegex.test(email)) {
      setState((prevState) => ({
        ...prevState,
        error: 'Please enter a valid email address'
      }))
      return
    } else {
      setLoading(true)
      setTimeout(() => {
        setState((prevState) => ({
          ...prevState,
          step: 2
        }))
        setLoading(false)
      }, 2000)
    }
  }

  const handleAcceptTerms = () => {
    setFormData({
      ...formData,
      terms: !terms
    })
  }

  return (
    <>
      <Form className="mt-5 w-full">
        <IconInput
          className={error && 'border border-borderRed rounded-t-md'}
          name="email"
          label="Email"
          placeholder="Enter your email"
          type="email"
          value={email}
          onChange={handleChange}
          Icon={<EmailIcon width={ICON_WIDTH} height={ICON_HEIGHT} />}
        />
        {error && <p className="text-red mb-3 text-sm font-medium">{error}</p>}
        <IconInput
          name="phone"
          label="Phone number"
          placeholder="Enter your phone number"
          type="tel"
          value={phone}
          onChange={handleChange}
          Icon={<PhoneIcon width={ICON_WIDTH} height={ICON_HEIGHT} />}
        />
        {acceptTerms && (
          <div className="flex items-center mt-2 rounded-md border border-black px-2 py-3 mt-6 mb-4">
            <input
              type="checkbox"
              name="acceptTerms"
              id="acceptTerms"
              className="w-12 h-12 mr-2 cursor-pointer"
              checked={terms}
              onChange={handleAcceptTerms}
            />
            <label htmlFor="acceptTerms" className="text-xs cursor-pointer">
              I agree to receiving recurring automated messages at the number I
              have provided. Consent is not a condition to purchase.
            </label>
          </div>
        )}
      </Form>
      <Button
        className="w-full text-lg py-3 mt-2"
        onClick={handleClick}
        disabled={loading}
        loading={loading}
      >
        Try Your Luck
      </Button>
    </>
  )
}

export default RegisterForm
