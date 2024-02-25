const express = require("express")
const router= express.Router()

const verifyJWT = require("../middleware/verifyJWT")
const customerController = require("../controllers/customerController")

router.use(verifyJWT)

router.get("/",customerController.getAllCustomers)
router.get("/:id",customerController.getCustomerById)
router.delete("/",customerController.deleteCustomer)
router.put("/",customerController.updateCustomer)

module.exports = router
