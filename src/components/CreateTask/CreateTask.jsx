import React, {useEffect, useState} from 'react';

import {db} from '../../firebase-config'
import {addDoc, collection, getDocs, serverTimestamp} from "firebase/firestore";
import Geogebra from "../../scripts/InitGGBApp";
import {Button} from "react-bootstrap";
import './CreateTask.css'

const CreateTask = () => {

    function ChangeMode() {
        const app = window.appId;
        if (document.getElementById('edit-mode').innerText === "Режим презентации") {
            document.getElementById("edit-mode").innerText = "Режим редактирования";
            app.setPerspective("G");
            app.enableRightClick(false);
            app.setAxesVisible(false);
            app.setGridVisible(false)
        } else {
            document.getElementById("edit-mode").innerText = "Режим презентации";
            app.setPerspective("AGS");
            app.setPerspective("+Tools")
            app.enableRightClick(true);
            app.setAxesVisible(true, true);
            app.setGridVisible(true)
        }
    }

    let layerInt = 0

    function layerCounter() {
        document.getElementById("current-scene").innerText = "Рисунок " + layerInt;
    }

    function prevScene() {
        const app = window.appId;
        if (layerInt > 0) {
            app.setLayerVisible(layerInt, false);
            --layerInt;
            layerCounter()
        }
    }

    function nextScene() {
        const app = window.appId;
        let strName, numLayers
        strName = app.getObjectName()
        numLayers = app.getLayer(strName)
        if (layerInt < numLayers + 1) {
            app.setLayerVisible(layerInt, true);
            ++layerInt;
            layerCounter()
        }
    }

    let startScene = 0;
    function setLayer() {
        const app = window.appId;
        let strName
        let layer
        let objNumber = app.getObjectNumber();
        for (let i = startScene; i < objNumber; i++) {
            strName = app.getObjectName(i);
            layer = app.setLayer(strName, layerInt)
            startScene = objNumber;
        }
        layerInt++
        layerCounter()
        console.log(layerInt)
    }


    const [tasks, setTasks] = useState([]);
    const tasksCollectionRef = collection(db, 'tasks')
    useEffect(() => {
        const getTasks = async () => {
            const data = await getDocs(tasksCollectionRef);
            console.log(data);
            setTasks(data.docs.map((doc) => ({...doc.data(), id: doc.id })))
        }
        getTasks()
    }, [])

    const [newTitle, setNewTitle] = useState("")
    const [newDescription, setNewDescription] = useState("")
    const [newSolution, setNewSolution] = useState("")
    const [newBase64, setNewBase64] = useState("")
    const [newScenes, setNewScenes] = useState("")
    const [newType, setNewType] = useState("")
    const newCreatedAT = serverTimestamp();

    /*useEffect(() => {
        const createTask = async () => {
            const app = await window.appId;
            let base64 = await app.getBase64();
            await setNewBase64(base64);
        }
        createTask()
    })*/

    const setTask = async () => {
        const strScene = '';
        const app = await window.appId;
        const strBase64 = await app.getBase64();
        setNewScenes(strScene);
        if (strScene !== "") {
            await addDoc(tasksCollectionRef, {
                title: newTitle,
                description: newDescription,
                solution: newSolution,
                base64: strBase64,
                scenes: strScene,
                type: newType,
                createdAt: newCreatedAT
            });
            alert('Задача успешно создана')
        } else {
            alert('Создание задачи прервалось, пожалуйста нажмите "Создать задачу" снова')
        }
    }



    /*function saveGgbFile(){
        const app = window.appId;
        app.getBase64(function(b){document.getElementById("Base64").value = b});
    }
    function loadGgbFile(){
        const app = window.appId;
        app.setBase64(document.getElementById("Base64").value);
    }*/

    return (
        <div className="m-auto mx-lg-5">
            <div className="task__wrapper container-fluid shadow-lg  bg-light align-content-center py-4" id="main-container">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-6">
                        <div className="d-flex flex-column align-items-center">
                            <div className="d-flex align-items-center shadow">
                                <Geogebra
                                    id="appId"
                                    language="russian"
                                    appName="geometry"
                                    width="600"
                                    height="400"
                                    enableUndoRedo="true"
                                    useBrowserForJS="true"
                                    customToolBar="0 1 2 3 6 10 15 34"
                                />
                            </div>
                            <div className="mt-3 d-flex justify-content-center w-50">
                                <div className="btn-group">
                                    <Button className="btn-dark" onClick={prevScene}>Предыдущий рисунок</Button>
                                    <div className="bg-dark text-primary d-flex align-items-center" id="current-scene">Рисунок</div>
                                    <Button className="btn-dark" onClick={nextScene} id="nextSceneButton">Следующий рисунок</Button>
                                </div>
                                <Button className="mx-2 btn-dark" onClick={setLayer}>Сохранить сцену</Button>
                            </div>
                            <div className="d-flex justify-content-center under-buttons">
                                <Button className="btn-dark mt-2" id="edit-mode" onClick={ChangeMode}>Режим презентации</Button>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-column justify-content-between align-items-center col-lg-6 mt-4 mt-lg-0" id="task-text">


                        {/*<ul>
                            <li/><button onClick={saveGgbFile} >Save</button>
                            <li/><button onClick={loadGgbFile}>Load</button>
                        </ul>
                        <textarea name="Base64" id="Base64" cols="66" rows="8"></textarea>*/}


                        <div>
                            <h4>Название задачи</h4>
                            <input className="create-task__title-input" placeholder="Введите название задачи..." type="text" onChange={(event) => {setNewTitle(event.target.value)}}/>
                        </div>
                        <hr/>
                        <div>
                            <h4>Описание задачи</h4>
                            <textarea className="create-task__description-input" placeholder="Введите описание задачи..." onChange={(event) => {setNewDescription(event.target.value)}}/>
                        </div>
                        <hr/>
                        <div>
                            <h4>Решение задачи</h4>
                            <textarea className="create-task__solution-input" placeholder="Введите решение задачи..." onChange={(event) => {setNewSolution(event.target.value)}}/>
                        </div>
                        <hr/>
                        <div>
                            <h4>Тип задачи</h4>
                            <div className="d-flex flex-row">
                                <div className="mx-2">
                                    <input className="mx-1" id="type1" name="taskType" type="radio" onChange={(event) => {setNewType("Циркуль")}}/>
                                    <label htmlFor="type1">Циркуль</label>
                                </div>
                                <div className="mx-2">
                                    <input className="mx-1" id="type2" name="taskType" type="radio" onChange={(event) => {setNewType("Линейка")}}/>
                                    <label htmlFor="type2">Линейка</label>
                                </div>
                                <div className="mx-2">
                                    <input className="mx-1" id="type3" name="taskType" type="radio" checked onChange={(event) => {setNewType("Смешанная")}}/>
                                    <label htmlFor="type3">Смешанная</label>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <Button className="btn-primary" onClick={setTask}>Создать задачу</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateTask;