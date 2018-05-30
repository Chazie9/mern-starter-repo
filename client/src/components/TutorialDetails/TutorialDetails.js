import React, { Component } from 'react';
import './TutorialDetails.css';
import Results from '../Results/Results.jsx';


class TutorialDetails extends Component {

    constructor(props) {
        super(props)

        this.state = {
            tutorialInfo: {}
        }
    }

    componentWillMount() {
        let tutorialId = this.props.match.params.title
        getTutorialReview(`http://localhost:3000/review/${tutorialId}`)
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

    setResults = (apiResults) => {
        console.log(apiResults, 'the api results')
        this.setState({
            tutorialInfo: apiResults[0]
        })
    }

    render() {
        
        return (
            <div className="tutorialDetailsContainer">
                These are the details of the tutorial
                {/* {console.log(this.state.tutorialInfo, 'the tuts info')} */}
                {/* <Results tutorialLink={this.state.tutorialInfo.courseUrl}  author={this.state.tutorialInfo.author} title={this.state.tutorialInfo.title} gitUrl={this.state.tutorialInfo.gitUrl} theScore={this.state.tutorialInfo.currentScore} techStack={this.state.tutorialInfo.techStack} pass={this.state.tutorialInfo.pass} fail={this.state.tutorialInfo.fail}/> */}
                {/* <Results tutorial={this.state.tutorialInfo} /> */}
            </div>
        )
    }
}

export default TutorialDetails;