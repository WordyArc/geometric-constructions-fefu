import React from 'react';
import { Nav, Container, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import './Footer.css'
import { NavLink } from 'react-router-dom'

const Footer = () => {

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Вернуться в начало страницы
        </Tooltip>
    );

    return (
        <div className={"mt-auto"}>
            {/*<Container className="fixed-bottom">*/}
            <Container>
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 mb-4 border-top">
                    <p className="col-md-4 mb-0 text-muted">© 2022 Kogai Viktor</p>

                    <a href="/"
                       className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                        <img className={"Footer-logo"}
                            // src={require("../../assets/logo-dark.png")}
                            src={require("./assets/logo-dark.png")}
                            width={"35"}
                            height={"35"}
                            alt=""/>
                    </a>

                    <Nav className="col-md-4 justify-content-center justify-content-lg-end">
                        <NavLink to="/" className="footer__link px-2">Главная</NavLink>
                        <NavLink to="/Info" className="footer__link px-2">Теория</NavLink>
                        <NavLink to="/TasksPage" className="footer__link px-2">Задачи</NavLink>
                        <NavLink to="/About" className="footer__link px-2">О сайте</NavLink>
                        <OverlayTrigger
                            placement="right"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderTooltip}
                        >
                            <Button className={"mx-2"} variant={"secondary"}>
                                <a href="#" className="text-light text-decoration-none">
                                    <img className={"mb-1"}
                                         src={require("./assets/Button-up.png")}
                                         width={"15"}
                                         height={"15"}
                                         alt=""/>{' '}Наверх</a>
                            </Button>
                        </OverlayTrigger>

                    </Nav>

                </footer>
            </Container>
        </div>
    );
};

export default Footer;