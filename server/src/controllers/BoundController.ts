import SneakersController from './SneakersController'

class BoundController {
  public static _instance: BoundController | null = null
  public sneakersController: SneakersController


  constructor () {
    this.sneakersController = new SneakersController()
  }

  static getInstance () {
    if (BoundController._instance === null) {
      BoundController._instance = new BoundController()
    }
    return BoundController._instance
  }
}

export default BoundController
