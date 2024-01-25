import Adidas from './Adidas'
import Nike from './Nike'
import Puma from './Puma'
import { ISneakers, SneakersType } from './Types'

export class SneakersFactory {
  static list: ISneakers = {
    adidas: new Adidas().create(),
    nike: new Nike().create(),
    puma: new Puma().create()
  }

  get(brand: string): SneakersType[] {
    const sneakers = SneakersFactory.list[brand]
    if (!sneakers.length) {
      return []
    }
    return sneakers
  }
}
