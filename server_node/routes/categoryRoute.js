const express = require("express")
const router= express.Router()

const verifyJWT = require("../middleware/verifyJWT")
const verifyCHEF= require("../middleware/verifyCHEF_CUSTOMRE")
const categoryController = require("../controllers/categoryController")

// router.use(verifyJWT)

router.get("/",categoryController.getAllCategories)
//router.get("/:id",categoryController,getCategoryById)
router.use(verifyJWT)
router.use(verifyCHEF)
router.post("/",categoryController.createNewCategory)
router.delete("/",categoryController.deleteCategory)
router.put("/",categoryController.updateCategory)

module.exports = router
