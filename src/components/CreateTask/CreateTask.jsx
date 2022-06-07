import React, {useEffect, useState} from 'react';

import {db} from '../../firebase-config'
import {addDoc, collection, getDocs, serverTimestamp} from "firebase/firestore";
import Geogebra from "../../scripts/InitGGBApp";

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

    function saveGgbFile(){
        const app = window.appId;
        return app.getBase64()
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



        // setNewScenes(scenesObj)

    })

    function createTask2 () {
        const app = window.appId;
        if (newBase64 === "") {
            let e = setNewBase64(app.getBase64)
            setTimeout(e, 1000)
        }
        const strScene = JSON.stringify(scenes, replacer);
        setNewScenes(strScene);
        const createTask = async () => {
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
        createTask()
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




    let arr = [];
    let startScene = 0;
    let key = 1;
    function setScene() {
        const app = window.appId;
        let i, strName;

        let objNumber = app.getObjectNumber();
        for (i = startScene; i < objNumber; i++) {
            strName = app.getObjectName(i);
            // addScene2(sceneNumber, [strName])
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

        // addScene2(key, arr);
    }


    //
    function Test() {
        console.log(scenes.size)
        console.log(scenes.get(sceneNumber))
        console.log(newBase64)




    }



    return (
        <div className="container mt-auto">
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
            <div className="btn-group d-flex justify-content-center w-50 under-buttons">
                <button className="btn btn-dark" onClick={prevScene}>Предыдущий рисунок</button>
                <button className="btn btn-dark" id="current-scene">Рисунок 1</button>
                <button className="btn btn-dark" onClick={nextScene} id="nextSceneButton">Следующий
                    рисунок
                </button>
            </div>
            <div className="d-flex justify-content-center under-buttons">
                <button className="btn btn-dark" id="edit-mode" onClick={ChangeMode}>Режим презентации</button>
            </div>
            <input placeholder="Title" type="text" onChange={(event) => {setNewTitle(event.target.value)}}/>
            <input placeholder="description" type="text" onChange={(event) => {setNewDescription(event.target.value)}}/>
            <input placeholder="solution" type="text" onChange={(event) => {setNewSolution(event.target.value)}}/>
            {/*<input placeholder="base64" type="text" onChange={(event) => {setNewBase64(event.target.value)}}/>*/}
            {/*<input placeholder="scenes" type="text" onChange={(event) => {setNewScenes(event.target.value)}}/>*/}
            <input placeholder="type" type="text" onChange={(event) => {setNewType(event.target.value)}}/>
            {/*<button onClick={createTask}>Create task</button>*/}
            <button onClick={createTask2}>Create task2</button>
            <button onClick={setScene}>сохранить сцену</button>
            <button onClick={Test}>Test</button>
            {/*<button onClick={saveGgbFile}>save</button>*/}
            {/*{tasks.map((task) => {
                return (
                    <div className="mt-5">
                        {" "}
                        <h1> ID: {task.id} </h1>
                        <h1> Title: {task.title} </h1>
                        <h1> Description: {task.description} </h1>
                    </div>
                );
            })}*/}
            {/*<div>
                { userDataArray.map((userData) => userData.id) }
            </div>*/}

        </div>
    );
};

export default CreateTask;