import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectBD from './config/db.js'
import productRoutes from './Routes/products.routes.js'
import userRoutes from './Routes/user.routes.js'
import { errorHandler, notFound } from './middleware/error.middleware.js'

dotenv.config()

connectBD()

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('API is running')
})

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)

app.use(notFound)

app.use(errorHandler)


const port = process.env.PORT || 5000

app.listen(port, () => console.log('Server running in', process.env.NODE_ENV, 'mode on port', port))