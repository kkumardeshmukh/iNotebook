const mongoose = require('mongoose')

const mongoURL= "mongodb://127.0.0.1:27017"

const connectTOMongo = () =>{
    mongoose.connect(mongoURL).then(()=>{console.log('connected to mongo')}).catch((err)=>{console.log(err)})
}

module.exports = connectTOMongo