import React from 'react';
import {Container} from "react-bootstrap";
import './TasksPage.css';
import TaskCard from "./TaskCard/TaskCard";


const TasksPage = () => {
    return (
        <div>
            <div className="tasks__wrapper bg-img bg-light shadow">

                <Container className="py-5 text-center border-bottom">
                    <div className="row py-lg-5">
                        <div className="col-lg-6 col-md-8 mx-auto">
                            <h1 className="fw-bolder">Задачи</h1>
                            <p className="lead text-muted">На данной страницы вы можете посмотреть все доступные задачи на геометрические построения ограниченными средствами.</p>
                        </div>
                    </div>
                </Container>

            </div>



            <div className="album py-5">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

                        <TaskCard/>
                        <TaskCard/>
                        <TaskCard/>
                        <TaskCard/>
                        <TaskCard/>
                        <TaskCard/>
                        <TaskCard/>
                        <TaskCard/>
                        <TaskCard/>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default TasksPage;