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
                    <Image alt="" src={`assets/profile/${info.id}.jpg`}/>
                </div>
                <div className="info">
                    <div className="title">
                        <h3>{info.firstName} {info.lastName}</h3>
                    </div>
                    <div className="desc">{info.type}</div>
                    <div className="desc">{info.city}</div>
                    
                </div>
                <div className="bottom" style={{marginBottom: 10}}>
                <Button bsStyle = "info">View Profile</Button><Button bsStyle = "warning">Book Now!</Button>
                </div>
                
            </div>

    )
  }
}
