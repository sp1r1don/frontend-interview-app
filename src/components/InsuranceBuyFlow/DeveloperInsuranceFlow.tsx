import React from 'react'
import AgeStep from 'src/components/InsuranceBuyFlow/AgeStep'
import EmailStep from 'src/components/InsuranceBuyFlow/EmailStep'
import SummaryStep from 'src/components/InsuranceBuyFlow/SummaryStep'
import {
  ProductCollectedData,
  ProductFlowsSteps,
  ProductIds,
} from 'src/types/product'

interface DeveloperInsuranceFlowProps {
  onChangeStep: (
    nextStep: ProductFlowsSteps[ProductIds][number]
  ) => (field: string, value: string | number) => void
  currentStep: ProductFlowsSteps[ProductIds][number]
  collectedData: ProductCollectedData['dev_ins']
}

export const DeveloperInsuranceFlow: React.FC<DeveloperInsuranceFlowProps> = ({
  currentStep,
  onChangeStep,
  collectedData,
}) => {
  return (
    <>
      {currentStep === 'email' && <EmailStep cb={onChangeStep('age')} />}
      {currentStep === 'age' && <AgeStep cb={onChangeStep('summary')} />}
      {currentStep === 'summary' && (
        <SummaryStep collectedData={collectedData} />
      )}
    </>
  )
}
