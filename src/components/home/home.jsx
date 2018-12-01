import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {Jumbotron,Grid,Row,Col,Image,Button} from "react-bootstrap";
import "./Home.css";


export default class Home extends Component {
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h1>Welcome to Stylist City</h1>
          <p>Best place-Best Stylists</p>
        </Jumbotron>
      </Grid>
    )
  }
}

