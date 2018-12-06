import React, { Component } from 'react';
import {Image,Button} from 'react-bootstrap';
import "./stylistProfCard.css";
import { Link } from 'react-router-dom';
export default class stylistProfView extends Component {
  render() {

    var info = this.props.homeStylist;
    return (
        <div className="card hovercard">
                <div className="cardheader" style={{backgroundImage: `url(/assets/coverphoto/cover${info.id}.jpg)`}}>
                    
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
                 
                    
                <Link to ={`/profile/${info.id}`}><Button>View Profile</Button></Link>

                <Button bsStyle = "success" style={{marginLeft:5}}>Book Now!</Button>
                </div>
                
            </div>

    )
  }
}
