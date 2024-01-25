import { 
  FastifyInstance,
  FastifyPluginOptions,
  FastifyReply,
} from "fastify"
import swdocGetSneakers from '../../apiDoc/getSneakers.json'
import BoundController from '../controllers/BoundController'
import { FReqGen } from '../Types'


const SneakersRouters = (fIst: FastifyInstance, _opts: FastifyPluginOptions, next: Function) => {
  const sneakersController = BoundController.getInstance().sneakersController

  fIst.get('/', { schema: swdocGetSneakers },
  async (req: FReqGen<{Query: { brands: string }}>, res: FastifyReply) => {
      try {
        const result = await sneakersController.getSneakers(req.query.brands)
        res.code(200).send(result)
      } catch (err) {
        res.code(err.code).send(err)
      }
    }
  )

  next()
}

export default SneakersRouters
