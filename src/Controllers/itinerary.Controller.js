const itineraryService = require('../Services/itineraryServices')

/* Controlador Create Read Update Delete para itinerary */
const itineraryController = {
    getItineraries: async function (req, res) {
        try {
            res.json(await itineraryService.getItineraries())
        } catch (error) {
            res.json(`Se produjo un error al buscar todos los itinerarios: ${error}`)
        }
    },
    getOneItinerary: async function (req, res) {
        try {
            res.json(await itineraryService.getOneItinerary(req.params.id))
        } catch (error) {
            res.json(`Se produjo un error al buscar el itinerary: ${error}`)
        }
    },
    addItinerary: async function (req, res) {
        try {
            res.json(await itineraryService.addItinerary( req.body.nameItinerary , req.body.nameAutor, req.body.photoAutor, req.body.precio, req.body.duracion, req.body.hashtags, req.body.likes, req.body.cityid) )
        } catch (error) {
            res.json(`Se produjo un error al guardar addItinerary (controller): ${error}`)
        }
    },
    modifyItinerary: async function(req, res){
        try {
            res.json( await itineraryService.modifyItinerary(req.params.id, req.body.nameItinerary , req.body.nameAutor, req.body.photoAutor, req.body.precio, req.body.duracion, req.body.hashtags, req.body.likes, req.body.cityid) )
        } catch (error) {
            res.json( `Se produjo un error al modificar los datos del itinerario (controller): ${error}` )
        }
    },
    removeItinerary: async function(req, res){
        try {
            res.json( await  itineraryService.removeItinerary(req.params.id) )
        } catch (error) {
            res.json( `Se produjo un error al eliminar el itinerario: ${error}` )
        }
    }
}
module.exports = itineraryController