import React, { Component } from 'react';
import './TutorialDetails.css';
import Results from '../Results/Results.jsx';
import { Collapse, Card, CardBody, Input, Container, Row, Col, Button, Nav, NavItem, NavLink, Badge, FormGroup, Label, CustomInput } from 'reactstrap'
import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import StackDetails from '../StackDetails/StackDetails';


class TutorialDetails extends Component {

    constructor(props) {
        super(props)

        this.state = {
            tutorialInfo: {},
            theScore: '', 
            name: '', 
            author: '', 
            gitUrl: '',
            techStack: [],
            tutorialLink: '',
            pass: 0,
            fail: 0,
            collapse: false,
            collapse1: false,
            collapse2: false,
            collapse3: false,
            id: ''
        }

        this.toggle = this.toggle.bind(this);
        this.toggle1 = this.toggle1.bind(this);
        this.toggle2 = this.toggle2.bind(this);
        this.toggle3 = this.toggle3.bind(this);
    }

    

    componentDidMount() {
        let tutorialId = this.props.match.params.title
        getTutorialReview(`/api/review/${tutorialId}`)
        .then(data => this.setResults(data))
        .catch(error => { if(error) {this.displayError()} })
    
        function getTutorialReview(url) {
            return fetch(url, {
                headers: {
                'user-agent': 'Mozilla/4.0 MDN Example',
                'content-type': 'application/json'
                },
                mode: 'cors',
            })
            .then(response => { return response.json() })
        }
    }

    setResults = (data) => {
        let failCount = 0;
        let passCount = 0;
        console.log(data, 'the api results')
        data[0].techStack.forEach((item) => {
            if(item[3] === 'Fail') {
                failCount++
            } else if(item[3] === 'Pass') {
                passCount++
            }
        })
        this.setState({ 
          theScore: data[0].currentScore, 
          name: data[0].title, 
          author: data[0].author, 
          gitUrl: data[0].githubUrl,
          techStack: data[0].techStack,
          tutorialLink: data[0].courseUrl,
          pass: passCount,
          fail: failCount,
          id: data[0]._id
        })
    }
    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }
    toggle1() {
        this.setState({ collapse1: !this.state.collapse1 });
    }
    toggle2() {
        this.setState({ collapse2: !this.state.collapse2 });
    }
    toggle3() {
        this.setState({ collapse3: !this.state.collapse3 });
    }
    

    render() {
        
        return (
            <div className="tutorialDetailsContainer">
                <Container >
                    <Row>
                        <Col md="8">
                            <div className="overView">  
                                    <div className="scoreContainer">
                                    {console.log(this.props, 'the resulting props')}
                                        <div className="score">
                                            Yes! | Score - {(this.state.theScore !== undefined) ? (this.state.theScore) : ('N/A')}
                                        </div>
                                    </div>
                                    <div className="title">
                                        Course Title - {this.state.name}
                                    </div>
                                    <div className="author">
                                    
                                        Author: {(this.state.author === "") ? (<Input placeholder="Please enter the author"/>) : (this.state.author)}
                                    
                                        {/* Author: {(this.props.item.author === "" || this.props.item.author === undefined) ? (<Input placeholder="Please enter the author"/>) : (this.props.item.author)} */}
                                    </div>
                                    <div className="techstack author">
                                        {/* Technologies used: {(this.props.item.techStack !== undefined) ? (this.props.item.techStack.length) : (0)} */}
                                    </div>
                                    

                                    ===========================================================
                                    

                                    <Row>
                                        <div className="threeParts">
                                            <Card>

                

                                                <div id="overview-wegot-review" className="overviewWegotReview">
                                                    <div className="overviewWegotDetailsBox Pass">
                                                    <div className="overviewWegotRatingDetails">{(this.state.pass !== undefined) ? (this.state.pass) : (0)}</div>
                                                    <span className="overviewWegotDetailsSubtitle">Pass</span>
                                                    </div>
                                                    <div className="overviewWegotDetailsBox overviewWegotMidbox Fail">
                                                    <div className="overviewWegotRatingDetails">{(this.state.fail !== undefined) ? (this.state.fail) : (0)}</div>
                                                    <span className="overviewWegotDetailsSubtitle">Fail</span>
                                                    </div>
                                                    <div className="overviewWegotDetailsBox">
                                                    <div className="overviewWegotRatingDetails">{this.state.theScore}</div>
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
                                                        <NavLink href={this.state.gitUrl}>Check out this project on Github</NavLink>
                                                        <NavLink href="#">Sign-up for future discounts on this course</NavLink>
                                                        <NavLink href={this.state.tutorialLink}>Check out the tutorial's homepage</NavLink>
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
                                    Technology Used
                                    <div>
                                    {(this.state.techStack !== undefined) ? (
                                        this.state.techStack.map((tech, i) => {
                                            return (             
                                                <Badge key={i} href="#" >{tech[0]}</Badge>
                                            )
                                        })) : (<div> </div>)}
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    {/* <Row>
                        <div className="buttonIdeaHolder">
                               
                    </Row>
                     <div>
                        <Navbar color="light" light expand="md">
                        <NavbarBrand href="/">reactstrap</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                            <NavItem>
                                {console.log(this.state.id, 'the id is')}
                                <NavLink tag={Link} to={`${this.state.id}`}>Version Details</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/components/">Reviews</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/components/">Topics Taught</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/components/">About the Author</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/components/">Technology Used</NavLink>
                            </NavItem>
                            </Nav>
                        </Collapse>
                        </Navbar>
                    </div> */}
                </Container>
                <Container>
                <Row>         
                <Col md="8">  
                
                <div className="tutorialInfo" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Score Details</div>
                        <Collapse isOpen={this.state.collapse}>
                        <Card>
                            <CardBody>
                            <Col md="12">
                                <div className="details">
                                    <StackDetails techStack={this.state.techStack}/>
                                </div>
                            </Col>
                        </CardBody>
                        </Card>
                        </Collapse>     
                         
                
                    <div className="tutorialInfo" onClick={this.toggle1} style={{ marginBottom: '1rem' }}>Reviews</div>
                        <Collapse isOpen={this.state.collapse1}>
                        <Card>
                            <CardBody>
                            <Col md="8">
                                <div className="details">
                                    
                                Coming soon....
                                </div>
                            </Col>
                        </CardBody>
                        </Card>
                        </Collapse>      

                    <div className="tutorialInfo" onClick={this.toggle2} style={{ marginBottom: '1rem' }}>Topics Taught</div>
                        <Collapse isOpen={this.state.collapse2}>
                        <Card>
                            <CardBody>
                            <Col md="8">
                                <div className="details">
                                    
                                Coming soon....
                                </div>
                            </Col>
                        </CardBody>
                        </Card>
                        </Collapse>        
                    <div className="tutorialInfo" onClick={this.toggle3} style={{ marginBottom: '1rem' }}>About the Author</div>
                        <Collapse isOpen={this.state.collapse3}>
                        <Card>
                            <CardBody>
                            <Col md="8">
                                <div className="details">
                                    
                                    Coming soon....
                                </div>
                            </Col>
                        </CardBody>
                        </Card>
                        </Collapse>    
                           
                
                </Col>
                
                </Row>
                </Container>
            </div>
        )
    }
}

export default TutorialDetails;
