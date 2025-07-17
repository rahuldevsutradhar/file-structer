const { emailRegex, passwordRegex } = require("../Helpers/regex")
const authModel = require("../models/authModel")
const bcrypt = require('bcrypt');


const loginController = async (req, res) => {
    const { email, password } = req.body
    const excistUser = await authModel.findOne({ email })

    if (!emailRegex.test(email)) return res.status(401).send('email invalid')
    if (!passwordRegex.test(password)) return res.status(401).send('password incorrect')
    if (!excistUser) return res.status(401).send('user not found')


    bcrypt.compare(password, excistUser.password)
        .then(function (result) {
            if (result) return res.status(200).send('login succesfull')
            res.status(401).send('wrong password')

        });
}

module.exports = loginController