import { Schema } from 'redis-om'

export const indexValueSchema = new Schema('iv', {
    kospi:{type: 'string'},
    kosdaq:{type: 'string'},
    dow:{type: 'string'},
    nasdaq:{type: 'string'},
    sp500:{type: 'string'},
}, {
    dataStructure: 'JSON'
})