const express = require("express")
const router = express.Router()

const myController = require("../controllers/myControllers")

router.get("/users", myController.getUsers)

router.get("/users/:id", myController.getUserById)

router.post("/users", myController.createUser)

router.get("/products", myController.getProducts)

router.get("/products/:id", myController.getProductById)

router.post("/products", myController.createProduct)

router.put("/products/:id", myController.updateProduct)

router.put("/users/:id", myController.updateUser)

router.delete("/products/:id", myController.deleteProduct)

router.delete("/users/:id", myController.deleteUser)

module.exports = router
