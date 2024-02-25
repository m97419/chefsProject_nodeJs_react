const express = require("express")
const router= express.Router()

const verifyJWT = require("../middleware/verifyJWT")
const chefController = require("../controllers/chefController")

router.use(verifyJWT)

router.get("/",chefController.getAllChefs)
router.get("/:id",chefController.getChefById)
router.delete("/",chefController.deleteChef)
router.put("/",chefController.updateChef)

module.exports = router
