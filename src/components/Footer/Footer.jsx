import React from 'react';
import { Nav, Container } from 'react-bootstrap'

const Footer = () => {
    return (
        <div>
            <Container className="fixed-bottom">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <p className="col-md-4 mb-0 text-muted">© 2022 Kogai Viktor</p>

                    <a href="/"
                       className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                        <img
                            src={require("../../assets/logo-dark.png")}
                            width="35"
                            height="35"
                            alt=""/>
                    </a>

                    <Nav className="col-md-4 justify-content-end">
                        <Nav.Item><Nav.Link href="#" className="px-2 text-muted">Главная</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="#" className="px-2 text-muted">Теория</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="#" className="px-2 text-muted">Задачи</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="#" className="px-2 text-muted">О сайте</Nav.Link></Nav.Item>
                    </Nav>
                </footer>
            </Container>
        </div>
    );
};

export default Footer;