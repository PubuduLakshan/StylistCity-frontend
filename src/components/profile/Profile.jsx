import React, { Component } from 'react'
import './profile.css';
import {Grid,Image,Row,Col,Button,Jumbotron} from "react-bootstrap";
import Calendar from 'react-calendar';
 
//import { Button } from 'antd/lib/radio';

export default class Profile extends Component {
  render() {
    return (
     <div>
        <Image src = "assets/home/homeImg1.jpg" className="img-fluid" alt="Responsive image" />
        <Jumbotron className="profilejumbo"></Jumbotron>
        
          <Grid>
            <Row className="profileHead">
              <Col md={4}>
              <div className="profileImage">
              <div className="avatar">
              <Image alt="" src="assets/profile/1.jpg"/>
              </div>
              </div>
              </Col>

              <Col md={4}>
              <div className="profileName">
              <h1>Name</h1>
              </div>
              </Col>
              <Col md ={4}>
              <div className="profileBook">
              <Button bsSize="large" bsStyle="success">Book Now</Button>
              </div>
              </Col>
           
            </Row>
              <Col md={6}>
              <div className="information">
              <h3>Information</h3>
              <hr />
              
              <Col md={3}>
              <h4>Category:</h4>
              <h4>Location:</h4>
              <h4>Gender:</h4>
              <h4>Skill Level:</h4>
              <h4>Qualifications:</h4>
              </Col>
              
              <Col md={3}>
              <p></p>
              </Col>

              </div>
              
              </Col>
              <Col md={6}>
              <h3>Availability</h3>
              <hr />
              <div className="calenderView">
              <Calendar/>
              </div>
              </Col>
              <h3>My Works</h3>
              <hr />
          </Grid>  
     </div>
    )
  }
}
