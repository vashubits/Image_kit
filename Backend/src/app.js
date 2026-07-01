const express = require('express')
const app = express()
const uploadFile = require('../service/postService')
const multer = require('multer')
const cors = require('cors');
const postModel = require('../models/post.model')

app.use(express.json())
app.use(cors())
const file = multer({storage:multer.memoryStorage()})
app.post('/create-post',file.single('image'),async(req,res)=>{
    const url = await uploadFile(req.file.buffer,req.file.originalname)
    await postModel.create({
          url: url.url,
          caption:req.body.caption
    })
    res.json({message:'created'})
    
})
app.get('/feed',async(req,res)=>{
    const data = await postModel.find()
    res.json(data)
})



module.exports = app