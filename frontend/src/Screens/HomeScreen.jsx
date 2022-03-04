import React, { useState, useEffect } from "react"
import { Col, Row } from "react-bootstrap"
// import products from "../products"
import Product from '../components/Product'
import axios from 'axios'



const HomeScreen = () => {

	const [products, setProducts] = useState([])

	useEffect(() => {
		const fetchProdcts = async () => {
			const { data } = await axios.get(`/api/products`)
			setProducts(data)
		}
		fetchProdcts()
	}, [])

	return (<>
		<h1>Poducts</h1>
		<Row>
			{products.map((product) => {
				return (<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
					<Product product={product} />
				</Col>)
			})}
		</Row>
	</>)
}

export default HomeScreen
