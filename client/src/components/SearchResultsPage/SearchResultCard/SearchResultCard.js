import React, { Component } from 'react';
import './SearchResultCard.css';
import { Link } from 'react-router-dom'
import { Card, Button, CardTitle, CardText, CardSubtitle, CardBody, CardImg, CardLink } from 'reactstrap';

class SearchResultCard extends Component {

    constructor(props) {
        super(props)

        this.state = {
            me: ''
        }
    }

    handleClick = () => {
        
    }

    render() {
        return (
            <div className="searchResultCardContainer">
            
                <Card body>
                    <div className="leftSide">
                    {console.log(this.props.item.thumbnail, 'thumb')}
                    {(this.props.item.thumbnail !== "") ? (<img className="resultImg" width="100%" src={this.props.thumbnail} alt="Card tutorial cap"/>) : (<img className="resultImg" width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap"/>)}
                    <CardBody>
                        <CardTitle>{this.props.item.title}</CardTitle>
                        <CardSubtitle>Author: {this.props.item.author}</CardSubtitle>
                        <CardLink className="platformName">Platform: Udemy</CardLink>
                    </CardBody>  
                    
                    <CardBody className="leftRightSide">
                        <CardText>Score - {this.props.item.currentScore}</CardText>
                        <CardLink tag={Link} onClick={() => this.props.setIndex(this.props.item)} to={`/review/${this.props.item._id}`}>View Details</CardLink>
                    </CardBody>
                    </div>
                </Card>
            </div>
        )
    }
}

export default SearchResultCard