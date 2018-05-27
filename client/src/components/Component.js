import React from 'react';
import { Button, Input, Form, FormText, FormGroup, Label } from 'reactstrap';

const Component = (props) => {

  return (<div>
              <Form>
                <FormGroup>
                  <FormText color="muted">
                    Please enter the dependecies below:
                  </FormText>
                  <Input type="textarea" name="text" id="exampleText" />
                </FormGroup>
                <br/>
                <Button>Submit</Button>
              </Form>
          </div>)
}



export default Component;