const express = require("express")
const router = express.Router()
const authController = require("../controllers/authController")
const errorHandler = require("../middleware/errorHandler")
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
  // app.use(errorHandler)
router.post("/login",errorHandler,authController.login)
router.post("/registerChef",errorHandler,upload.single("picture"),authController.registerChef)
router.post("/registerCustomer",authController.registerCustomer)
// app.use(errorHandler)
module.exports =router
