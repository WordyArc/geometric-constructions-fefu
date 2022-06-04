import React from 'react';
import {Container} from "react-bootstrap";
import './Task.css'

import Geogebra from "../../../scripts/InitGGBApp";
import {useState} from "react";
import InitTask from "../../../scripts/InitTask";



const Task = () => {



    return (
        <div className="m-auto">
            <div className="container-fluid bg-light align-content-center" id="main-container">
                <div className="row">
                    <div className="col-lg-6">
                        <h1 className="text-center">Задача №1</h1><br/>
                        <InitTask />
                    </div>
                    <div className="col-lg-6" id="task-text">
                        <div className="w-100 text-justify">
                            <h2 className="text-center">Задача</h2>
                            <p>
                                На ребре `CD` куба `ABCDEHGF` задана точка `P` - середина этого ребра. <br/>
                                Найти углы между прямой `EP` и плоскостью: <b>a)</b> `CDE`; <b>б)</b> `EBC`
                            </p>
                            <hr/>
                                <h2 className="text-center">Решение</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Animi deleniti deserunt dignissimos, esse est, et illum ipsa laboriosam odit optio,
                                    possimus quam reprehenderit tenetur totam ullam. Dolore doloribus laudantium quidem!
                                </p>
                        </div>
                        <a href="/GebraExample">Gebra</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Task;