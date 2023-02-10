import React, { useState } from 'react'

interface FirstLastNameStepProps {
  cb: (field: string, value: string) => void
}

const REG_NAME = /^[a-zA-Z]+$/

const FORM_DATA = {
  firstName: '',
  lastName: '',
} as const

const FORM_DATA_ERRORS = () => {
  const obj: Partial<Record<keyof typeof FORM_DATA, boolean>> = {}
  Object.keys(FORM_DATA).forEach(
    (el: keyof typeof FORM_DATA) => (obj[el] = false)
  )
  return obj
}

export const FirstLastNameStep: React.FC<FirstLastNameStepProps> = (props) => {
  const [formData, setFormData] = useState(FORM_DATA)
  const [errors, setErrors] = useState(FORM_DATA_ERRORS)

  const changeInputHandler =
    (dataKey: keyof typeof FORM_DATA) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value

      setErrors((curr) => ({
        ...curr,
        [dataKey]: !REG_NAME.test(value),
      }))

      setFormData((curr) => ({
        ...curr,
        [dataKey]: value,
      }))
    }

  function submitEventHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (Object.values(formData).some((el) => !el)) return
    if (Object.values(errors).some(Boolean)) return

    Object.keys(FORM_DATA).forEach((field: keyof typeof FORM_DATA) => {
      props.cb(field, formData[field])
      props.cb(field, formData[field])
    })
  }

  return (
    <form onSubmit={submitEventHandler}>
      <div>
        First name:{' '}
        <input
          className={errors.firstName ? 'error' : ''}
          onChange={changeInputHandler('firstName')}
          value={formData.firstName}
        />
      </div>
      <br />
      <div>
        Last name:{' '}
        <input
          className={errors.lastName ? 'error' : ''}
          onChange={changeInputHandler('lastName')}
          value={formData.lastName}
        />
      </div>
      <button type="submit">Next</button>
    </form>
  )
}
