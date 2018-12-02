import React, { Component } from 'react';
import {Image,Button,Row} from 'react-bootstrap';
import './searchProfCard.css';


export default class SearchProfCard extends Component {
  render() {
    return (
        <div className="card hovercard">
            <Row>
            <div className="avatar">
                <Image alt="" src="assets/profile/profile1.jpg"/>
            </div>
            <div className="info">
                <div className="title">
                    <h3>Mohommad Salah</h3>
                </div>
                <div className="desc">Stylist</div>
                <div className="desc">Curious developer</div>
                <div className="desc">Tech geek</div>
            </div>
            <div className="bottom" style={{marginBottom: 10}}>
                <Button bsStyle = "default">Book Now!</Button>
            </div>
            </Row>
        
        </div>
    )
  }
}
