import React, { useState } from 'react'

interface EmailStepProps {
  cb: (field: string, value: string) => void
}

const EMAIL_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const EmailStep: React.FC<EmailStepProps> = (props) => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState(false)

  function ageInputHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value

    setError(false)
    setEmail(value)
  }

  function submitEventHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const isEmailValid = email.toLowerCase().match(EMAIL_REGEX)
    setError(!isEmailValid)

    if (!isEmailValid) return

    props.cb('email', email)
  }

  return (
    <form onSubmit={submitEventHandler}>
      <div>
        Email:{' '}
        <input
          className={error ? 'error' : ''}
          type="email"
          onChange={ageInputHandler}
          value={email}
        />
      </div>
      <button type="submit">Next</button>
    </form>
  )
}

export default EmailStep
