import React from 'react'
import { Link } from 'react-router-dom'
import { ProductCollectedData, ProductIds } from 'src/types/product'

interface SummaryStepProps {
  collectedData: ProductCollectedData[ProductIds]
}

const SummaryStep: React.FC<SummaryStepProps> = (props) => {
  return (
    <>
      <div>Email: {props.collectedData.email}</div>
      <div>Age: {props.collectedData.age}</div>
      {'firstName' in props.collectedData && (
        <div>
          Name: {props.collectedData.lastName} {props.collectedData.firstName}
        </div>
      )}
      <div>
        <Link to="/purchased=dev_ins">Purchase</Link>
      </div>
    </>
  )
}

export default SummaryStep
