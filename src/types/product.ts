export enum ProductIds {
  devIns = 'dev_ins',
  designerIns = 'designer_ins',
}

export interface ProductFlowsSteps {
  [ProductIds.devIns]: ['email', 'age', 'summary']
  [ProductIds.designerIns]: ['email', 'age', 'firsLastName', 'summary']
}
