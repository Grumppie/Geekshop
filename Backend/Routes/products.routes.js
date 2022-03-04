import express from "express"
import Product from '../Models/product.model.js'
import expressAsyncHandler from "express-async-handler"

const router = express.Router()

// @desc    Fetch all products
// @route   /api/products
// @access  Public
router.get('/', expressAsyncHandler(
    async (req, res) => {
        const products = await Product.find()
        res.status(200).json(products)
    }
))


// @desc    Fetch single product
// @route   /api/products/id
// @access  Public
router.get('/:id', expressAsyncHandler(
    async (req, res) => {
        const id = req.params.id

        const product = await Product.findById(id)
        if (product) {
            res.status(200).json(product)
        } else {
            res.status(404).json({ msg: 'product not found' })
        }

    }
))

export default router