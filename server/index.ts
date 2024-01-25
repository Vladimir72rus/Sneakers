import fastify from 'fastify'
import cors from '@fastify/cors'
import swDoc from './apiDoc/swDoc.json'
import SneakersRouters from './src/routers/SneakersRouters'

const start = () => {
  const doc = { ...swDoc }
  const app = fastify({ logger: true })

  const init = () => {
    app.register(require('@fastify/swagger'), {
      openapi: doc,
      exposeRoute: true,
      routePrefix: '/api-docs'
    })

    app.register(SneakersRouters, { prefix: '/sneakers' })
    app.register(cors, { credentials: true, origin: 'http://localhost:8080' })
    app.listen(5050,'localhost')
  }

  init() 
}

start()
