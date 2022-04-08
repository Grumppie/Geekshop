import React, { useState } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import CheckoutSteps from '../components/CheckoutSteps'
import { savePaymentMethod } from '../actions/cart.actions'

const PaymentScreen = ({ history }) => {

    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart

    if (!shippingAddress) history.push("/shipping")

    const [paymentMethod, setPaymentMethod] = useState('Paypal')

    const dispatch = useDispatch()

    const handleForm = (e) => {
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        history.push('/placeorder')
    }

    return (
        <Container>
            <Row className='justify-content-md-center'>
                <Col xs={12} md={6}>
                    <CheckoutSteps step1 step2 step3 />
                    <h1>Payment Method</h1>
                    <Form onSubmit={handleForm}>
                        <Form.Group>
                            <Form.Label as='legend'>
                                Select Method
                            </Form.Label>

                            <Col>
                                <Form.Check type='radio' label='Paypal or Credit Card' id='paypal' name='PaymentMethod' value={'paypal'} checked onChange={e => setPaymentMethod(e.target.value)} ></Form.Check>
                                {/* <Form.Check type='radio' label='stripe' id='stripe' name='PaymentMethod' value={'stripe'} onChange={e => setPaymentMethod(e.target.value)} ></Form.Check> */}
                            </Col>
                        </Form.Group>
                        <Button type='submit' variant='primary'>continue</Button>
                    </Form>

                </Col>
            </Row>
        </Container>
    )
}

export default PaymentScreen