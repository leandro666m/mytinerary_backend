const mongoose = require('mongoose')

const Schema = mongoose.Schema

const City = new Schema(
    {   name: String,
        country: String,
        description: String,
        imageURL: String  }
)
module.exports = mongoose.model("City" , City)