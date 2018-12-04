import React, { Component } from 'react';
import {Image,Button} from 'react-bootstrap';
import "./stylistProfCard.css";
export default class stylistProfView extends Component {
  render() {

    var info = this.props.homeStylist;
    return (
        <div className="card hovercard">
                <div className="cardheader">
                    
                </div>
                <div className="avatar">
                    <Image alt="" src={`assets/profile/profile1.jpg`}/>
                </div>
                <div className="info">
                    <div className="title">
                        <h3>{info.firstName} {info.lastName}</h3>
                    </div>
                    <div className="desc">dddd</div>
                    <div className="desc">ddddd</div>
                    
                </div>
                <div className="bottom" style={{marginBottom: 10}}>
                    <Button bsStyle = "default">Book Now!</Button>
                </div>
                
            </div>

    )
  }
}
