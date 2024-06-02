const express = require("express")
const router= express.Router()
// const multer=require('multer')
const verifyCHEF= require("../middleware/verifyCHEF")
const verifyJWT = require("../middleware/verifyJWT")
const productController = require("../controllers/productController")
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


router.get("/",productController.getAllProducts)
router.get("/:id",productController.getProductById)
router.get("/country/:countryId",productController.getByCountry)
router.get("/chef/:chefId",productController.getByChef)
router.use(verifyJWT)
router.use(verifyCHEF)
router.post("/",upload.single("picture"),productController.createNewProduct)
router.delete("/",productController.deleteProduct)
router.put("/",upload.single("picture"),productController.updateProduct)
// 

module.exports = router