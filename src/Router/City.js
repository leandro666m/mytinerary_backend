const express = require('express');
 
const router = express.Router()

const cityController = require('../Controllers/city.Controller')
const hotelController = require('../Controllers/hotel.Controller')
const itineraryController = require('../Controllers/itinerary.Controller')

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
router.put("/hotels/:id", hotelController.modifyHotel  )

/* itinerarios */
router.get("/itineraries" ,  itineraryController.getItineraries  )
router.post("/itineraries" , itineraryController.addItinerary  )
router.get("/itineraries/:id" ,  itineraryController.getOneItinerary  )
router.put("/itineraries/:id" ,   itineraryController.modifyItinerary  )


module.exports = router