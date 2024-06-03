const express = require("express")
const router= express.Router()

const verifyJWT = require("../middleware/verifyJWT")
const verifyCHEF= require("../middleware/verifyCHEF_CUSTOMRE")
const verifyCUSTOMER = require("../middleware/verifyCHEF_CUSTOMRE")
const basketController = require("../controllers/basketController")

router.use(verifyJWT)

// router.get("/",basket.getAllBasketItems)
// router.get("/:id",basketController.getBasketItemById)
router.get("/chef/:chefId",verifyCHEF,basketController.getBasketsForChef)
router.get("/customer/:customerId",basketController.getBasketsForCustomer)
router.post("/",basketController.createNewBasket)
router.put("/:id",verifyCHEF,basketController.completeBasket)
// router.delete("/",orderController.deleteOrder)
// router.put("/",orderController.updateOrder)
// router.put("/done/:id",orderController.completeOrder)

module.exports = router