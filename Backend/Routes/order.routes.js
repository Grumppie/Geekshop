import express from "express"
import { addOrderItems } from "../Controllers/order.controller.js"
import { protect } from "../middleware/auth.middleware.js"

const router = express.Router()

router.route('/').post(protect, addOrderItems)

export default router