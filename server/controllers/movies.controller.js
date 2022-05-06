const express = require("express")
const router = express.Router()
const movie = require("../models/movies")

router.post('/', async(req,res)=>{
    
    try {
        const data = await movie.create(req.body)
        return res.status(200).send(data)
    } catch (error) {
        res.json({message:error})
    }
})

router.get("/",async(req,res)=>{
    try {
        const data = await movie.find({})
        return res.status(200).send(data)
    } catch (error) {
        res.json({message:error})
    }
})

router.delete("/:id",async(req,res)=>{
    try {
        const data = await movie.deleteOne({_id : req.params.id})
        res.send(data)
    } catch (error) {
        res.json({message:error})
    }
})

module.exports = router