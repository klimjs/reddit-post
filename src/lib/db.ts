import 'server-only'

import { MongoClient, ServerApiVersion } from 'mongodb'

export const dbClient = new MongoClient(process.env.MONGO_DB_URI as string, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
})
