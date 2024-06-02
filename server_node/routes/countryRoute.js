const express = require("express")
const router= express.Router()

const verifyJWT = require("../middleware/verifyJWT")
const verifyCHEF= require("../middleware/verifyCHEF")
const countryController = require("../controllers/countryController")



router.get("/",countryController.getAllCountry)
router.get("/:id",countryController.getCountryById)
router.use(verifyJWT)
router.use(verifyCHEF)
router.post("/",countryController.createNewCountry)
router.delete("/",countryController.deleteCountry)
router.put("/",countryController.updateCountry)

module.exports = router
