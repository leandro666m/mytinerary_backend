const mongoose = require('mongoose')
const Schema = mongoose.Schema

const City = new Schema(
    {   name: String,
        country: String,
        description: String,
        imageURL: String  ,
        hotels: [ 
            { type: Schema.Types.ObjectId, 
                ref: 'Hotel', 
                autopopulate: true
            } 
        ]
    }
);

City.plugin (require('mongoose-autopopulate') )
module.exports = mongoose.model("City" , City)