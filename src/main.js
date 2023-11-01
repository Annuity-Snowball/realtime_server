import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import http from "http"
import { redisClient as redis, mongoClient as mongo } from './config/db.config.js'
import routerConfig from './config/router.config.js'
import { init } from './config/socket.config.js'


dotenv.config()

const app = express()
const PORT = process.env.PORT
const server = http.createServer(app)
init(server)

const redisClient = redis
const mongoClient = mongo

redisClient.on('error', err => console.log('Redis Client Error', err))
await redis.connect()
await mongoClient

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/', routerConfig)

server.listen(PORT, () => {
    console.log(`The realTimeServer server is listening at port: ${PORT}`)
})