import React, { Component } from 'react';
//import { Link } from "react-router-dom";
import {Jumbotron,Grid,Image,Form,FormGroup,Button,FormControl} from "react-bootstrap";
import StylistBar from "./stylistBar";
import DatePickerFeild from "./datePicker";
import "./Home.css";


export default class Home extends Component {
  render() {
    return (
      <div>
        
        <Image src = "assets/home/homeImg1.jpg" className="img-fluid" alt="Responsive image"/>
     
      <Grid>
      
        <Jumbotron className="jumboHome">
        <div className="welcomehead">
          <h1 className="welcome">Welcome to Stylist City</h1>
          <h3 className="subwelcome">Best Place-Best Stylist</h3>
        </div>
        </Jumbotron>
        
        <div className="searchForm">
        <h3 className="searchinstruction">Search Here</h3>
          <Form inline>
            <FormGroup controlId="formInlinecategory" style={{marginLeft:20}}>       
                <FormControl  style ={{width:230}} componentClass="select" placeholder="Category">
                  <option>Category</option>
                  <option value="stylist">Stylist</option>
                  <option value="educator">Educator</option>
                </FormControl><span style={{marginLeft:20}}></span>
            </FormGroup>

            <FormGroup controlId="formInlinelocation">
                <FormControl  style ={{width:230}}componentClass="select" placeholder="Location">
                  <option>Location</option>
                  <option value="stylist">Stylist</option>
                  <option value="educator">Educator</option>
                </FormControl><span style={{marginLeft:20}}></span>
            </FormGroup>

            <FormGroup controlId="formInlineGender">          
                <FormControl  style ={{width:230}}componentClass="select" placeholder="Gender">
                  <option>Gender</option>
                  <option value="select">select</option>
                  <option value="other">...</option>
                </FormControl><span style={{marginLeft:20}}></span>
            </FormGroup>

            <FormGroup controlId="formInlineDate">      
              <DatePickerFeild bsStyle = "primary" onChange={this.handleChange}/><span style={{marginLeft:20}}></span>
            </FormGroup>
           
            <Button type="submit" bsStyle="default" href="../search/Search.jsx">Search Now</Button>
          </Form>
        </div>
      </Grid>
      
      
      <StylistBar/>

      <Jumbotron className="howitworks">
        <h2 className="howitworkshead">How it Works</h2>
        <hr />
      </Jumbotron>
      
      </div>
    )
  }
}

