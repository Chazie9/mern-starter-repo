import React from 'react'
import Component from './Component'
import SubmitTutorial from './SubmitTutorial/SubmitTutorial.jsx';
import Results from './Results/Results.jsx';
import About from './About/About';
import CollectMoreInfo from './CollectMoreInfo/CollectMoreInfo.jsx';
import { BrowserRouter as Router, Route, Link, Switch, Redirect, BrowserRouter } from 'react-router-dom'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav, 
  NavItem, 
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showResults: false,
      theScore: '',
      name: '',
      author: '',
      gitUrl: '',
      techStack: [],
      askQuestions: true,
      isOpen: false
    }
    //this.showTheResults = this.showTheResults.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  makeScore = (data) => {
    console.log(data, 'the data is here!!')
    this.setState({ 
      theScore: data.score, 
      name: data.name, 
      author: data.author, 
      gitUrl: data.gitUrl,
      techStack: data.scoreDetails,
      showResults: !this.state.showResults, 
      askQuestions: !this.state.askQuestions
    })
  }

  showTheResults = (tutInfo) => {
    console.log('showing', tutInfo)

    let tutorial = {dependenicy: tutInfo}
    getScore('http://34.227.176.215:3000/api/computeScore', tutorial)
    //getScore('http://localhost:3000/api/computeScore', tutorial)
    .then(data => this.makeScore(data))
    .catch(error => console.error(error))

    let theScore;

    function getScore(url, data) {
        return fetch(url, {
            body: JSON.stringify(data),
            headers: {
            'user-agent': 'Mozilla/4.0 MDN Example',
            'content-type': 'application/json'
            },
            method: 'PUT',
            mode: 'cors',
        })
        .then(response => { return response.json() })  
      }
  }
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  render () {
    const showResults = this.state.showResults
    const askQuestions = this.state.askQuestions
    return (<BrowserRouter>
      <div className="container"> 
              {/* <h1>Is it current?</h1> */}
              <div className="theNavBar">   
                    <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Is It Current?</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>  
                        <NavItem>
                            <NavLink tag={Link} to="#">Top Scores</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/about">About</NavLink>
                        </NavItem>
                        </Nav>
                    </Collapse>
                    </Navbar>
                </div>
                <Switch>
                  <Route path="/about" render={(props) => <About goTo={this.goTo.bind(this)} {...props} />} />
                  {/* <Route path="/sargent" render={(props) => <Sargent goTo={this.goTo.bind(this)} {...props} />} /> */}
              </Switch>
              

              <div>
                {showResults ? (
                  askQuestions ? (
                    <CollectMoreInfo />
                  ) : (                  
                    <Results author={this.state.author} title={this.state.name} gitUrl={this.state.gitUrl} theScore={this.state.theScore} techStack={this.state.techStack}/>
                  )
                ) : (                  
                  <SubmitTutorial showTheResults={this.showTheResults}/>
                )}
              </div>
            </div>
          </BrowserRouter>);
  }
}

export default App