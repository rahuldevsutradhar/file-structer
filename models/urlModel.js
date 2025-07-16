const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const urlSchema = new Schema({
    longUrl:{
        type: String,
        required: true
    },
    randomcode:{
        type: String,
        required: true
    },
})

module.exports= mongoose.model('longUrl', urlSchema)