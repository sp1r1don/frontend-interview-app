import React, { useState } from 'react'

interface AgeStepProps {
  cb: (field: string, value: number) => void
}

const IS_NUMERIC = /^-?\d+$/

const AgeStep: React.FC<AgeStepProps> = (props) => {
  const [age, setAge] = useState(0)
  const [error, setError] = useState(false)

  function ageInputHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value

    if (!IS_NUMERIC.test(value) || Number(value) === 0) setError(true)
    else setError(false)

    setAge(Number(value))
  }

  function submitEventHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (error || Number(age) === 0) {
      setError(true)
      return
    }

    props.cb('age', age)
  }

  return (
    <form onSubmit={submitEventHandler}>
      <div>
        Age:{' '}
        <input
          className={error ? 'error' : ''}
          type="number"
          onChange={ageInputHandler}
          value={age}
        />
      </div>
      <button type="submit">Next</button>
    </form>
  )
}

export default AgeStep
