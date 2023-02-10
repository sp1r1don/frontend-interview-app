import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { DesignerInsuranceFlow } from 'src/components/InsuranceBuyFlow/DesignerInsuranceFlow'
import { DeveloperInsuranceFlow } from 'src/components/InsuranceBuyFlow/DeveloperInsuranceFlow'
import SummaryStep from 'src/components/InsuranceBuyFlow/SummaryStep'
import {
  PRODUCT_COLLECTED_DATA,
  PRODUCT_FLOWS_STEPS,
  PRODUCT_IDS_TO_NAMES,
} from 'src/consts/product'
import {
  ProductCollectedData,
  ProductFlowsSteps,
  ProductIds,
} from 'src/types/product'

export const ProductID: React.FC = () => {
  const { productID } = useParams<{ productID: ProductIds }>() as unknown as {
    productID: ProductIds
  }

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

  useEffect(() => {
    if (!productID) return

    setStep(PRODUCT_FLOWS_STEPS[productID][0])
    updateData(PRODUCT_COLLECTED_DATA[productID])
  }, [productID])

  if (!productID) return null

  return (
    <>
      <h4>Buying {PRODUCT_IDS_TO_NAMES[productID]}</h4>
      {currentStep === 'summary' ? (
        <SummaryStep collectedData={collectedData} />
      ) : (
        <>
          {productID === ProductIds.devIns && (
            <DeveloperInsuranceFlow
              currentStep={currentStep}
              onChangeStep={getStepCallback}
              collectedData={
                collectedData as ProductCollectedData[ProductIds.devIns]
              }
            />
          )}
          {productID === ProductIds.designerIns && (
            <DesignerInsuranceFlow
              currentStep={currentStep}
              onChangeStep={getStepCallback}
              collectedData={
                collectedData as ProductCollectedData[ProductIds.designerIns]
              }
            />
          )}
        </>
      )}
    </>
  )
}
