const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema({
  gameName:{
      type:String,
      required:true
  },
  gameUrl:{
      type:String,
      required:true
  },
  rating:{
      type:Number,
      required:true
  },
  type:{
      type:String,
      required:true
  },
  developer:{
      type:String,
      required:false
  },
  completion:{
      type:String,
      required:false
  }
})

const MovieModel = mongoose.model("movies",movieSchema)

module.exports = MovieModel