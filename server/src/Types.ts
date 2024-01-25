import { FastifyRequest } from "fastify"

export interface ISneakers {
  [key: string]: SneakersType[]
}

export type SneakersType = {
  id: number
  brand: string,
  price: number
  size: number
  description: string
}

export interface DefReqGeneric {
  Params?: unknown,
  Query?: unknown,
  Body?: unknown
}

export interface FReqGen<DefGen extends DefReqGeneric> extends FastifyRequest {
  body: DefGen['Body']
  params: DefGen['Params']
  query: DefGen['Query']
}

export enum ESneakers {
  ADIDAS = 1,
  NIKE = 2,
  PUMA = 3
}
