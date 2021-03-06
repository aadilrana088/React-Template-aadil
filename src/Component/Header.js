import React from 'react'
import {Navbar,Nav,NavDropdown} from 'react-bootstrap'
function Header() {
    return (
        <div className="header-div">
            <Navbar className="container" expand="lg">
                <Navbar.Brand href="#home">BizLand<span>.</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">About</Nav.Link>
                    <Nav.Link href="#link">Service</Nav.Link>
                    <Nav.Link href="#link">Portfolio</Nav.Link>
                    <Nav.Link href="#link">Team</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#link">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
        </div>
    )
}
export default Header