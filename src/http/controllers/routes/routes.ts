import { register } from '@/http/controllers/register'
import { prisma } from '@/lib/prisma'
import { FastifyInstance } from 'fastify'
import { z } from 'zod'

export async function appRoutes(app: FastifyInstance) {
  app.post('/users', register)
}
