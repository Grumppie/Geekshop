import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { Container } from 'react-bootstrap'
import HomeScreen from './Screens/HomeScreen'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ProductScreen from './Screens/ProductScreen'

function App() {
    return (
        <Router>
            <Header />
            <main>
                <Container>
                    <Route path='/' component={HomeScreen} exact />
                    <Route path='/product/:id' component={ProductScreen} />
                </Container>
            </main>
            <Footer />
        </Router>
    )
}

export default App
