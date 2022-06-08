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
            app.setPerspective("5");
            app.enableRightClick(true);
        } else {
            document.getElementById("edit-mode").innerText = "Режим презентации";
            app.setPerspective("T");
            app.enableRightClick(false);
            app.setAxesVisible(3, false, false, false);
        }
    }

    let scenes = new Map();
    let sceneNumber = 1;

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
        const app = window.appId;
        let prevSceneNumber = sceneNumber - 1;
        if (prevSceneNumber > 0) {
            hideScene(sceneNumber);
            --sceneNumber;
            document.getElementById("current-scene").innerText = "Рисунок " + sceneNumber;
        }
        else return;
    }

    function nextScene() {
        const app = window.appId;
        let nextScene = sceneNumber + 1;
        if (nextScene < scenes.size + 1) {
            showScene(nextScene);
            ++sceneNumber;
            document.getElementById("current-scene").innerText = "Рисунок " + sceneNumber;
        }
        else return;
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

    useEffect(() => {
        const createTask = async () => {
            const app = await window.appId;
            await setNewBase64(app.getBase64);
        }
        createTask()
    })

    const setTask = async () => {
        const strScene = JSON.stringify(scenes, replacer);
        setNewScenes(strScene);
        if (strScene !== "") {
            await addDoc(tasksCollectionRef, {
                title: newTitle,
                description: newDescription,
                solution: newSolution,
                base64: newBase64,
                scenes: strScene,
                type: newType,
                createdAt: newCreatedAT
            });
            alert('Задача успешно создана')
        } else {
            alert('Создание задачи прервалось, пожалуйста нажмите "Создать задачу" снова')
        }
    }


    let arr = [];
    let startScene = 0;
    let key = 1;
    function setScene() {
        const app = window.appId;
        let i, strName;
        let objNumber = app.getObjectNumber();
        for (i = startScene; i < objNumber; i++) {
            strName = app.getObjectName(i);
            arr[i] = strName;
            startScene = objNumber;
            // console.log(objNumber);
            if (i === objNumber-1) {
                scenes.set(key, arr);
                key++;
            }
        }
        console.log(arr);
        arr = [];
    }


    function replacer(key, value) {
        if(value instanceof Map) {
            return {
                dataType: 'Map',
                value: Array.from(value.entries()), // or with spread: value: [...value]
            };
        } else {
            return value;
        }
    }





    /*function createTask () {
        const app = window.appId;
        if (newBase64 === "") {
            let e = setNewBase64(app.getBase64)
            setTimeout(e, 1000)
        }
        const strScene = JSON.stringify(scenes, replacer);
        setNewScenes(strScene);
        const setTask = async () => {
            await addDoc(tasksCollectionRef, {
                title: newTitle,
                description: newDescription,
                solution: newSolution,
                base64: newBase64,
                scenes: newScenes,
                type: newType,
                createdAt: newCreatedAT
            });
        }
        setTask()
    }*/








   /* const [userDataArray, setUserDataArray] = useState([]);

    useEffect(() => {
        let unsubscribed = false;

        getDocs(collection(db, "tasks"))
            .then((querySnapshot) => {
                if (unsubscribed) return; // unsubscribed? do nothing.

                const newUserDataArray = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));

                setUserDataArray(newUserDataArray);
            })
            .catch((err) => {
                if (unsubscribed) return; // unsubscribed? do nothing.

                //
                console.error("Failed to retrieve data", err);
            });

        return () => unsubscribed  = true;
    }, []);*/







    return (


        <div className="m-auto mx-lg-5">
            <div className="task__wrapper container-fluid shadow-lg  bg-light align-content-center py-4" id="main-container">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-6">
                        <div className="d-flex flex-column align-items-center">
                            <div className="d-flex align-items-center shadow">
                                <Geogebra
                                    debug
                                    id="appId"
                                    language="english"
                                    appName="3d"
                                    width="600"
                                    height="400"
                                    enableUndoRedo="false"
                                    useBrowserForJS="true"
                                />
                            </div>
                            <div className="mt-3 d-flex justify-content-center w-50">
                                <div className="btn-group">
                                    <Button className="btn-dark" onClick={prevScene}>Предыдущий рисунок</Button>
                                    <div className="bg-dark text-primary d-flex align-items-center"
                                         id="current-scene">Рисунок 1
                                    </div>
                                    <Button className="btn-dark" onClick={nextScene} id="nextSceneButton">Следующий рисунок</Button>
                                </div>
                                <Button className="mx-2 btn-dark" onClick={setScene}>Сохранить сцену</Button>
                            </div>
                            <div className="d-flex justify-content-center under-buttons">
                                <Button className="btn-dark mt-2" id="edit-mode" onClick={ChangeMode}>Режим презентации</Button>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-column justify-content-between align-items-center col-lg-6 mt-4 mt-lg-0" id="task-text">
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