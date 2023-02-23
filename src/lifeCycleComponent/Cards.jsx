import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';

function BasicExample(props) {
    return (
        <Col md="4" className='my-3'>
            <Card>
                <Card.Img variant="top" src={props.image} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Subtitle mb="2" muted>{props.author} {props.publish}</Card.Subtitle>
                    <Card.Text>
                        {props.text}
                    </Card.Text>
                    <Button variant="primary" href={props.link}>Read More</Button>
                </Card.Body>
            </Card>
        </Col>

    );
}

export default BasicExample;