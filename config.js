import {config} from 'dotenv'

config()


export const PORT = process.env.PORT 
export const DB = process.env.DATABASE_URL
// export const MONGO_URI = process.env.MONGO_URI