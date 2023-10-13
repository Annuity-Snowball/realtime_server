// import { MongoClient } from "mongodb";
import mongoose from 'mongoose';
import { createClient } from "redis"
import dotenv from 'dotenv'

dotenv.config()

const mongo_url = process.env.MONGODB_URL
const redis_url = process.env.REDIS_URL

// export const mongoClient = new MongoClient(mongo_url)
export const mongoClient = mongoose.connect(mongo_url).then(
    console.log("mongodb initialized")
)
export const redisClient = createClient({url: `${redis_url}`})
