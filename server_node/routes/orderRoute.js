const express = require("express")
const router= express.Router()

const verifyJWT = require("../middleware/verifyJWT")
const orderController = require("../controllers/orderController")

router.use(verifyJWT)

router.get("/",orderController.getAllOrders)
router.get("/:id",orderController.getOrderById)
router.post("/",orderController.createNewOrder)
router.delete("/",orderController.deleteOrder)
router.put("/",orderController.updateOrder)
router.put("/done/:id",orderController.completeOrder)

module.exports = router
