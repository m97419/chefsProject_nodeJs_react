const express = require("express")
const router= express.Router()

const verifyJWT = require("../middleware/verifyJWT")
const verifyCHEF= require("../middleware/verifyCHEF_CUSTOMRE")
const countryController = require("../controllers/countryController")

const multer=require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix+file.originalname)
    }
  })
  
const upload = multer({ storage: storage })

router.get("/",countryController.getAllCountry)
router.get("/:id",countryController.getCountryById)
router.use(verifyJWT)
router.use(verifyCHEF)
router.post("/",upload.single("picture"),countryController.createNewCountry)
router.delete("/",countryController.deleteCountry)
router.put("/",countryController.updateCountry)

module.exports = router
