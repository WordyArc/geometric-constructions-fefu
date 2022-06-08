import React, {useEffect, useState} from 'react';
import './Task.css'

import Geogebra from "../../../scripts/InitGGBApp";
// import InitTask from "../../../scripts/InitTask";
import {collection, doc, getDoc} from "firebase/firestore";
import {db} from "../../../firebase-config";
import {Button} from "react-bootstrap";


const Task = () => {

    let id = 'x2I5RJIhpvvTLMn0SDDI'
    const colRef = collection(db, 'tasks')
    const docRef = doc(db, 'tasks', id)
    const [taskList, setTaskList] = useState([])
    useEffect(() => {
        const getTask = async () => {
            getDoc(docRef)
                .then((doc) => {
                    setTaskList(doc.data())
                })
        }
        getTask()
    }, [])

    useEffect(() => {
        const setData = async () => {
            const app = await window.appId
            await app.setBase64(taskList.base64);
            // function loadGgbFile(){ app.setBase64("taskList.base64"); }
            // setTimeout(loadGgbFile, 300)

            let strScenes = await taskList.scenes
            scenes = JSON.parse(strScenes, reviver)
            setTimeout(setPresentMode, 10);

            let timestamp = await taskList.createdAt
            document.getElementById('current_date_time_block').innerHTML = timestamp.toDate();
            // await setPresentMode();
        }
        setTimeout(setData, 50)
    },);


    function setPresentMode() {
        const app = window.appId;
        app.setPerspective("G");
        app.enableRightClick(false);
        app.setAxesVisible(false);
        app.setGridVisible(false)
    }
    function setChangeMode() {
        const app = window.appId;
        app.setPerspective("AGS");
        app.setPerspective("+Tools")
        app.enableRightClick(true);
        app.setAxesVisible(true, true);
        app.setGridVisible(true)
    }

    function ChangeMode() {
        const app = window.appId;
        if (document.getElementById('edit-mode').innerText === "Режим презентации") {
            document.getElementById("edit-mode").innerText = "Режим редактирования";
            setChangeMode()
        } else {
            document.getElementById("edit-mode").innerText = "Режим презентации";
            setPresentMode()
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

    function reviver(key, value) {
        if(typeof value === 'object' && value !== null) {
            if (value.dataType === 'Map') {
                return new Map(value.value);
            }
        }
        return value;
    }

    /*function loadGgbFile(){
        const app = window.appId;
        app.setBase64(taskList.base64);
        setTimeout(setPresentMode,1)
    }
    setTimeout(loadGgbFile, 100)*/

    /*(async () => {
        const app = await window.appId
        await app.setBase64(taskList.base64);
        let strScenes = taskList.scenes
        scenes = JSON.parse(strScenes, reviver)
        setTimeout(setPresentMode, 1);
    })();*/



    /*function setStrScenes() {
        let strScenes = taskList.scenes
        const newStrScene = JSON.parse(strScenes, reviver);
        scenes = newStrScene
    }
    setTimeout(setStrScenes, 100)*/

    /*(async () => {
        const app = await window.appId
        await app.setBase64(taskList.base64);
        let strScenes = await taskList.scenes
        scenes = JSON.parse(strScenes, reviver)
        setTimeout(setPresentMode, 10);
    })();*/


    /*getDoc(docRef)
        .then((doc) => {
            // console.log(doc.data(), doc.id)
        })

    const q = query(colRef, orderBy('type'))

    onSnapshot(q, (snapshot) => {
        let tasks = []
        snapshot.docs.forEach((doc) => {
            tasks.push({...doc.data(), id: doc.id})
        })
    })

    onSnapshot(docRef, (doc) => {
        // console.log(doc.data(), doc.id)
    })*/


    /*useEffect(
        () =>
            onSnapshot(docRef, (snapshot) =>
                setTaskList(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
            ),
        []
    );*/

    // useEffect(() => {
    //     onSnapshot(docRef, (doc) => {
    //         setTaskList(doc.data())
    //         console.log(taskList)
    //     })
    // }, )



// console.log(taskList.type)


    /*db.collection('tasks')
        .doc(id)
        .get()
        .then((snapshot) => {
        if(snapshot) {
            setTaskList(snapshot.data())
        }
    })*/



    /*async function buscarDocumentOrCrearDocumento(id) {

        const docuRef = doc(db, id);

        const consulta = await getDoc(docuRef);

        if (consulta.exists()) {

            const infoDocu = consulta.data();
            return infoDocu.tareas;
        } else {
            console.log("Note doesn't exist");
        }
    }

    useEffect(() => {
        async function fetchTareas() {
            const tareasFetchadas = await buscarDocumentOrCrearDocumento(id);
            setTaskList(tareasFetchadas);
        }

        fetchTareas();
    }, []);*/


    return (
        <div className="m-auto mx-2 mx-lg-5">
            <div className="task__wrapper container-fluid shadow-lg  bg-light align-content-center py-5"
                 id="main-container">

                <div className="row">
                    <div className="col-lg-6">
                        <h2 className="text-center mb-4">{taskList.title}</h2>
                        <div className="d-flex flex-column align-items-center">
                            <div className="ggb shadow">
                                <Geogebra
                                    id="appId"
                                    language="russian"
                                    appName="geometry"
                                    width="600"
                                    height="400"
                                    enableUndoRedo="false"
                                    useBrowserForJS="true"
                                    customToolBar="0 1 2 3 6 10 15 34"
                                />
                            </div>
                            <div className="mt-3 btn-group d-flex justify-content-center w-50 under-buttons">
                                <Button className="btn-dark" onClick={prevScene}>Предыдущий рисунок</Button>
                                <div className="bg-dark text-primary d-flex align-items-center"
                                     id="current-scene">Рисунок 1
                                </div>
                                <Button className="btn-dark" onClick={nextScene} id="nextSceneButton">Следующий
                                    рисунок</Button>
                            </div>
                            <div className="d-flex justify-content-center under-buttons">
                                <Button className="btn-dark mt-2" id="edit-mode" onClick={ChangeMode}>Режим
                                    презентации</Button>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-column justify-content-between align-items-center col-lg-6 mt-4 mt-lg-0" id="task-text">
                        <div className="w-100 text-justify">
                            <h2>Описание задачи</h2>
                            <p className="text-wrap">
                                { taskList.description }
                            </p>
                            <hr/>
                            <h2 className="text-center">Решение</h2>
                            <p className="text-wrap">
                                { taskList.solution }
                            </p>

                        </div>
                        <div className="d-flex flex-row">
                            <small className="text-body mx-3 fw-bold">Задача создана:</small>
                            <small id="current_date_time_block"></small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Task;