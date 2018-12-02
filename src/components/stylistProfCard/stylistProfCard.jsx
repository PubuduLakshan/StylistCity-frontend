import React, { Component } from 'react';
import {Image,Button} from 'react-bootstrap';
import "./stylistProfCard.css";
export default class stylistProfView extends Component {
  render() {
    return (
        <div className="card hovercard">
                <div className="cardheader">
                    
                </div>
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
                <div className="bottom">
                    <Button bsStyle = "default">Book Now!</Button>
                </div>
                
            </div>

    )
  }
}
