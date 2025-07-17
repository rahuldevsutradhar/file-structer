const express = require('express');
const urlRouter = require('./api/urlApi');
const auth = require('./api/auth');
const route = express.Router();

route.use('/url', urlRouter)
route.use('/auth', auth)
module.exports = route;
