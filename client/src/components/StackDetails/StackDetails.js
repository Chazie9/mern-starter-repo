import React, { Component } from 'react';
import { Table } from 'reactstrap';
import './StackDetails.css';

class StackDetails extends Component {

  render() {
    return (
      <Table hover>
        <thead>
          <tr>
            <th>Score</th>
            <th>Libary</th>
            <th>My Version</th>
            <th>Latest Version</th>
          </tr>
        </thead>
        <tbody>

        {(this.props.techStack !== undefined) ? (
            this.props.techStack.map((item, i) => {
                return (
                    <tr key={i}>
                        <th scope="row">{i}</th>
                        <td >{item[0]}</td>
                        <td className={item[3]}>{item[1]}</td>
                        <td className="Pass">{item[2]}</td>
                    </tr>
                )
            })) : (<tr><td></td></tr>)}
            
        {/* {this.props.techStack.map((item, i) => {
                return (
                    <tr key={i}>
                        <th scope="row">{i}</th>
                        <td >{item[0]}</td>
                        <td className={item[3]}>{item[1]}</td>
                        <td className="Pass">{item[2]}</td>
                    </tr>
                )
            })} */}
        </tbody>
      </Table>
    );
  }
}

export default StackDetails;
