import express from 'express'
import indexValueRouter from '../indexValue/indexValue.controller.js'
import fearGreedRouter from '../fearGreed/fearGreed.controller.js'

const routerConfig = express.Router()

routerConfig.use('/indexValue', indexValueRouter)
routerConfig.use('/fearGreed', fearGreedRouter)

export default routerConfig