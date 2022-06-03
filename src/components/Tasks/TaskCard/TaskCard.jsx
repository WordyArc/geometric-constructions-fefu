import React from 'react';
import {Card, Col, Button} from "react-bootstrap";
import './TaskCard.css'


const TaskCard = () => {
    return (
        <Col>
            <Card className="shadow-sm">
                <svg className="bd-placeholder-img card-img-top" width="100%" height="225"
                     xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail"
                     preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c"></rect>
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                </svg>

                <Card.Body>
                    <Card.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos distinctio facilis harum in ipsa labore, modi optio pariatur ratione.
                        Ab cumque dolore eius et facilis laudantium necessitatibus officiis perspiciatis quas!
                    </Card.Text>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <Button href="/Task" variant="outline-secondary" className="btn-sm">Посмотреть</Button>
                            <Button disabled variant="outline-secondary"  className="btn-sm">Редактировать</Button>
                        </div>
                        <small className="text-muted">9 mins</small>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default TaskCard;