import { knex as knexSetup } from 'knex'
import { env } from '../env'

export const knex = knexSetup({
  client: env.DB_CLIENT,
  connection: {
    host: env.DB_HOST,
    port: env.DB_PORT,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
  },
  useNullAsDefault: true,
})
