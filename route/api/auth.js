const express = require('express')
const registrationControlar = require('../../controllers/registration')
const loginController = require('../../controllers/login')
const authRouter= express.Router()

authRouter.post('/registration',  registrationControlar)
authRouter.post('/login', loginController)

module.exports = authRouter