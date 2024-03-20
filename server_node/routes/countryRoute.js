const express = require("express")
const router= express.Router()

const verifyJWT = require("../middleware/verifyJWT")
const countryController = require("../controllers/countryController")

//router.use(verifyJWT)

router.get("/",countryController.getAllCountry)
router.get("/:id",countryController.getCountryById)
router.post("/",countryController.createNewCountry)
router.delete("/",countryController.deleteCountry)
router.put("/",countryController.updateCountry)

module.exports = router
