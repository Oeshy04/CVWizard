const mongoose = require('mongoose')

const MONGODB_URL='mongodb+srv://mahmudulhasan2:12345678_hridoy@cluster0.0vr3yn5.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(MONGODB_URL , {useUnifiedTopology:true , useNewUrlParser:true})

const connection = mongoose.connection

connection.on('connected' , ()=>{
    console.log('Mongo DB Connection Successfull')
})
connection.on('error' , (error)=>{
    console.log(error)
})