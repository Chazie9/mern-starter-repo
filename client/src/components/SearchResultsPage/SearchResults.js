import React, { Component } from 'react';
import SearchResultCard from './SearchResultCard/SearchResultCard';
import { Card, Button, CardTitle, CardText, CardSubtitle, CardBody, CardImg, CardLink, Link, Form, FormGroup, Label, Input, FormText, CustomInput } from 'reactstrap';
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
import './SearchResults.css';
import TutorialDetails from '../TutorialDetails/TutorialDetails';

class SearchResults extends Component {

    constructor(props){
        super(props)

        this.state = {
            searchResults: [],
            filtersApplied: [],
            showDetails: false,
            tutorialIndex: 0,
            sortBy: 'Score',
            sortResultsByScore: []
        }
    }


   
    componentWillMount() {
        //getTopScores('http://34.227.176.215:3000/api/computeScore', tutorial)
        getTopScores('http://localhost:3000/api/getTopScores')
        .then(data => this.setResults(data))
        .catch(error => { if(error) {this.displayError()} })
    
        function getTopScores(url) {
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
        console.log(apiResults)

        // let scoreArray = [];
        // apiResults.forEach((item) => {

        // })

        apiResults.sort(function (a, b) {
            return b.currentScore - a.currentScore;
          });



        this.setState({
            searchResults: apiResults
        })
    }

    setIndex = (index) => {
        this.setState({
            tutorialIndex: index
        })
    }

    handleChange = () => {
        console.log('handling change')
        this.sortResults()
    }

    sortResults = () => {
        let searchResults = this.state.searchResults

        let sorted = searchResults.sort()
        console.log(sorted, 'sorted array')
    }
    

    render() {
        let colors = ["warning", "primary", "success", "info", "danger"]
        const showDetails = this.state.showDetails;
        return (
            <div className="SearchResultsContainer">
                {/* <div className="SearchResultsFilterOptions">
                       <div className="headerBar">
                            <Card>
                                show the current applied filter options here
                            </Card>
                        </div>
                </div> */}

                {/* <div className="theLeft">
                    <div className="SearchResultsLeftSide">
                        <Form> */}
                        {/* <legend>Filter Options</legend> */}
                        {/* <FormGroup>
                            <Label for="exampleSelect">Sort By</Label>
                            <Input onChange={this.handleChange} type="select" name="select" id="exampleSelect">
                                <option>Score</option>
                                <option>Platform</option>
                                <option>Price</option>
                            </Input>
                        </FormGroup> */}

                            {/* <FormGroup tag="fieldset">
                                <Label for="exampleEmail">Technologies</Label>
                                <FormGroup check>
                                    <Label check>
                                    <Input type="checkbox" />{' '}
                                    Check me out
                                    </Label>
                                </FormGroup>
                        
                                <FormGroup check disabled>
                                    <Label check>
                                    <Input type="checkbox" />{' '}
                                    Check me out
                                    </Label>
                                </FormGroup>
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <div>
                                <CustomInput type="checkbox" id="exampleCustomCheckbox" label="Check this custom checkbox" />
                                <CustomInput type="checkbox" id="exampleCustomCheckbox2" label="Or this one" />
                                <CustomInput type="checkbox" id="exampleCustomCheckbox3" label="But not this one" />
                                </div>
                          </FormGroup>
                            <Button>Update</Button> */}
                        {/* </Form> */}
                    {/* </div> */}
                    <div className="SearchResultsMain">
                            {this.state.searchResults.map((item, i) => {
                                let count = 5 % (i+1);
                                if(count == NaN) {
                                    count = 3;
                                }
                                console.log(count)
                                return <SearchResultCard color={colors[count]} setIndex={this.setIndex} item={item} key={i} />
                            })}
                    </div>
                {/* </div> */}

            </div>
        )
    }
}

export default SearchResults;