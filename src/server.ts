import { app } from './app'
import { env } from './env'
import { testeRoutes } from './routes/testeRoutes'

app.register(testeRoutes)

app
  .listen({
    host: env.APP_HOST,
    port: env.APP_PORT,
  })
  .then(() =>
    console.log(
      `🚀 HTTP Server Running at ${env.APP_PROTOCOL}://${env.APP_HOST}:${env.APP_PORT}`,
    ),
  )
