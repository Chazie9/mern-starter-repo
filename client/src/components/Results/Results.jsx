import React, { Component } from 'react'
import StackDetails from '../StackDetails/StackDetails';
import DividerLine from '../DividerLine/DividerLine';
import { Card, Input, Container, Row, Col, Button, Nav, NavItem, NavLink, Badge, FormGroup, Label, CustomInput } from 'reactstrap'
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
                        <Col md="8">
                            <div className="overView">  
                                    <div className="scoreContainer">
                                    {console.log(this.props, 'the resulting props')}
                                        <div className="score">
                                            Yes! | Score - {this.props.theScore}
                                        </div>
                                    </div>
                                    <div className="title">
                                        Course Title - {this.props.title}
                                    </div>
                                    <div className="author">
                                    
                                        {/* Author: {(this.props.author[0] === "") ? (<Input placeholder="Please enter the author"/>) : (this.props.author)} */}
                                    
                                        Author: {(this.props.author === "") ? (<Input placeholder="Please enter the author"/>) : (this.props.author)}
                                    </div>
                                    <div className="techstack author">
                                        Technologies used: {(this.props.techStack !== undefined) ? (this.props.techStack.length) : (0)}
                                    </div>
                                    

                                    ===========================================================
                                    
                                    {/* <div className="thumbnail">
                                            thumbnail
                                        </div> */}
                                    <Row>
                                        <div className="threeParts">
                                            
                                            <Card>

                                                {/* <div id="overview-wegot-review" className="overviewWegotReview">
                                                    <div className="overviewWegotDetailsBox">
                                                    <div className="overviewWegotRatingDetails">2</div>
                                                    <span className="overviewWegotDetailsSubtitle">Major</span>
                                                    </div>
                                                    <div className="overviewWegotDetailsBox overviewWegotMidbox">
                                                    <div className="overviewWegotRatingDetails">4</div>
                                                    <span className="overviewWegotDetailsSubtitle">Minor</span>
                                                    </div>
                                                    <div className="overviewWegotDetailsBox">
                                                    <div className="overviewWegotRatingDetails">{this.props.theScore}</div>
                                                    <span className="overviewWegotDetailsSubtitle">Total Score</span>
                                                    </div>
                                                </div> */}

                                                <div id="overview-wegot-review" className="overviewWegotReview">
                                                    <div className="overviewWegotDetailsBox Pass">
                                                    <div className="overviewWegotRatingDetails">{(this.props.pass !== undefined) ? (this.props.pass.length) : (0)}</div>
                                                    <span className="overviewWegotDetailsSubtitle">Pass</span>
                                                    </div>
                                                    <div className="overviewWegotDetailsBox overviewWegotMidbox Fail">
                                                    <div className="overviewWegotRatingDetails">{(this.props.fail !== undefined) ? (this.props.fail.length) : (0)}</div>
                                                    <span className="overviewWegotDetailsSubtitle">Fail</span>
                                                    </div>
                                                    <div className="overviewWegotDetailsBox">
                                                    <div className="overviewWegotRatingDetails">{this.props.theScore}</div>
                                                    <span className="overviewWegotDetailsSubtitle">Total Score</span>
                                                    </div>
                                                </div>
                                            </Card>
                                        </div>
                                    </Row>
                                    <Row>
                                        <Col md="12">
                                            <div className="github">
                                                <Nav>
                                                    <NavItem>
                                                        <NavLink href={this.props.gitUrl}>Check out this project on Github</NavLink>
                                                        <NavLink href="#">Sign-up for future discounts on this course</NavLink>
                                                        <NavLink href={this.props.tutorialLink}>Check out the tutorial's homepage</NavLink>
                                                    </NavItem>   
                                                </Nav>               
                                            </div>

                                            <div className="linktocourse">
                                                {/* No Link?? - Please submit a link to the course
                                                <Button className="primary"> Link to Course </Button>
                                                <Input /> */}
                                                {/* <FormGroup>
                                                <Label for="exampleCustomFileBrowser">Please submit a link to the course</Label>
                                                <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile" label="Submit" />
                                                </FormGroup> */}
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            
                            <Col md="4">
                                <div className="sidebar">
                                    Most Popular Tech Used
                                    <div>
                                    {(this.props.techStack !== undefined) ? (
                                        this.props.techStack.map((tech, i) => {
                                            return (             
                                                <Badge key={i} href="#" >{tech[0]}</Badge>
                                            )
                                        })) : (<div> </div>)}
                                    </div>
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