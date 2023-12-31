const connectTOMongo= require('./db')
const express = require ('express')
var cors = require ('cors')

connectTOMongo()
const app= express()
const PORT = 5000;


app.use(cors())
app.use(express.json())

//available routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

app.listen(PORT, ()=>{
    console.log(`Listening at http://localhost:${PORT}`)
})

