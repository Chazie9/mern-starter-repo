import React, { Component } from 'react';
import { Button, Input, Form, FormText, FormGroup, Label, CardTitle} from 'reactstrap';
import './SubmitTutorial.css';

class SubmitTutorial extends Component {
    constructor(props) {
      super(props);
      this.state = {
        value: '',
        value2: ''
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleChange2 = this.handleChange2.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.validateFields = this.validateFields.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
    handleChange2(event) {
        this.setState({value2: event.target.value});
      }
  
    handleSubmit(event) {
      console.log('memem')
      //event.preventDefault();

      this.validateFields();
    }

    validateFields() {
        let pJson = this.state.value;
        let link = this.state.value2
        // if(pJson === undefined || link === undefined) {
        //     return alert("is you cant leave something blank!")
        // }


        // pJson tests
        console.log('i am json!!!')
        let splitJson = pJson.split('')
        if(splitJson.length < 120) {
            this.setState({
                value: ''
            })
            return alert("is that actually a package.json?")
        }

         // link tests
         if(link.length < 10 ) {
            this.setState({
                value2: ''
            })
            return alert("is that really a link?")
        }

        this.props.showTheResults(this.state.value, this.state.value2)
    }
  
render() {
      return (
        <div className="main-tut-submit">
        <Form >
            <FormGroup>
                <CardTitle color="muted">
                    Check to see if a tutorial is current by entering its dependencies below:
                </CardTitle>
            </FormGroup>
            <FormGroup>
                <Label for="tutorialLink">Tutorial Link</Label>
                <Input value={this.state.value2} onChange={this.handleChange2} type="text" id="tutorialLink"  placeholder="Please enter a link to the tutorial" />
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


