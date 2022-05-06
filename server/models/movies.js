const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema({
  movieName:{
      type:String,
      required:true
  },
  movieUrl:{
      type:String,
      required:true
  },
  rating:{
      type:Number,
      required:true
  },
  director:{
      type:String,
      required:true
  }
})

const MovieModel = mongoose.model("movies",movieSchema)

module.exports = MovieModel