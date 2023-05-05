const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Hotel = new Schema(
    {   name: String,
        country: String,
        description: String,
        imageURL: String,
        city: { type: Schema.Types.ObjectId, ref: 'City'}
    }
)

Hotel.plugin (require('mongoose-autopopulate') )
module.exports = mongoose.model("Hotel" , Hotel)

