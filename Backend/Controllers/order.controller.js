import expressAsyncHandler from "express-async-handler"
import Order from '../Models/order.model.js'


// @desc    Create New Order
// @route   POST /api/orders
// @access  Private
const getProducts = expressAsyncHandler(
    async (req, res) => {
        const {
            orderItems, shippingAddress, paymentMethod, itemsPrice, taxPrice, shippingPrice, totalPrice
        } = req.body

        if (orderItems && orderItems.length === 0) {
            res.status(400)
            throw new Error('No Order Items')
            return
        }
        else {
            const newOrder = new Order({
                orderItems, user: req.user._id, shippingAddress, paymentMethod, itemsPrice, taxPrice, shippingPrice, totalPrice
            })

            const createdOrder = await Order.save()
            res.status(201).json(createdOrder)
        }

    }
)