import React from 'react'
import { Button, Navbar,Container, Nav, NavDropdown,Form, FormControl } from 'react-bootstrap';

function Header(){
    return (
        <div>
            <Navbar expand="lg" bg="dark" variant="dark">
                <Container fluid>
                    <Navbar.Brand href="/">EconoMyDataAPI</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/">Home</Nav.Link>
                        <NavDropdown title="Region of Countries" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="/asia">Asia</NavDropdown.Item>
                            <NavDropdown.Item href="/europe">Europe</NavDropdown.Item>
                            <NavDropdown.Item href="/northamerica">North America</NavDropdown.Item>
                            <NavDropdown.Item href="/southamerica">South America</NavDropdown.Item>
                            <NavDropdown.Item href="/australia">Australia</NavDropdown.Item>
                            <NavDropdown.Item href="/africa">Africa</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        </div>
    )
}

export default Header