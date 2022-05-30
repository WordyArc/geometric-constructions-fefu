import React from 'react';
import { Navbar, Nav, Button, Container, NavDropdown } from "react-bootstrap";
import './Navibar.css'

const Navibar = () => {
    return (

        <Navbar variant="dark" bg="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={require('../../assets/logo-light.png')}
                        width="30"
                        height="30"
                        className="logo d-inline-block align-top"
                    />{' '}
                    Геометрические построения</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Главная</Nav.Link>
                        <Nav.Link href="#link">Теория</Nav.Link>
                        <Nav.Link href="#link">О сайте</Nav.Link>
                        <NavDropdown title="Задачи" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Button className="SignIn mb-2 mb-lg-0 mx-lg-2" variant="primary">Войти</Button>
                        <Button variant="primary">Зарегистрироваться</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Navibar;