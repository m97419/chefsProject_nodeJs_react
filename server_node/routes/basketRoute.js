const express = require("express")
const router= express.Router()

const verifyJWT = require("../middleware/verifyJWT")
const verifyCHEF= require("../middleware/verifyCHEF")
const basketController = require("../controllers/basketController")

// router.use(verifyJWT)

// router.get("/",basket.getAllBasketItems)
// router.get("/:id",basketController.getBasketItemById)
router.get("/chef/:chefId",basketController.getBasketsForChef)
router.post("/",basketController.createNewBasket)
// router.delete("/",orderController.deleteOrder)
// router.put("/",orderController.updateOrder)
// router.put("/done/:id",orderController.completeOrder)

module.exports = router