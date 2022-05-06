const express = require("express")
const app = express()
const mongoose = require("mongoose")
const router = require("./controllers/movies.controller")
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json())

app.use("/",router)

mongoose.connect("mongodb+srv://riteshRanjan:1vG7perWlwzhzdxQ@cluster0.fk5dj.mongodb.net/moviesStore_backend?retryWrites=true&w=majority",{useNewUrlParser:true},()=>{
    console.log("connected to db")
})

const port = process.env.PORT || 3001

app.listen(port,()=>{
    console.log("running on 3001")
})