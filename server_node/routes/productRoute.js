const express = require("express")
const router= express.Router()
// const multer=require('multer')

const verifyJWT = require("../middleware/verifyJWT")
const productController = require("../controllers/productController")

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, './public')
//     },
//     filename: function (req, file, cb) {
//       const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//       cb(null, file.fieldname + '-' + uniqueSuffix)
//     }
//   })
  
//   const upload = multer({ storage: storage }) 
// router.use(verifyJWT)

router.get("/",productController.getAllProducts)
router.get("/:id",productController.getProductById)
router.get("/country/:countryId",productController.getByCountry)
router.post("/",productController.createNewProduct)
router.delete("/",productController.deleteProduct)
router.put("/",productController.updateProduct)

module.exports = router