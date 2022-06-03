import React from 'react';
import {Container} from "react-bootstrap";
import './Task.css'

import Geogebra from "../../../scripts/initGGBApp";
import {useState} from "react";



const Task = () => {

    function ChangeMode() {
        const app = window.appId;

        if (document.getElementById('edit-mode').innerText === "Режим презентации") {
            document.getElementById("edit-mode").innerText = "Режим редактирования";
            app.setPerspective("5");
            app.enableRightClick(true);
        } else {
            document.getElementById("edit-mode").innerText = "Режим презентации";
            app.setPerspective("T");
            app.enableRightClick(false);
            app.setAxesVisible(3, false, false, false);
        }
    }

    var scenes = new Map();
    var sceneNumber = 1;

    function addScene(number, names) {
        scenes.set(number, names);
    }

    function hideScene(number) {
        const app = window.appId;
        let namesArray = scenes.get(number);
        for (let i = 0; i < namesArray.length; ++i) {
            app.setVisible(namesArray[i], false);
        }
    }

    function showScene(number) {
        const app = window.appId;
        let namesArray = scenes.get(number);
        for (let i = 0; i < namesArray.length; ++i) {
            app.setVisible(namesArray[i], true);
        }
    }

    function prevScene() {
        let prevSceneNumber = sceneNumber - 1;
        if (prevSceneNumber > 0) {
            hideScene(sceneNumber);
            --sceneNumber;
            document.getElementById("current-scene").innerText = "Рисунок " + sceneNumber;
        }
        else return;
    }

    function nextScene() {
        let nextScene = sceneNumber + 1;
        if (nextScene < scenes.size + 1) {
            showScene(nextScene);
            ++sceneNumber;
            document.getElementById("current-scene").innerText = "Рисунок " + sceneNumber;
        }
        else return;
    }


    return (
        <div className="m-auto">
            <div className="container-fluid bg-light align-content-center" id="main-container">
                <div className="row">
                    <div className="col-lg-6">
                        <h1 className="text-center">Задача №1</h1><br/>
                        <Geogebra
                            debug
                            id="appId"

                            appName="3d"
                            width="600"
                            height="400"
                            enableUndoRedo="false"
                            useBrowserForJS="true"
                        />
                        {/*<div className="ggb-container">
                            <div id="ggb-element"></div>
                        </div>*/}
                        <div className="btn-group d-flex justify-content-center w-50 under-buttons">
                            <button className="btn btn-dark" onClick={prevScene}>Предыдущий рисунок</button>
                            <button className="btn btn-dark" id="current-scene">Рисунок 1</button>
                            <button className="btn btn-dark" onClick={nextScene} id="nextSceneButton">Следующий
                                рисунок
                            </button>
                        </div>
                        <div className="d-flex justify-content-center under-buttons">
                            <button className="btn btn-dark" id="edit-mode" onClick={ChangeMode}>Режим редактирования
                            </button>
                        </div>
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