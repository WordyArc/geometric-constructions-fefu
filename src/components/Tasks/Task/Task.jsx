import React, {useEffect} from 'react';
import {Container} from "react-bootstrap";
import './Task.css'

import Geogebra from "../../../scripts/InitGGBApp";
import {useState} from "react";
import InitTask from "../../../scripts/InitTask";
import {collection, doc, getDoc, getDocs, onSnapshot, orderBy, query} from "firebase/firestore";
import {db} from "../../../firebase-config";
import TaskCard from "../TaskCard/TaskCard";



const Task = () => {

    let id = 'zR1eUsCcnv13PvpICK9l'
    const colRef = collection(db, 'tasks')
    const docRef = doc(db, 'tasks', id)
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

    const [taskList, setTaskList] = useState([])
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

    useEffect(() => {
        const getTask = async () => {
            getDoc(docRef)
                .then((doc) => {
                    setTaskList(doc.data())
                })


            //  setTasksList(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        }
        getTask()
    }, [])

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
        <div className="m-auto mt-5 pt-5">
            <div className="container-fluid bg-light align-content-center" id="main-container">
                <div className="row">
                    <div className="col-lg-6">
                        <h1 className="text-center">{ taskList.title }</h1>
                        <InitTask />
                    </div>
                    <div className="col-lg-6" id="task-text">
                        <div className="w-100 text-justify">


                            <h2>Описание задачи</h2>
                            <p>
                                { taskList.description }
                            </p>
                            <hr/>
                                <h2 className="text-center">Решение</h2>
                                <p>
                                    { taskList.solution }
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