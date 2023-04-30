const User = require("../models/user")
const Product = require("../models/product")

exports.getUsers = (req, res) => {
  User.find()
    .then((users) => {
      res.json({
        message: "Users retrieved successfully",
        data: users,
      })
    })
    .catch((err) => res.status(400).json("Error: " + err))
}

exports.createUser = (req, res) => {
  const username = req.body.username
  const password = req.body.password
  const newUser = new User({ username, password })

  newUser
    .save()
    .then(() => {
      res.json("User added!")
    })
    .catch((err) => res.status(400).json("Error: " + err))
}

exports.getProducts = (req, res) => {
  Product.find()
    .then((products) => {
      res.json({
        message: "Products retrieved successfully",
        data: products,
      })
    })
    .catch((err) => res.status(400).json("Error: " + err))
}

exports.createProduct = (req, res) => {
  const name = req.body.name
  const price = req.body.price
  const description = req.body.description
  const newProduct = new Product({ name, price, description })

  newProduct
    .save()
    .then(() => {
      res.json("Product added!")
    })
    .catch((err) => res.status(400).json("Error: " + err))
}
