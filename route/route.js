const express = require('express');
const urlRouter = require('./api/urlApi');
const route = express.Router();

route.use('/url', urlRouter)
module.exports = route;
