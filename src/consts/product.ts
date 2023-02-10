import { ProductIds } from 'src/types/product'

export const PRODUCT_FLOWS_STEPS = {
  [ProductIds.devIns]: ['email', 'age', 'summary'] as const,
  [ProductIds.designerIns]: [
    'firstLastName',
    'email',
    'age',
    'summary',
  ] as const,
}
export const PRODUCT_IDS_TO_NAMES = {
  [ProductIds.devIns]: 'Developer Insurance',
  [ProductIds.designerIns]: 'Designer Insurance',
}

export const PRODUCT_COLLECTED_DATA = {
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
