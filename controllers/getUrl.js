const generateRandomCode = require('../Helpers/randomCode')
const urlModel = require('../models/urlModel')
const getUrl =async (req,res)=>{
    const {longUrl} = req.body
    let randomcode= generateRandomCode()
   

    const existUrl = await urlModel.findOneAndUpdate(
        {longUrl},
        {$set:{randomcode}}
    )
    if(existUrl) return res.send({LognUrl: longUrl, SortUrl:`http://localhost:8000/${randomcode}`})
      
    const saveUrl = new urlModel({
      longUrl, randomcode
    })

    saveUrl.save()
    res.send({LognUrl: longUrl, SortUrl:`http://localhost:8000/${randomcode}`})
}
    

module.exports=getUrl