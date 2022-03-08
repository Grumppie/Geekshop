import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { Container } from 'react-bootstrap'
import HomeScreen from './Screens/HomeScreen'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ProductScreen from './Screens/ProductScreen'
import Cart from './Screens/CartScreen'
import LoginScreen from './Screens/LoginScreen'

function App() {
    return (
        <Router>
            <Header />
            <main>
                <Container>
                    <Route path='/login' component={LoginScreen} />
                    <Route path='/product/:id' component={ProductScreen} />
                    <Route path='/cart/:id?' component={Cart} />
                    <Route path='/' component={HomeScreen} exact />
                </Container>
            </main>
            <Footer />
        </Router>
    )
}

export default App
