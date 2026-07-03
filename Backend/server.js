require('dotenv').config()
const app = require('./src/app')
const connectDB = require('./src/db/connectDB')


connectDB()

app.listen(3000,()=>{
    console.log('start');
    
})