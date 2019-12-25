export class ServiceModel {
  name: string
  params: string[]
  isActive: boolean
  constructor(name: string, params: string[], isActive: boolean){
    this.name = name
    this.params = params
    this.isActive = isActive
  }
}
