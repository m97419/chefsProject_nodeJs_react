const express = require("express")
const router = express.Router()
const authController = require("../controllers/authController")

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

router.post("/login",authController.login)
router.post("/registerChef",upload.single("picture"),authController.registerChef)
router.post("/registerCustomer",authController.registerCustomer)

module.exports =router
