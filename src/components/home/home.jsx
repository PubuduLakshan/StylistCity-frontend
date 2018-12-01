import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {Jumbotron,Grid,Button} from "react-bootstrap";
import "./Home.css";


export default class Home extends Component {
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h1>Welcome to Stylist City</h1>
          <h3>Best place-Best Stylists</h3>
        </Jumbotron>
        <Link to="/search">
        <Button bsStyle='primary'> Search</Button>
        </Link>
      </Grid>
    )
  }
}

