import { SneakersType } from './Types'
import { adidasData } from './mockData/mock'

export class Adidas {
  id = Date.now()
  brand = 'Adidas'
  price = 0
  size = 0
  description = ''

  constructor(price?: number, size?: number, description?: string) {
    this.price = price
    this.size = size
    this.description = description
  }

  create () {
    const adidas: SneakersType[] = []

    adidasData.forEach((el: SneakersType) => {
      adidas.push(new Adidas(el.price, el.size, el.description))
    })
    return adidas
  }
}

export default Adidas
