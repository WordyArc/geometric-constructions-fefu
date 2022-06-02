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
                    <h1 className="display-5 fw-bold">Геометрические построения ограниченными средствами</h1>
                    <Col className="col-lg-6 mx-auto">
                        <h4>Общие аксиомы</h4>
                        <p className="lead mb-4 text-start">
                            I.	Каждая данная фигура построена. <br/>
                            II.	Если построены две (или более) фигуры, то построено и соединение этих фигур. <br/>
                            III.	Если построены две фигуры, то можно установить, является ли их разность пустым множеством или нет.<br/>
                            IV.	Если разность двух построенных фигур не является пустым множеством, то эта разность построена.<br/>
                            V.	Если две фигуры построены, то можно установить, является ли их пересечение пустым множеством или нет.<br/>
                            VI.	Если пересечение двух построенных фигур не пусто, то оно построено.<br/>
                            VII.	Можно построить любое конечное число общих точек двух построенных фигур, если такие точки существуют.<br/>
                            VIII.	Можно построить точку, заведомо принадлежащую построенной фигуре.<br/>
                            IX.	Можно построить точку, заведомо не принадлежащую построенной фигуре.<br/>

                        </p>
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
                        <h1 className="display-5 fw-bold lh-1 mb-3">Построения одиним циркулем</h1>
                        <h4>Можно постросить:</h4>
                        <p className="lead text-start">
                            1. Окружность, если построены центр окружности и отрезок, равный радиусу окружности (или его концы). <br/>
                            2. Построить любую из двух дополнительных дуг окружности и концы этих дуг.
                        </p>
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
                        <h1 className="display-5 fw-bold lh-1 mb-3">Построения одной линейкой</h1>
                        <h4>Можно постросить:</h4>
                        <p className="lead text-start">
                            1. Построить отрезок, соединяющий две построенные точки. <br/>
                            2. Построить прямую, проходящую через две построенные точки. <br/>
                            3. Построить луч, исходящий из построенной точки и проходящий через другую построенную точку. <br/>
                        </p>
                    </Col>
                </Row>
            </Container>
            {/*<Dropdown.Divider className="b-example-divider"></Dropdown.Divider>*/}
        </div>
    );
};

export default Info;