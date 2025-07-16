const urlModel = require('../models/urlModel')
const runUrl =async (req, res)=>{
    const randomcode= req.params.urlId
    const existUrl = await urlModel.findOne({randomcode})
    
    if(!existUrl)
        return res.status(400).send('Please enter right url')
        
              res.status(200).redirect(existUrl.longUrl)
}

module.exports= runUrl