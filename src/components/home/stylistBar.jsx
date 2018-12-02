import React, { Component } from 'react';
import {Jumbotron,Grid,Row,Col} from 'react-bootstrap';
import StylistProfCard from "../stylistProfCard/stylistProfCard";
import "./stylistBar.css";

export default class StylistBar extends Component {
  render() {
    return (
      <div className="stylistbar">
        
        <Jumbotron fluid >
        <h3 className="membertitle">Members</h3>
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
