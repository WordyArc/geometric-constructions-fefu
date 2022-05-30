import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import './Info.css'

const Info = () => {
    return (
        <div>

            <div className="px-4 py-5 my-5 text-center">
                <img className="d-block mx-auto mb-4"
                     src={require('./assets/compassAndRuler.png')}
                     alt=""
                     width={"200"}
                     height={"200"}/>
                    <h1 className="display-5 fw-bold">Centered hero</h1>
                    <Col className="col-lg-6 mx-auto">
                        <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with
                            Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables
                            and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript
                            plugins.</p>
                    </Col>
            </div>
            <div className="divider"></div>
            <Container className="col-xxl-8 px-4 py-5">
                <Row className="flex-lg-row-reverse justify-content-center align-items-center g-5 py-5">
                    <Col className="col-10 col-sm-8 col-lg-6">
                        <img src={require('./assets/compass.png')}
                             className="d-block mx-lg-auto img-fluid"
                             alt="compass"
                             width="300"
                             height="300"
                             loading="lazy"/>
                    </Col>
                    <Col className="col-lg-6">
                        <h1 className="display-5 fw-bold lh-1 mb-3">Responsive left-aligned hero with image</h1>
                        <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap,
                            the world’s most popular front-end open source toolkit, featuring Sass variables and mixins,
                            responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                    </Col>
                </Row>
            </Container>
            <div className="divider"></div>
            <Container className="col-xxl-8 px-4 py-5">
                <Row className="flex-lg-row-reverse justify-content-center align-items-center g-5 py-5">
                    <Col className="col-10 col-sm-8 col-lg-6">
                        <img src={require('./assets/ruler.png')}
                             className="d-block mx-lg-auto img-fluid"
                             alt="compass"
                             width="300"
                             height="300"
                             loading="lazy"/>
                    </Col>
                    <Col className="col-lg-6">
                        <h1 className="display-5 fw-bold lh-1 mb-3">Responsive left-aligned hero with image</h1>
                        <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap,
                            the world’s most popular front-end open source toolkit, featuring Sass variables and mixins,
                            responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                    </Col>
                </Row>
            </Container>
            {/*<Dropdown.Divider className="b-example-divider"></Dropdown.Divider>*/}
        </div>
    );
};

export default Info;