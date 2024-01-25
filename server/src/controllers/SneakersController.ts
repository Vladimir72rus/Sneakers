import { SneakersFactory } from '../SneakersFactory'
import { toIntArray } from '../utils/utils'
import { ESneakers, SneakersType } from '../Types'

class SneakersController {
  async getSneakers (req: string): Promise<SneakersType[]> {
    const factory = new SneakersFactory()

    if (!req) {
      // Если ничего не передали, возвращаем все бренды кроссовок
      const sneakers: SneakersType[] = [
        ...factory.get('adidas'),
        ...factory.get('nike'),
        ...factory.get('puma')
      ]
  
      return sneakers
    }

    const argReq = toIntArray(req)
    const sneakers: SneakersType[] = []

    // Разбираем в зависимости от того, какие бренды кроссовок были выбраны,
    // имитируем фильтрацию на стороне DB
    for (let i = 0; i < argReq.length; i++) {
      const filterBrand = argReq[i]

      switch (filterBrand) {
        case ESneakers.ADIDAS:
          sneakers.push(...factory.get('adidas'))
          break
        case ESneakers.NIKE:
          sneakers.push(...factory.get('nike'))
          break
        case ESneakers.PUMA:
          sneakers.push(...factory.get('puma'));
          break
      }
    }

    return sneakers
  }
}

export default SneakersController
