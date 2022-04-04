import React from "react"
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons"
import fontawesome from "@fortawesome/fontawesome"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LogOut } from "../actions/user.actions"

fontawesome.library.add(faCartShopping, faUser)

const Header = () => {

    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin


    const logOutHandler = () => {
        dispatch(LogOut())
    }

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
                            {userInfo ? (
                                <NavDropdown title={userInfo.name} id='username' className="px-3">
                                    <NavDropdown.Item href="/profile" style={{ textAlign: 'left' }}>profile</NavDropdown.Item>
                                    <NavDropdown.Item onClick={logOutHandler} style={{ textAlign: 'left' }}>logout</NavDropdown.Item>
                                </NavDropdown>
                            ) :
                                <Nav.Link href="/login">
                                    <FontAwesomeIcon
                                        icon={faUser}
                                        className="px-3"
                                    />
                                    Sign In
                                </Nav.Link>}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}
export default Header
