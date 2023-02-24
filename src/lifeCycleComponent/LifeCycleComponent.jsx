import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Button, InputGroup, Form, Container } from "react-bootstrap";
import BasicExample from "./Cards";


class LifeCycle extends Component {
    state = {
        errorMessage:'',
        post: []
    }
    componentDidMount() {

    }
    changeNews = () => {
        const inputKeyword = document.querySelector('.input-keyword');
        fetch('https://newsapi.org/v2/everything?apiKey=e78496aa34f54687b5fb824a75ebf5d3&q=' + inputKeyword.value)
            .then(res => res.json())
            .then(res => {
                console.log(res);
                if(res.totalResults>0){
                    this.setState({
                        post: res.articles
                    })
                }else{
                    this.setState({
                        errorMessage: this.state.errorMessage = 'Data Tidak Ditemukan....'
                    })
                }
            });
    }
    // onKeyUp(event){
    //     if(event.charCode === 13){
    //         this.changeNews
    //     }
    // }
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
                                // onKeyUp={this.onKeyUp}
                            />
                            <Button className="btn btn-primary" id="button" onClick={this.changeNews}>
                                Search
                            </Button>
                        </InputGroup>
                    </Col>
                    <h1></h1>
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
                    <h1 className="text-center">{this.state.errorMessage}</h1>
                </Row>
            </Container>
        )
    }
}

export default LifeCycle;