import React, { Component } from 'react'
import StackDetails from '../StackDetails/StackDetails';
import { Input, Container, Row, Col, Button, Nav, NavItem, NavLink } from 'reactstrap'
import './Results.css';

class Results extends Component {

    constructor(props) {
        super(props)

        this.state = {
            me: ''
        }
    }

    render () {
        return (
            <Container >
                <Row>
                    <Col lg="8">
                        <div className="overView">  
                                <div className="scoreContainer">
                                    <div className="score">
                                        Yes! | Score - {this.props.theScore}
                                    </div>
                                </div>
                                <div className="title">
                                    Course Title - {this.props.title}
                                </div>
                                <div className="author">
                                    {console.log(this.props.author, 'the author is ....')}
                                    Author: {(this.props.author[0] === "") ? (<Input placeholder="Please enter the author"/>) : (this.props.author)}
                                </div>
                                {/* <div className="techstack">
                                    Tech Stack (23) - click to see tech used
                                    {this.props.techStack.length}
                                </div> */}
                                {/* <div className="thumbnail">
                                        thumbnail
                                    </div> */}
                                <Row>
                                    <div className="threeParts">
                                    <Col lg="4">
                                        <div className="techstack">
                                            Tech Used - { this.props.techStack.length}
                                            {/* {this.props.techStack.map((item) => {
                                                return (
                                                    <div>
                                                        {this.props.techStack}
                                                    </div>
                                                )
                                            })} */}
                                        </div>
                                    </Col>
                                    <Col lg="4">
                                        <div className="linktocourse">
                                            <Button className="primary"> Link to Course </Button>
                                            {/* <Input /> */}
                                        </div>
                                    </Col>
                                    <Col lg="4">
                                        <div className="github">
                                            <Nav>
                                                <NavItem>
                                                    <NavLink href={this.props.gitUrl}>Github Link</NavLink>
                                                </NavItem>   
                                            </Nav>               
                                        </div>
                                    </Col>
                                    </div>
                                </Row>
                            </div>
                        </Col>
                        
                        <Col lg="4">
                            <div className="sidebar">
                                What details should I put on the side bar?console
                            </div>
                        </Col>
                    </Row>
                <Row>
                    <Col md="12">
                        <div className="details">
                            <StackDetails techStack={this.props.techStack}/>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Results;

