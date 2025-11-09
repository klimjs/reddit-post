import { betterAuth } from 'better-auth'
import { mongodbAdapter } from 'better-auth/adapters/mongodb'
import { dbClient } from '@/lib/db'

export const auth = betterAuth({
  database: mongodbAdapter(dbClient.db()),
})
