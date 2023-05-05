const hotelService = require('../Services/hotelService')

/* Controlador Create Read Update Delete para Ciudades */
const hotelController = {
    getHotels: async function (req, res) {
        try {
            res.json(await hotelService.getHotels())
        } catch (error) {
            res.json(`Se produjo un error al buscar todos los hoteles: ${error}`)
        }
    },
    getOneHotel: async function (req, res) {
        try {
            res.json(await hotelService.getOneHotel(req.params.id))
        } catch (error) {
            res.json(`Se produjo un error al buscar el hotel: ${error}`)
        }
    },
    addHotel: async function (req, res) {
        try {
            res.json(await hotelService.addHotel(req.body.name, req.body.country, req.body.description, req.body.imageURL, req.body.cityid))
        } catch (error) {
            res.json(`Se produjo un error al guardar addHotel: ${error}`)
        }
    },
    modifyHotel: async function(req, res){
        try {
            res.json( await  hotelService.modifyHotel(req.params.id, req.body.name, req.body.country, req.body.description, req.body.imageURL ) )
        
        } catch (error) {
            res.json( `Se produjo un error al modificar los datos del hotel: ${error}` )
        }
    },
    removeHotel: async function(req, res){
        try {
            res.json( await  hotelService.removeHotel(req.params.id) )
        } catch (error) {
            res.json( `Se produjo un error al eliminar el hotel: ${error}` )
        }
    }
}
module.exports = hotelController