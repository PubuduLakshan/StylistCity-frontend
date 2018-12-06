import React, { Component } from 'react';
//import {Image,Button,Row} from 'react-bootstrap';

import {Row,Image,Col} from "react-bootstrap";
import './searchProfCard.css';

export default class SearchProfCard extends Component {
  render() {
    return (
        <Grid>
        <Row>  
            <Col md={2}>               
            <div className="image_inner_container">
                <Image src="assets/home/homeImg1.jpg" />
            </div>
            </Col > 
            <Col md={3}> 
            <div>
                <h3>{this.props.stylist.firstName} {this.props.stylist.lastName}</h3>
            </div >
            </Col> 
            <Col md={3}>
            <div>

            </div>
            </Col>                  
           
        </Row>    
	    </Grid>
    )}
  
}
