const express = require('express');
const getUrl = require('../../controllers/getUrl');
const runUrl = require('../../controllers/runUrl');
const urlRouter = express.Router();

urlRouter.post('/getLongUrl', getUrl)
urlRouter.get('/:urlId', runUrl)


module.exports= urlRouter