import React, { Component } from 'react';
import {Jumbotron,Grid,Row,Col} from 'react-bootstrap';
import StylistProfCard from "../stylistProfCard/stylistProfCard";
import "./stylistBar.css";

export default class StylistBar extends Component {
  render() {
    return (
      <div className="stylistbar">
        
        <Jumbotron fluid ="true" className="jumboStylebar" >
        <h2 className="membertitle">Members</h2>
        <hr />
          <Grid>
          <Row className="show-grid">
            <Col xs={4} md={3}>
              <StylistProfCard/>
            </Col>
            <Col xs={4} md={3}>
              <StylistProfCard/>
            </Col>
            <Col xs={4} md={3}>
              <StylistProfCard/>
            </Col>
            <Col xsHidden md={3}>
              <StylistProfCard/>
            </Col>
          </Row>
          </Grid>
        </Jumbotron>
        
      </div>
    )
  }
}
