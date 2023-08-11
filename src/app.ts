import fastify from 'fastify'
import { appRoutes } from './http/controllers/routes/routes'
import { ZodError } from 'zod'
import { env } from './env'

export const app = fastify()

app.register(appRoutes)
app.setErrorHandler((error, request, response) => {
  if (error instanceof ZodError) {
    return response
      .status(400)
      .send({ message: 'Validation error.', issues: error.format() })
  }

  if (env.NODE_ENV !== 'production') {
    console.error(error)
  } else {
    // TODO: Enviar erro pra uma ferramenta externa de log
  }

  return response.status(500).send({ message: 'Internal Server Error' })
})
