import React, { Component } from 'react';
import { Button, Input, Form, FormText, FormGroup, Label, CardTitle} from 'reactstrap';
import './SubmitTutorial.css';

class SubmitTutorial extends Component {
    constructor(props) {
      super(props);
      this.state = {
        value: ''
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      console.log('memem')
      //event.preventDefault();

      this.props.showTheResults(this.state.value)
    }
  
render() {
      return (
        <div className="main-tut-submit">
        <Form >
            <FormGroup>
                <CardTitle color="muted">
                    Please enter a link to the tutorial and the dependencies below:
                </CardTitle>
            </FormGroup>
            <FormGroup>
                <Label for="tutorialLink">Tutorial Link</Label>
                <Input type="text" id="tutorialLink"  placeholder="Please enter a link to the tutorial" />
            </FormGroup>
            <FormGroup>
                <Label for="packagejson">Package.json</Label>
                <Input className="insertPackage" type="textarea" id="packagejson"  placeholder="Please enter the tutorial's package.json" value={this.state.value} onChange={this.handleChange} />
            </FormGroup>
            <Button onClick={this.handleSubmit}>Submit</Button>
        </Form>
        </div>
      );
    }
}

export default SubmitTutorial;


