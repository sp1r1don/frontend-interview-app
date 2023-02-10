import React, { useState } from 'react'

interface AgeStepProps {
  cb: (field: string, value: number) => void
}

const AgeStep: React.FC<AgeStepProps> = (props) => {
  const [age, setAge] = useState(0)

  function ageInputHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value
    setAge(Number(value))
  }

  function submitEventHandler() {
    props.cb('age', age)
  }

  return (
    <>
      <div>
        Age: <input type="number" onChange={ageInputHandler} value={age} />
      </div>
      <button onClick={submitEventHandler}>Next</button>
    </>
  )
}

export default AgeStep
