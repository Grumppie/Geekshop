import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../actions/user.actions'
import Message from '../components/Message'
import Loader from '../components/Loader'

const RegisterScreen = ({ location, history }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)

    const dispatch = useDispatch()

    const userRegister = useSelector(state => state.userRegister)
    const { loading, userInfo, error } = userRegister


    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            setMessage("Password and Confirm Password don't match")
        }
        else{
            dispatch(register(name, email, password))
        }

    }

    return (
        <>
            <Container>
                <Row className='justify-content-md-center'>
                    <Col xs={12} md={6}>
                        <h1>Sign Up</h1>
                        {message && <Message variant={'danger'}>{message}</Message>}
                        {error && <Message variant={'danger'}>{error}</Message>}
                        {loading && <Loader></Loader>}
                        <Form onSubmit={submitHandler}>
                            <Form.Group controlId='name' className='my-2'>
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type='name'
                                    placeholder='Saitama'
                                    value={name}
                                    onChange={e => setName(e.target.value)}>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId='email' className='my-2'>
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type='email'
                                    placeholder='1punch@gmail.com'
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId='password' className='my-2'>
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type='password'
                                    placeholder='password'
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId='confirmPassword' className='my-2'>
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control
                                    type='password'
                                    placeholder='Confirm Password'
                                    value={confirmPassword}
                                    onChange={e => setConfirmPassword(e.target.value)}>
                                </Form.Control>
                            </Form.Group>
                            <Button type='submit' variant='primary' className='my-2' >
                                Register
                            </Button>
                        </Form>
                        <Row className='my-1'>
                            <Col>
                                Have an account?{' '}
                                <Link to={redirect ? `/signin?redirect=${redirect}` : '/signin'}>
                                    Register
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}


export default RegisterScreen