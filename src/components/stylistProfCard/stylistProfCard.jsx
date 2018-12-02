import React, { Component } from 'react';
import {Image} from 'react-bootstrap';
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
                        <h3>Script Eden</h3>
                    </div>
                    <div className="desc">Passionate designer</div>
                    <div className="desc">Curious developer</div>
                    <div className="desc">Tech geek</div>
                </div>
                
            </div>

    )
  }
}
