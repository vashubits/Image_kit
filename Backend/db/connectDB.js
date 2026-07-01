const mongoose = require('mongoose')


async function connectDB() {
    mongoose.connect(process.env.Mongoose_key)
    console.log('connect DB');
    
}
module.exports =connectDB