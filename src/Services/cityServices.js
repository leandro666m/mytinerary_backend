const City = require('../Models/City')

/* Servicio Create Read Update Delete para Ciudades */
let  cityService = {
    getCities: async function(){
        let cities = await City.find().populate('hotels')
        return cities
    },
    getOneCity: async function(id){
        let city = await City.findOne({_id: id})
         return city
    },
    addCity: async function(name , country, description,imageURL){
            let city = await new City( 
                {
                    name: name,
                    country: country,
                    description: description,
                    imageURL: imageURL,
                }   ).save()
             return city
    },
    modifyCity: async function( id, name , country, description,imageURL ){
        
        let city = await City.findOneAndUpdate( 
                { _id: id },
                {
                    name: name,
                    country: country,
                    description: description,
                    imageURL: imageURL
                } ,
                { new: true}
            )
         return city
    },
    removeCity: async function(id){
        let city = await City.findOneAndDelete({_id: id}) 
         return city
    }
}
module.exports = cityService