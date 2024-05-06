const Product = require('../models/product.model')

const getProducts = async(req, res) => {//get all products
    try {
        const products = await Product.find({})
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
  }

  const getProduct = async(req, res) => {//get just a product
    try {
        const { id } = req.params
        
        const product = await Product.findById(id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
  }

  module.exports = {
    getProducts,
    getProduct
  }