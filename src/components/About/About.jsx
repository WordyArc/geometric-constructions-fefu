import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import './About.css'
import { Github } from 'react-bootstrap-icons';

const About = () => {
    return (
        <div className={"mt-5"}>
                <Container className="container-fluid text-start">
                    <Row className="justify-content-center">
                        <Col className="col-xl-8 col-lg-10 col-12">

                            <div className="header mt-md-5">
                                <div className="header-body"><h6 className="header-pretitle">О сайте</h6><h1
                                    className="header-title display-4">Геометрические построения</h1></div>
                            </div>
                            <p>Целью данного сайта является помощь вам в основоении геометрических построений ограниченными средствами.
                                Вы сможете увидеть как решаются подобные задачи шаг за шагом.
                            </p>

                            <div className="header mt-md-5">
                                <div className="header-body"><h1 className="header-title">Важность</h1></div>
                            </div>
                            <p>Геометрические построения могут сыграть серьёзную роль в математической подготовки школьника.
                                Ни один вид задач не даёт столько материала для развития математической инициативы и логических навыков учащегося, как геометрические задачи на построение.
                                Они обычно не допускают стандартного подхода к ним и формального восприятия их учащимися. Задачи на построение удобны для закрепления теоретических знаний по любому разделу школьного курса геометрии.
                                Геометрические построения являются весьма существенным элементом изучения геометрии, важным средством формирования у учащихся геометрических представлений в целом.
                                В процессе геометрических построений учащиеся в практическом плане знакомятся со свойствами геометрических фигур и отношений, учатся пользоваться чертежными инструментами, приобретают графические навыки.
                                В правильности многих математических утверждений в большинстве случаев школьники убеждаются также в процессе геометрических построений.
                            </p>


                            <div className="header mt-md-5">
                                <div className="header-body"><h1 className="header-title">Используемые технологии при разработке</h1></div>
                            </div>
                            <ul>
                                <li><strong>📄 React JS</strong> - JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов.</li>
                                <li><strong>📄 Bootstrap</strong> - Свободный набор инструментов для создания сайтов и веб-приложений. Включает в себя HTML- и CSS-шаблоны оформления для типографики, веб-форм, кнопок, меток, блоков навигации и прочих компонентов веб-интерфейса, включая JavaScript-расширения.</li>
                                <li className="text-decoration-line-through"><strong>📁 SQLite</strong> - Компактная встраиваемая СУБД. (В процессе)</li>
                                <li><strong>📁 Git</strong> - Распределённая система управления версиями.</li>
                                <li><strong>📄 GeoGebra</strong> - Кроссплатформенная динамическая математическая программа для всех уровней образования, включающая в себя геометрию, алгебру, таблицы, графы, статистику и арифметику, в одном пакете.</li>

                            </ul>

                            <div className="header mt-md-5">
                                <div className="header-body"><h1 className="header-title">Исходный код</h1></div>
                            </div>
                            <div className={"my-3"}>
                                <a className={"text-decoration-none"}
                                   href="https://github.com/WordyArc/geometric-constructions"
                                   target="_blank">
                                    <Github color="black" size={"30"} />{' '}
                                Страница на GitHub</a>
                            </div>


                            <div className="header mt-md-5">
                                <div className="header-body"><h1 className="header-title">Авторы проекта</h1></div>
                            </div>
                            <p>Данный сайт разработан в рамках выпускной квалификационной работы в Дальневосточном федеральном университете.</p>
                            <ul>
                                <li><code>Колобов А.Г. </code>- научный руководитель проекта. Кандидат физико-математических наук, доцент кафедры математического и компьютерного моделирования.
                                </li>
                                <li><code>Когай В.Я. </code>- разработчик сайта. Студент 4 курса направления 02.03.01 Математика и компьютерные науки.
                                </li>
                            </ul>

                            <div className="header mt-md-5">
                                <div className="header-body"><h1 className="header-title">Обратная связь</h1></div>
                            </div>
                            <ul>
                                <li><code>Email: </code> geometric.support@gmail.com
                                </li>
                            </ul>


                        </Col>
                    </Row>
                </Container>
        </div>
    );
};

export default About;