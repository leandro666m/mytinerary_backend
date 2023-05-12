const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Itinerary = new Schema(
    {   nameItinerary: String,
        nameAutor: String,
        photoAutor: String,
        precio: Number,
        duracion: Number,
        hashtags: Array,
        likes: Number,
        description: String,
        city: { type: Schema.Types.ObjectId, ref: 'City'}
    }
)

Itinerary.plugin (require('mongoose-autopopulate') )
module.exports = mongoose.model("Itinerary" , Itinerary)
