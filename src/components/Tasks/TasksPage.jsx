import React from 'react';
import {Container, Row} from "react-bootstrap";
import './TasksPage.css';
import TaskCard from "./TaskCard/TaskCard";
import {useEffect, useState} from "react";
import {collection, getDocs, onSnapshot, Timestamp} from "firebase/firestore";
import {db} from "../../firebase-config";


const TasksPage = () => {
    const tasksCollectionRef = collection(db, 'tasks')

    const [tasksList, setTasksList] = useState([{name: "Загрузка...."}])
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [solution, setSolution] = useState("")
    const [base64, setBase64] = useState("")
    const [scenes, setScenes] = useState("")
    const [type, setType] = useState("")
    const [date , setDate] = useState('')

    useEffect(() => {
        const getTasks = async () => {
            const data = await getDocs(tasksCollectionRef);
            setTasksList(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        }

        getTasks();
    }, [])

    /*useEffect(
        () =>
            onSnapshot(collection(db, 'tasks'), (snapshot) =>
            setTasksList(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
            ),
        []
    );*/

    return (
        <div>
            <div className="tasks__wrapper bg-img bg-light shadow">

                <Container className="py-5 text-center border-bottom">
                    <div className="row py-lg-5">
                        <div className="col-lg-6 col-md-8 mx-auto mt-5">
                            <h1 className="fw-bolder">Задачи</h1>
                            <p className="lead text-muted">На данной страницы вы можете посмотреть все доступные задачи на геометрические построения ограниченными средствами.</p>
                        </div>
                    </div>
                </Container>

            </div>



                        <Container className="d-flex flex-wrap justify-content-center">
                                {/*<Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">*/}
                            {
                                tasksList.map((task) => {
                                    return (
                                    <TaskCard
                                        title={ task.title }
                                        description={ task.description }
                                        type={ task.type }
                                    />
                                    )
                                })
                            }
                        </Container>

        </div>
    );
};

export default TasksPage;