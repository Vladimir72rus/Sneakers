import { SneakersType } from './Types'
import { nikeData } from './mockData/mock'

export class Nike {
  id = Date.now()
  brand = 'Nike'
  price = 0
  size = 0
  description = ''

  constructor(price?: number, size?: number, description?: string) {
    this.price = price
    this.size = size
    this.description = description
  }

  create () {
    const nike: SneakersType[] = []

    nikeData.forEach((el: SneakersType) => {
      nike.push(new Nike(el.price, el.size, el.description))
    })
    return nike
  }
}

export default Nike
