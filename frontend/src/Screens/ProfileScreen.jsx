import React, { useEffect, useState } from 'react'
import { Form, Button, Row, Col, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getUserDetails, updateProfile } from '../actions/user.actions'
import Message from '../components/Message'
import Loader from '../components/Loader'

const ProfileScreen = ({ location, history }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)

    const dispatch = useDispatch()

    const userDetails = useSelector(state => state.userDetails)
    const { loading, error, user } = userDetails

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const userUpdateProfile = useSelector(state => state.userUpdateProfile)
    const { success } = userUpdateProfile

    useEffect(() => {
        if (!userInfo) {
            history.push('/login')
        }
        else {
            if (!user.name) {
                dispatch(getUserDetails('profile'))
            }
            else {
                setName(user.name)
                setEmail(user.email)
            }
        }
    }, [history, userInfo, dispatch, user])

    const submitHandler = (e) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            setMessage("Password and Confirm Password don't match")
        }
        else {
            dispatch(updateProfile({ id: user._id, name, email, password }))
        }
    }

    return (
        <>
            <Row>
                <Col md={3}>
                    <h2>User Profile</h2>
                    {message && <Message variant={'danger'}>{message}</Message>}
                    {error && <Message variant={'danger'}>{error}</Message>}
                    {success && <Message variant={'success'}>{success} <h5 style={{ color: 'white', textAlign: 'center', margin: '0' }}>Profile Updated</h5> </Message>}
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
                                placeholder='New password'
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
                            Update
                        </Button>
                    </Form>
                </Col>
                <Col md={9}>
                    <h2>orders</h2>
                </Col>
            </Row>
        </>
    )
}


export default ProfileScreen