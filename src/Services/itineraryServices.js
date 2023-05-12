const City = require('../Models/City');
const Itinerary = require('../Models/Itinerary')

/* Servicio Create Read Update Delete para itinerary */
let  itineraryService = {
    getItineraries: async function(){
        let itinerary = await Itinerary.find()
         return itinerary
    },
    getOneItinerary: async function(id){
        let itinerary = await Itinerary.findOne({_id: id})
         return itinerary
    },    
    getItineariesByCity: async function(id){
        let city = await City.findOne( {_id: id} )
         return city.itineraries
    },
    addItinerary: async function(nameItinerary , nameAutor, photoAutor,precio, duracion,hashtags, likes, description, cityid){
        let city= await City.findOne( {_id: cityid } )
        let itinerary = await Itinerary.create( 
            {
                nameItinerary: nameItinerary,
                nameAutor: nameAutor,
                photoAutor: photoAutor,
                precio: precio,
                duracion: duracion,
                hashtags: hashtags,
                likes: likes,
                description: description,
                city: city._id
            }   );

        city.itineraries.push(itinerary._id);
        await city.save();
         return itinerary
    },
    modifyItinerary: async function( id, nameItinerary , nameAutor, photoAutor,precio, duracion,hashtags, likes, description ){
        let itinerary = await Itinerary.findOneAndUpdate( 
                { _id: id },
                {
                    nameItinerary: nameItinerary,
                    nameAutor: nameAutor,
                    photoAutor: photoAutor,
                    precio: precio,
                    duracion: duracion,
                    hashtags: hashtags,
                    likes: likes,
                    description: description
                } ,
                { new: true}
            )
         return itinerary
    },
    removeItinerary: async function(id){
        let itinerary = await Itinerary.findOneAndDelete({_id: id}) 
         return itinerary
    }
}
module.exports = itineraryService