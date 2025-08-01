const mongoose = require('mongoose')
const Schema = mongoose.Schema
const authSchema= new Schema({
    userName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
},{timestamps:true}) 

module.exports= mongoose.model('auth', authSchema)