import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Product = ({ product }) => {
    return (
        <Card className='my-3 p-3 rounded'>
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} variant='top' />
            </Link>

            <Card.Body>
                <Link to={`/product/${product._id}`}>
                    <Card.Title as='div' className='px-2'>
                        <strong>{product.name}</strong>
                    </Card.Title>
                </Link>

                <Card.Text as='div'>
                    <Rating value={product.rating} text={`${product.numReviews} Reviews`} />
                </Card.Text>
                <Card.Text as='h3'>
                    ${product.price}
                </Card.Text>

            </Card.Body>
        </Card>
    )
}

export default Product