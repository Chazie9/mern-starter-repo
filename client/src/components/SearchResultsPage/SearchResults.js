import React, { Component } from 'react';
import SearchResultCard from './SearchResultCard/SearchResultCard';
import { Card, Button, CardTitle, CardText, CardSubtitle, CardBody, CardImg, CardLink, Link, Form, FormGroup, Label, Input, FormText, CustomInput } from 'reactstrap';
import './SearchResults.css';

class SearchResults extends Component {

    constructor(props){
        super(props)

        this.state = {
            searchResults: [],
            filtersApplied: []
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
        this.setState({
            searchResults: apiResults
        })
    }
    

    render() {
        let colors = ["warning", "primary", "success", "info", "danger"]
        return (
            <div className="SearchResultsContainer">
                <div className="SearchResultsFilterOptions">
                       <div className="headerBar">
                            <Card>
                                show the current applied filter options here
                            </Card>
                        </div>
                </div>

                <div className="theLeft">
                    <div className="SearchResultsLeftSide">

                        <Form>
                            <FormGroup tag="fieldset">
                            <legend>Radio Buttons</legend>
                            <FormGroup check>
                                <Label check>
                                <Input type="checkbox" />{' '}
                                Check me out
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <CustomInput type="checkbox" id="exampleCustomCheckbox" label="this custom checkbox" />
                            </FormGroup>
                            <FormGroup check disabled>
                                <Label check>
                                <Input type="checkbox" />{' '}
                                Check me out
                                </Label>
                            </FormGroup>
                            </FormGroup>

                            <FormGroup tag="fieldset">
                            <legend>Radio Buttons</legend>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" />{' '}
                                    Check me out
                                </Label>
                                <Label check>
                                    <Input type="checkbox" />{' '}
                                    Check me out
                                </Label>
                                <Label check>
                                    <Input type="checkbox" />{' '}
                                    Check me out
                                </Label>
                                <Label check>
                                    <Input type="checkbox" />{' '}
                                    Check me out
                                </Label>
                                <Label check>
                                    <Input type="checkbox" />{' '}
                                    Check me out
                                </Label>
                            </FormGroup>
                            </FormGroup>
                            
                            <FormGroup>
                            <legend>Radio Buttons</legend>
                            {/* <Label for="exampleCheckbox">Checkboxes</Label> */}
                            <div>
                              <CustomInput type="checkbox" id="exampleCustomCheckbox" label="Check this custom checkbox" />
                              <CustomInput type="checkbox" id="exampleCustomCheckbox2" label="Or this one" />
                              <CustomInput type="checkbox" id="exampleCustomCheckbox3" label="But not this disabled one" disabled />
                            </div>
                          </FormGroup>
                            <Button>Submit</Button>
                        </Form>
                    </div>
                    <div className="SearchResultsMain">
                        {this.state.searchResults.map((item, i) => {
                            let count = 5 % (i+1);
                            if(count == NaN) {
                                count = 3;
                            }
                            console.log(count)
                            return <SearchResultCard color={colors[count]} item={item} key={i} />
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchResults;