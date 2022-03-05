import React, { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { Col, Row } from "react-bootstrap"
// import products from "../products"
import Product from '../components/Product'
// import axios from 'axios'
import { listProducts } from "../actions/product.actions"
import Message from "../components/Message"
import Loader from "../components/Loader"


const HomeScreen = () => {

	const dispatch = useDispatch()

	const productList = useSelector(state => state.productList)
	const { loading, error, products } = productList

	useEffect(() => {
		dispatch(listProducts())
	}, [dispatch])

	const handlerror = () => {
		return error
			? <Message variant='danger'>{error}</Message>
			: <Row>
				{products.map((product) => {
					return (<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
						<Product product={product} />
					</Col>)
				})}
			</Row>
	}

	return (<>
		<h1>Poducts</h1>
		{
			loading
				? <Loader>loding....:P</Loader>
				: handlerror()
		}
	</>)
}

export default HomeScreen
