import React from 'react'
import Component from './Component'
import SubmitTutorial from './SubmitTutorial/SubmitTutorial.jsx';
import Results from './Results/Results.jsx';
import CollectMoreInfo from './CollectMoreInfo/CollectMoreInfo.jsx';
import { BrowserRouter as Router, Route, Link, Switch, Redirect, BrowserRouter } from 'react-router-dom'

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
      askQuestions: true
    }
    //this.showTheResults = this.showTheResults.bind(this);
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

  render () {
    const showResults = this.state.showResults
    const askQuestions = this.state.askQuestions
    return (<div className="container"> 
              <h1>Is it current?</h1>
              {/* <Component /> */}
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
              
            </div>);
  }
}

export default App