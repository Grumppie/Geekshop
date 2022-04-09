import React, { useState } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { saveShippingAddress } from '../actions/cart.actions'
import CheckoutSteps from '../components/CheckoutSteps'

const ShippingScreen = ({ history }) => {

    const cart = useSelector(state => state.userLogin)
    const { shippingAddress } = cart

    const [address, setAddress] = useState(shippingAddress ? shippingAddress.address : "")
    const [city, setCity] = useState(shippingAddress ? shippingAddress.city : "")
    const [postalCode, setPostalCode] = useState(shippingAddress ? shippingAddress.postalCode : "")
    const [country, setCountry] = useState(shippingAddress ? shippingAddress.country : "")

    const dispatch = useDispatch()

    const handleForm = (e) => {
        e.preventDefault()
        dispatch(saveShippingAddress({
            address,
            city,
            postalCode,
            country
        }))
        history.push('/payment')
    }

    return (
        <Container>
            <Row className='justify-content-md-center'>
                <Col xs={12} md={6}>
                    <CheckoutSteps step1 step2 />
                    <h1>shipping</h1>
                    <Form onSubmit={handleForm}>
                        <Form.Group controlId='address' className='my-2'>
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Address'
                                value={address}
                                onChange={e => setAddress(e.target.value)}>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId='city' className='my-2'>
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='City'
                                value={city}
                                onChange={e => setCity(e.target.value)}>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId='postalCode' className='my-2'>
                            <Form.Label>Postal Code</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Postal Code'
                                value={postalCode}
                                onChange={e => setPostalCode(e.target.value)}>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId='country' className='my-2'>
                            <Form.Label>Country</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Country'
                                value={country}
                                onChange={e => setCountry(e.target.value)}>
                            </Form.Control>
                        </Form.Group>

                        <Button type='submit' variant='primary'>continue</Button>
                    </Form>

                </Col>
            </Row>
        </Container>
    )
}

export default ShippingScreen