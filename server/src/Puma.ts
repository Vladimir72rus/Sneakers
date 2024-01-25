import { SneakersType } from './Types'
import { pumaData } from './mockData/mock'

export class Puma {
  id = Date.now()
  brand = 'Puma'
  price = 0
  size = 0
  description = ''

  constructor(price?: number, size?: number, description?: string) {
    this.price = price
    this.size = size
    this.description = description
  }

  create () {
    const puma: SneakersType[] = []

    pumaData.forEach((el: SneakersType) => {
      puma.push(new Puma(el.price, el.size, el.description))
    })
    return puma
  }
}

export default Puma
