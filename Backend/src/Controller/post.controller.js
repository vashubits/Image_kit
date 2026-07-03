
const uploadFile = require('../service/postService')
const postModel = require('../models/post.model')



const createPost =async (req,res)=>{
  const url = await uploadFile(req.file.buffer,req.file.originalname)
    await postModel.create({
          url: url.url,
          caption:req.body.caption
    })
    res.json({message:'created'})
}

const feedPost = async(req,res)=>{
    
    const data = await postModel.find()
    res.json(data)

}


module.exports = { createPost ,feedPost}