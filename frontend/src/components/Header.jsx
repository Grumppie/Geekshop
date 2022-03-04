import React from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons"
import fontawesome from "@fortawesome/fontawesome"
import { Link } from 'react-router-dom'

fontawesome.library.add(faCartShopping, faUser)

const Header = () => {
    return (
        <header>
            <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <Link to={'/'}>
                        <Navbar.Brand>GeekShop</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">

                            <Nav.Link href="/cart" >
                                <FontAwesomeIcon
                                    icon={faCartShopping}
                                    className="px-3"
                                />
                                Cart
                            </Nav.Link>
                            <Nav.Link href="/login">
                                <FontAwesomeIcon
                                    icon={faUser}
                                    className="px-3"
                                />
                                Sign In
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}
export default Header
