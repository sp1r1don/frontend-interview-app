import React, { useState } from 'react'

interface EmailStepProps {
  cb: (field: string, value: string) => void
}

const EmailStep: React.FC<EmailStepProps> = (props) => {
  const [email, setEmail] = useState('')

  function ageInputHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value
    setEmail(value)
  }

  function submitEventHandler() {
    props.cb('email', email)
  }

  return (
    <>
      <div>
        Email:{' '}
        <input type="email" onChange={ageInputHandler} value={email}></input>
      </div>
      <button onClick={submitEventHandler}>Next</button>
    </>
  )
}

export default EmailStep
