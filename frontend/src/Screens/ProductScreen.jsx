import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Row, Image, ListGroup, Card, Button, Col } from 'react-bootstrap'
import Rating from '../components/Rating'
import axios from 'axios'
// import Products from '../products'




const ProductScreen = ({ match }) => {
    // const product = Products.find(p => p._id === match.params.id)

    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fectProduct()
    }, [])

    const fectProduct = async () => {

        try {
            const { data } = await axios.get(`/api/products/${match.params.id}`)
            setProduct(data)
            setLoading(true)
        } catch (error) {
            console.log(error)
        }
        // when you log data you can see that the data that we need is at 0th index of the data object
    }


    return (
        <>
            {loading ? (<><Link to='/' className='btn btn-light my-3'>Go Back</Link><Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h4 className='my-0'>Price: ${product.price}</h4>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description:{product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Price:
                                    </Col>
                                    <Col>
                                        ${product.price}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Status:
                                    </Col>
                                    <Col>
                                        {(product.countInStock > 0 ? 'In Stock' : 'Out of Stock')}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button className='btn-block py-2' type='button' style={{ width: '100%', borderRadius: '0', backgroundColor: 'black', border: 'none', }} disabled={product.countInStock === 0}>
                                    Add To cart
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row></>) : ''}
        </>)

}

export default ProductScreen