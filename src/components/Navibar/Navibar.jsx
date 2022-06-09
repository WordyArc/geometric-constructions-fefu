import React from 'react';
import { Navbar, Nav, Button, Container, NavDropdown } from "react-bootstrap";
import './Navibar.css'
import { NavLink } from "react-router-dom";
import {
    ABOUT_ROUTE, CREATETASK_ROUTE,
    HOME_ROUTE,
    INFO_ROUTE,
    TASKSCOMPASS_ROUTE,
    TASKSMIXED_ROUTE, TASKSPAGE_ROUTE,
    TASKSRULER_ROUTE
} from "../../utils/consts";

const Navibar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="fixed-top">
                <Container>
                    <Navbar.Brand className="navibar__brand" href="/"><img
                        alt=""
                        // src={require('../../assets/logo-light.png')}
                        src="/logo-light.png"
                        width={"30"}
                        height={"30"}
                        className="logo d-inline-block align-top"
                    />{' '}
                        Геометрические построения</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink className="navibar__link" to={HOME_ROUTE}>Главная</NavLink>
                            <NavLink className="navibar__link" to={INFO_ROUTE}>Теория</NavLink>
                            <NavDropdown title="Задачи" id="collasible-nav-dropdown">
                                <NavLink className="dropdown__link_disabled" to={TASKSCOMPASS_ROUTE}>Построение циркулем</NavLink>
                                <NavLink className="dropdown__link_disabled" to={TASKSRULER_ROUTE}>Построение линейкой</NavLink>
                                <NavLink className="dropdown__link_disabled" to={TASKSMIXED_ROUTE}>Смешанные</NavLink>
                                <NavDropdown.Divider />
                                <NavLink className="dropdown__link" to={TASKSPAGE_ROUTE}>Все задачи</NavLink>
                            </NavDropdown>
                            <NavLink className="navibar__link" to={ABOUT_ROUTE}>О сайте</NavLink>
                            <NavLink className="navibar__link" to={CREATETASK_ROUTE}>Создать задачу</NavLink>
                        </Nav>
                        <Nav>
                            {/*<Button disabled className="SignIn mb-2 mb-lg-0 mx-lg-2" variant="primary">Войти</Button>
                            <Button disabled variant="primary">Зарегистрироваться</Button>*/}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

    );
};

export default Navibar;