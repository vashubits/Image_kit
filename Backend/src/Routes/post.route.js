const express = require('express')
const Post = require('../Controller/post.controller')

const route = express.Router()



route.post('/create',Post.createPost)
route.get('/feed',Post.feedPost)



module.exports = route