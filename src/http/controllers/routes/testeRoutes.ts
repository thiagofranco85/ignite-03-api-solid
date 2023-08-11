import { FastifyInstance } from 'fastify'
import { knex } from '../../../db/database'

export async function testeRoutes(app: FastifyInstance) {
  app.get('/estados', async (request, response) => {
    const estados = await knex('estado').select('*')

    return response.send(estados)
  })
}
