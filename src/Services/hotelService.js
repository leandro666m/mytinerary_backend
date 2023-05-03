const City = require('../Models/City');
const Hotel = require('../Models/Hotel')

/* Servicio Create Read Update Delete para hoteles */
let  hotelService = {
    getHotels: async function(){
        let hotels = await Hotel.find()
         return hotels
    },
    getOneHotel: async function(id){
        let hotel = await Hotel.findOne({_id: id})
         return hotel
    },
    addHotel: async function(name , country, description,imageURL, cityid){
        let city= await City.findOne({_id: cityid })
        let hotel = await Hotel.create( 
            {
                name: name,
                country: country,
                description: description,
                imageURL: imageURL,
                city: city._id
            }   );
            // Agregar el ID del hotel al array "hotels" de la ciudad correspondiente
        city.hotels.push(hotel._id);
        await city.save();
         return hotel
    }
}
module.exports = hotelService