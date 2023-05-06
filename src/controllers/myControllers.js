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
// update products
exports.updateProduct = (req, res) => {
  Product.findById(req.params.id)
    .then((product) => {
      product.name = req.body.name
      product.price = req.body.price
      product.description = req.body.description

      product
        .save()
        .then(() => res.json("Product updated!"))
        .catch((err) => res.status(400).json("Error: " + err))
    })
    .catch((err) => res.status(400).json("Error: " + err))
}
// delete products
exports.deleteProduct = (req, res) => {
  Product.findByIdAndDelete(req.params.id)
    .then(() => res.json("Product deleted."))
    .catch((err) => res.status(400).json("Error: " + err))
}
// get single product
exports.getProduct = (req, res) => {
  Product.findById(req.params.id)
    .then((product) => res.json(product))
    .catch((err) => res.status(400).json("Error: " + err))
}
// get single user
exports.getUser = (req, res) => {
  User.findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error: " + err))
}
// update users
exports.updateUser = (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      user.username = req.body.username
      user.password = req.body.password

      user
        .save()
        .then(() => res.json("User updated!"))
        .catch((err) => res.status(400).json("Error: " + err))
    })
    .catch((err) => res.status(400).json("Error: " + err))
}
// delete users
exports.deleteUser = (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json("User deleted."))
    .catch((err) => res.status(400).json("Error: " + err))
}
