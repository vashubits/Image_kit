const express = require('express')
const app = express()
const postRoute = require('./Routes/post.route')
const cors = require('cors')
const multer = require('multer')
app.use(express.json())
app.use(cors())
const file = multer({storage:multer.memoryStorage()})

app.use('/api/post',file.single('image'),postRoute)







module.exports = app