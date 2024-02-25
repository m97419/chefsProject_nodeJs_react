const express = require("express")
const router = express.Router()
const authController = require("../controllers/authController")

router.post("/login",authController.login)
router.post("/registerChef",authController.registerChef)
router.post("/registerCustomer",authController.registerCustomer)

module.exports =router
