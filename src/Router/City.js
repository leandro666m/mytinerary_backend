const express = require('express');
 
const router = express.Router()

const cityController = require('../Controllers/city.Controller')
const hotelController = require('../Controllers/hotel.Controller')

/* CRUD */
        /* servlet */
router.get("/cities" ,  cityController.getCities  )
router.post("/cities" , cityController.addCity  )

router.delete("/cities/:id" , cityController.removeCity  )
router.put("/cities/:id", cityController.modifyCity  )
router.get("/cities/:id" ,  cityController.getOneCity  )

router.patch("/")

/* hoteles */
router.get("/hotels" ,  hotelController.getHotels  )
router.post("/hotels" , hotelController.addHotel  )
router.get("/hotels/:id" ,  hotelController.getOneHotel  )


module.exports = router

/* /cities
get: getCities
post: addCity

/cities/:id
delete: removeCity
put: modifyCity
get: getOneCity
 */