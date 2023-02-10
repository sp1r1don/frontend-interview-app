import React from 'react'
import AgeStep from 'src/components/InsuranceBuyFlow/AgeStep'
import EmailStep from 'src/components/InsuranceBuyFlow/EmailStep'
import { FirstLastNameStep } from 'src/components/InsuranceBuyFlow/FirstLastNameStep'
import SummaryStep from 'src/components/InsuranceBuyFlow/SummaryStep'
import {
  ProductCollectedData,
  ProductFlowsSteps,
  ProductIds,
} from 'src/types/product'

interface DesignerInsuranceFlowProps {
  onChangeStep: (
    nextStep: ProductFlowsSteps[ProductIds][number]
  ) => (field: string, value: string | number) => void
  currentStep: ProductFlowsSteps[ProductIds][number]
  collectedData: ProductCollectedData['designer_ins']
}

export const DesignerInsuranceFlow: React.FC<DesignerInsuranceFlowProps> = ({
  currentStep,
  onChangeStep,
  collectedData,
}) => {
  return (
    <>
      {currentStep === 'firstLastName' && (
        <FirstLastNameStep cb={onChangeStep('email')} />
      )}
      {currentStep === 'email' && <EmailStep cb={onChangeStep('age')} />}
      {currentStep === 'age' && <AgeStep cb={onChangeStep('summary')} />}
      {currentStep === 'summary' && (
        <SummaryStep collectedData={collectedData} />
      )}
    </>
  )
}
