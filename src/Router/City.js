const express = require('express');
 
const router = express.Router()

const cityController = require('../Controllers/city.Controller')

/* CRUD */
        /* servlet */
router.get("/cities" ,  cityController.getCities  )
router.post("/cities" , cityController.addCity  )

router.delete("/cities/:id" , cityController.removeCity  )
router.put("/cities/:id", cityController.modifyCity  )
router.get("/cities/:id" ,  cityController.getOneCity  )

router.patch("/")

module.exports = router

/* /cities
get: getCities
post: addCity

/cities/:id
delete: removeCity
put: modifyCity
get: getOneCity
 */