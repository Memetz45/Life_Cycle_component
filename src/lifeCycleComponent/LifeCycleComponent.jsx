import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Button, InputGroup, Form, Container } from "react-bootstrap";
import BasicExample from "./Cards";


class LifeCycle extends Component {
    state = {
        post: []
    }
    componentDidMount() {
        fetch('https://newsapi.org/v2/everything?apiKey=e78496aa34f54687b5fb824a75ebf5d3&q=persib')
            .then(res => res.json())
            .then(res => {
                console.log(res);
                this.setState({
                    post: res.articles
                })
            });
    }
    render() {
        console.log('render');
        return (
            <Container>
                <Row className="mt-5">
                    <Col>
                        <h1 className="text-center">EduNews @Slamet Nurhidayat</h1>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col md="7">
                        <InputGroup className="mb-3">
                            <Form.Control
                                className="input-keyword"
                                type="text"
                                placeholder="Cari Tokoh, Topik, atau Peristiwa"
                                aria-label="Recipient's username"
                                aria-describedby="button-addon2"
                            />
                            <Button className="btn btn-primary" id="button">
                                Search
                            </Button>
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    {
                        this.state.post.map((post, index) => {
                            return <BasicExample
                                key={index}
                                title={post.title}
                                author={post.author}
                                publish={post.publishedAt}
                                text={post.description}
                                image={post.urlToImage}
                                link={post.url} />
                        })
                    }
                </Row>
            </Container>
        )
    }
}

export default LifeCycle;