const City = require('../Models/City')
const cityService = require('../Services/cityServices')

/* Controlador Create Read Update Delete para Ciudades */
const cityController = {

    getCities : async function ( req, res){
        try {
            res.json( await cityService.getCities() )
        } catch (error) {
            res.json( `Se produjo un error al buscar todas las ciudades: ${error}` )
        }
    },

    getOneCity : async function ( req, res){
        try {
            res.json( await cityService.getOneCity(req.params.id) )
        } catch (error) {
            res.json( `Se produjo un error al buscar la ciudad: ${error}` )
        }
    },

    addCity: async function(req, res){
        try {
            res.json( await cityService.addCity(req.body.name, req.body.country, req.body.description, req.body.imageURL ) )
        } catch (error) {
            res.json( `Se produjo un error al guardar: ${error}` )
        }
    },

    modifyCity: async function(req, res){
        try {

            res.json( await  cityService.modifyCity(req.params.id, req.body.name, req.body.country, req.body.description, req.body.imageURL ) )
        
        } catch (error) {
            res.json( `Se produjo un error al modificar los datos de la ciudad: ${error}` )
        }
    },

    removeCity: async function(req, res){
        try {
            res.json( await  cityService.removeCity(req.params.id) )
        } catch (error) {
            res.json( `Se produjo un error al eliminar la ciudad: ${error}` )
        }
    }
}
module.exports = cityController