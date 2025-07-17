const express = require('express')
const registrationControlar = require('../../controllers/registration')
const authRouter= express.Router()

authRouter.post('/registration',  registrationControlar)


module.exports = authRouter