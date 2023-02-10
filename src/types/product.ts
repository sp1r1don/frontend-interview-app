import { PRODUCT_COLLECTED_DATA, PRODUCT_FLOWS_STEPS } from 'src/consts/product'

export enum ProductIds {
  devIns = 'dev_ins',
  designerIns = 'designer_ins',
}

export type ProductFlowsSteps = typeof PRODUCT_FLOWS_STEPS

export type ProductCollectedData = typeof PRODUCT_COLLECTED_DATA
