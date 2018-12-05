import React, { Component } from 'react'
import './profile.css';
import {Grid,Image,Row,Col,Button,Jumbotron} from "react-bootstrap";
import Calendar from 'react-calendar';
import axios from 'axios';
 
//import { Button } from 'antd/lib/radio';

export default class Profile extends Component {
  constructor(){
    super();
    this.state={profiledata:{}}
  }
  componentDidMount(){
    axios.get('http://localhost:8000/profile/' + this.props.match.params.id, {
    })
    .then((response) => {
     console.log(response.data);
     this.setState({profiledata:response.data})
     })
   .catch(function (error) {
    console.log(error);
     });
     return
    
  }
  render() {
    
    var profiledata  = this.state.profiledata;
   
    
    
    console.log(profiledata);
    
    
    return (
     <div>
        <Image src = "assets/home/homeImg1.jpg" className="img-fluid" alt="Responsive image" />
        <Jumbotron className="profilejumbo"></Jumbotron>
        
          <Grid>
            <Row className="profileHead">
              <Col md={4}>
              <div className="profileImage">
              <div className="avatar">
              <Image alt="" src={`assets/profile/1.jpg`}/>
              </div>
              </div>
              </Col>

              <Col md={4}>
              <div className="profileName">
              <h1>{profiledata.firstName} {profiledata.lastName} </h1>
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
              <h4>{profiledata.type} </h4>
              <h4>{profiledata.city} </h4>
              <h4>{profiledata.gender} </h4>
              <h4>{profiledata.type} </h4>
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
              <Row></Row>
              <h3>Reviews</h3>
              <hr />
              
          </Grid>  
     </div>
    )
  }
}
