import React, { Component } from 'react'
import './profile.css';
import {Grid,Row,Col,Button,Jumbotron,ButtonToolbar,ButtonGroup,Image} from "react-bootstrap";
import Calendar from 'react-calendar';
import MyWorks from './myWorks'
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
    console.log(profiledata.Images && profiledata.Images[0]);
    
    

    if(profiledata.Images && profiledata.Images.length > 0){
      
      var ImageLocation=profiledata.Images.map(imageLocation=>{
        console.log(imageLocation.id);
        return(<MyWorks ImageLocationId={imageLocation.id} key={imageLocation.id}/>)

      })
      
      
    }
    
    return (
     <div>
        <Grid>
        <Image src = {`/assets/coverphoto/cover${profiledata.id}.jpg`} className="coverImage" alt="Responsive image" />
        <Jumbotron className="profilejumbo"></Jumbotron>
        
         
            <Row className="profileHead">
              <Col md={4}>
              <div className="profileImage">
                <div className="avatar">
                <img  src={`/assets/profile/${profiledata.id}.jpg`} alt=""/>
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
                <ButtonToolbar>
                    <ButtonGroup bsSize="large">
                      <Button bsStyle="success"><div>FullDay</div><div>${profiledata.charge && profiledata.charge.fullDay}</div></Button>
                      <Button bsStyle="success"><div>Morning</div><div>${profiledata.charge && profiledata.charge.morning}</div></Button>
                      <Button bsStyle="success"><div>Evening</div><div>${profiledata.charge && profiledata.charge.afternoon}</div></Button>
                    </ButtonGroup>
                </ButtonToolbar>
              </div>
              </Col>
           
            </Row>
              <Col md={6}>
              <div className="information">
              <h3>Information</h3>
              <hr />
              
              <Col md={3}>
              <h4>Rating:</h4>
              <h4>Category:</h4>
              <h4>Location:</h4>
              <h4>Gender:</h4>
              <h4>Skill Level:</h4>
              <h4>Qualifications:</h4>
              </Col>
              
              <Col md={3}>
              <h4>{profiledata.ratingstar && profiledata.ratingstar.ratings}</h4>
              <h4>{profiledata.type} </h4>
              <h4>{profiledata.city} </h4>
              <h4>{profiledata.country} </h4>
              <h4>{profiledata.Skills && profiledata.Skills[0].level} </h4>
              <h4>{profiledata.Qualifications && profiledata.Qualifications[0].title},{profiledata.Qualifications && profiledata.Qualifications[0].institute}</h4>
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
              <Row>
              <Col><div className="myworks"> {ImageLocation}</div></Col>

              </Row>
              <h3>About</h3>
              <hr />
              <Row>
              <Col><div className="aboutme"><h6></h6>{profiledata.about} </div></Col>
              </Row>
              
          </Grid>  
     </div>
    )
  }
  }
