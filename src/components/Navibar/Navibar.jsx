import React from 'react';
import { Navbar, Nav, Button, Container, NavDropdown } from "react-bootstrap";
import './Navibar.css'
import { NavLink } from "react-router-dom";

const Navibar = () => {
    return (

        <Navbar className={"fixed-top"} variant="dark" bg="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        // src={require('../../assets/logo-light.png')}
                        src="/logo-light.png"
                        width={"30"}
                        height={"30"}
                        className="logo d-inline-block align-top"
                    />{' '}
                    Геометрические построения</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className="navibar__link" to="/">Главная</NavLink>
                        <NavLink className="navibar__link" to="/Info">Теория</NavLink>
                        <NavDropdown title="Задачи" id="basic-nav-dropdown">
                            {/*<NavLink className="dropdown__link" to="/TasksCompass">Построение циркулем</NavLink>*/}
                            {/*<NavLink className="dropdown__link" to="/TasksRuler">Построение линейкой</NavLink>*/}
                            {/*<NavLink className="dropdown__link" to="/TasksMixed">Смешанные</NavLink>*/}
                            <NavDropdown.Divider />
                            <NavLink className="dropdown__link" to="/TasksPage">Все задачи</NavLink>
                        </NavDropdown>
                        <NavLink className="navibar__link" to="/About">О сайте</NavLink>

                    </Nav>
                    <Nav>
                        <Button disabled className="SignIn mb-2 mb-lg-0 mx-lg-2" variant="primary">Войти</Button>
                        <Button disabled variant="primary">Зарегистрироваться</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Navibar;