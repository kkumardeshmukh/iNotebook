const connectTOMongo= require('./db')
const express = require ('express')

connectTOMongo()
const app= express()
const PORT = 5000;

app.get('/',(req, res)=>{
    res.send("hello harry")

})

app.listen(PORT, ()=>{
    console.log(`Listening at http://localhost:${PORT}`)
})