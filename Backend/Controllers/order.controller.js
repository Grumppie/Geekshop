import expressAsyncHandler from "express-async-handler"
import Order from '../Models/order.model.js'


// @desc    Create New Order
// @route   POST /api/orders
// @access  Private
export const addOrderItems = expressAsyncHandler(
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

            const createdOrder = await newOrder.save()
            res.status(201).json(createdOrder)
        }

    }
)

// @desc    Fetch single order
// @route   GET /api/orders/id
// @access  Private
export const getOrderById = expressAsyncHandler(
    async (req, res) => {
        const id = req.params.id

        const order = await Order.findById(id).populate("user", "name email")
        if (order) {
            res.status(200).json(order)
        } else {
            res.status(404)
            throw new Error('order not found')
        }

    }
)


