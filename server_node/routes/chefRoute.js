const express = require("express")
const router= express.Router()

const verifyJWT = require("../middleware/verifyJWT")
const verifyCHEF= require("../middleware/verifyCHEF_CUSTOMRE")
const chefController = require("../controllers/chefController")

// router.use(verifyJWT)


router.get("/",chefController.getAllChefs)
router.get("/:id",chefController.getChefById)
router.use(verifyCHEF)
router.delete("/",chefController.deleteChef)
router.put("/",chefController.updateChef)

module.exports = router
