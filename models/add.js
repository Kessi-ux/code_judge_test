const mongoose = require ('mongoose')
const addSchema = new mongoose.Schema({
    num1:{
        type:Number,
        required: true
    },

    num2:{
        type:Number,
        required: true
    }
})

module.exports = mongoose.model('add', addSchema)