import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { DeveloperInsuranceFlow } from 'src/components/InsuranceBuyFlow/DeveloperInsuranceFlow'
import SummaryStep from 'src/components/InsuranceBuyFlow/SummaryStep'
import { ProductFlowsSteps, ProductIds } from 'src/types/product'

const PRODUCT_IDS_TO_NAMES = {
  [ProductIds.devIns]: 'Developer Insurance',
  [ProductIds.designerIns]: 'Designer Insurance',
}

const PRODUCT_COLLECTED_DATA = {
  [ProductIds.devIns]: {
    email: '',
    age: 0,
  },
  [ProductIds.designerIns]: {
    firstName: '',
    lastName: '',
    email: '',
    age: 0,
  },
}

const PRODUCT_FLOWS_STEPS = {
  [ProductIds.devIns]: ['email', 'age'] as const,
  [ProductIds.designerIns]: ['email', 'age', 'firstLastName'] as const,
}

export const ProductID: React.FC = () => {
  const { productID } = useParams<{ productID: ProductIds }>() as unknown as {
    productID: ProductIds
  }

  console.log('productID', productID)

  const [currentStep, setStep] = useState<
    ProductFlowsSteps[ProductIds][number]
  >(PRODUCT_FLOWS_STEPS[productID][0])
  const [collectedData, updateData] = useState(
    PRODUCT_COLLECTED_DATA[productID]
  )

  const getStepCallback =
    (nextStep: ProductFlowsSteps[ProductIds][number]) =>
    (field: string, value: any) => {
      updateData({ ...collectedData, [field]: value })
      setStep(nextStep)
    }

  if (!productID) return null

  return (
    <>
      <h4>Buying {PRODUCT_IDS_TO_NAMES[productID]}</h4>
      {currentStep === 'summary' ? (
        <SummaryStep collectedData={collectedData} />
      ) : (
        <>
          <DeveloperInsuranceFlow
            currentStep={currentStep}
            onChangeStep={getStepCallback}
          />
        </>
      )}
    </>
  )
}
