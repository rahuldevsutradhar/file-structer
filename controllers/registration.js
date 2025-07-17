const { emailRegex, passwordRegex } = require("../Helpers/regex")
const authModel = require('../models/authModel')
const bcrypt = require('bcrypt');


const registrationControlar =async (req, res) => {
    const { userName, email, password } = req.body
    const excistUser = await authModel.findOne({email})

    if (!userName) return res.status(401).send('please enter your name')
    if (!emailRegex.test(email)) return res.status(401).send('your email is invalid')
    if (!passwordRegex.test(password)) return res.status(401).send('your password is not strong')
    if (excistUser) return res.status(401).send('user already exist')

    




    bcrypt.hash(password, 10)
    .then(function (hash) {      
        const saveAuth = new authModel({
        userName,
        email,
        password: hash,
    })

     saveAuth.save()
    res.status(200).send(saveAuth)

    });

   
}




module.exports = registrationControlar