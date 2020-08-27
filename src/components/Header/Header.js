import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../../components/Assets/Css/bootstrap.min.css'
import logo from '../../components/Assets/images/logo.png'

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    <img
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                    Course
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Courses</Nav.Link>
                    <Nav.Link href="#pricing">About</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    );
};

export default Header;