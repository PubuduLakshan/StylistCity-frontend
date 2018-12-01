import React, { Component } from 'react';
//import { Link } from "react-router-dom";
import {Jumbotron,Grid,Image,MenuItem,Row,Col,Button,SplitButton } from "react-bootstrap";
import "./Home.css";


export default class Home extends Component {
  render() {
    return (
      <div>
        
        <Image src = "assets/home/homeImg1.jpg" className="img-fluid" alt="Responsive image"/>
        
     
      <Grid>
      
        <Jumbotron fluid>
          
          <h1 className="welcome">Welcome to Stylist City</h1>
          <h3 className="subwelcome">Best Place-Best Stylist</h3>
         
        </Jumbotron>
        
        <Row className="show-grid" pullRight>
          <Col xs={4} md={2}>
          <SplitButton title="Dropdown right" pullRight id="split-button-pull-right">
            <MenuItem eventKey="1">Action</MenuItem>
            <MenuItem eventKey="2">Another action</MenuItem>
            <MenuItem eventKey="3">Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4">Separated link</MenuItem>
          </SplitButton>
          </Col>
          <Col xs={4} md={2}>
          <SplitButton title="Dropdown right" pullRight id="split-button-pull-right">
            <MenuItem eventKey="1">Action</MenuItem>
            <MenuItem eventKey="2">Another action</MenuItem>
            <MenuItem eventKey="3">Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4">Separated link</MenuItem>
          </SplitButton>
          </Col>
          <Col xs={4} md={2}>
          <SplitButton title="Dropdown right" pullRight id="split-button-pull-right">
            <MenuItem eventKey="1">Action</MenuItem>
            <MenuItem eventKey="2">Another action</MenuItem>
            <MenuItem eventKey="3">Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4">Separated link</MenuItem>
          </SplitButton>
          </Col>
          <Col xs={4} md={2}>
          <SplitButton title="Dropdown right" pullRight id="split-button-pull-right">
            <MenuItem eventKey="1">Action</MenuItem>
            <MenuItem eventKey="2">Another action</MenuItem>
            <MenuItem eventKey="3">Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4">Separated link</MenuItem>
          </SplitButton>
          </Col>
          <Col xsHidden md={2}>
            <Button>Default</Button>
          </Col>
        </Row>
        
      </Grid>
      </div>
    )
  }
}

