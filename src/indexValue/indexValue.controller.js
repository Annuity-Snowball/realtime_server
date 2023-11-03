import express from 'express'
import { Repository } from 'redis-om'
import { redisClient } from '../config/db.config.js'
import { indexValueSchema } from './indexValue.model.js'
import { getIO } from '../config/socket.config.js'

const router = express.Router()
const indexValueRepository = new Repository(indexValueSchema, redisClient)

router.get('/', async (req, res, next) => {
    let indexValue = await indexValueRepository.fetch('index_value')    
    console.log(indexValue)
    res.send(indexValue )
})

router.get('/yesterday', async (req, res, next) => {
    let indexValue = await indexValueRepository.fetch('yesterday_value')    
    console.log(indexValue)
    res.send(indexValue)
})

setTimeout(()=> {
    const io = getIO()

    io.on('connection', (socket) => {
        console.log('a user connected');
    
        async function sendIndexValue() {
            let indexValue = await indexValueRepository.fetch('index_value');
            socket.emit('indexValueUpdate', indexValue);
        }
    
        const intervalId = setInterval(sendIndexValue, 5000);
    
        socket.on('disconnect', () => {
            console.log('user disconnected');
            clearInterval(intervalId);
        });
    });
})

export default router