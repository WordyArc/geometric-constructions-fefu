import React from 'react';
import {Card, Col, Button} from "react-bootstrap";
import './TaskCard.css'
import {TASK_ROUTE} from "../../../utils/consts";


const TaskCard = (props) => {


    // const rendrCard = (card, index) => {
    //     return(
    //
    //     )
    // }

    return (
            <Card className="task-card shadow-sm col-12 col-sm-7 col-md-5 col-lg-3 mx-3 my-5">
                <svg className="bd-placeholder-img card-img-top" width="100%" height="225"
                     xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail"
                     preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c"></rect>
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                </svg>

                <Card.Body>
                    <Card.Title> {props.title} </Card.Title>
                    <Card.Text> {props.description} </Card.Text>
                    <Card.Subtitle> {props.type} </Card.Subtitle>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                        <div className="btn-group">
                            <Button href={props.link} variant="outline-secondary"
                                    className="btn-sm">Посмотреть</Button>
                            <Button disabled variant="outline-secondary"
                                    className="btn-sm">Редактировать</Button>
                        </div>
                        <small className="text-muted">9 mins</small>
                    </div>
                </Card.Body>
            </Card>
    );
};

export default TaskCard;