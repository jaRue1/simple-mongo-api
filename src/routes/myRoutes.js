const express = require("express")
const router = express.Router()

const myController = require("../controllers/myControllers")

router.get("/users", myController.getUsers)

router.post("/users", myController.createUser)

router.get("/products", myController.getProducts)

router.post("/products", myController.createProduct)

module.exports = router
