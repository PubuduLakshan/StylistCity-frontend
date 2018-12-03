import React, { Component } from 'react';
//import { Link } from "react-router-dom";
import {Jumbotron,Grid,Image,Form,FormGroup,Button, FormControl } from "react-bootstrap";
import StylistBar from "./stylistBar";
import DatePickerFeild from "./datePicker";
import {Redirect} from 'react-router-dom';
import "./home.css";


export default class Home extends Component {

  constructor(){
    super()
    this.state = {
      redirectParams: {},
      isSubmitClicked: false
    }
  }
  testSubmit(){
    this.setState({isSubmitClicked: true})
  }



  /*searchHome(e){
    e.preventDefault();
    
    const category = this.refs.category;
    console.log(category);
  }*/

/*
  constructor(props) {
    super(props);
    this.state = {redirectParams: undefined;

    //this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({{category: event.target.value}});
  }

  handleSubmit(event) {
   // alert('Your favorite flavor is: ' + this.state.value);

    event.preventDefault();

  }*/

  handleChange(searchType,e){
    this.setState({redirectParams: {...this.state.redirectParams, [searchType] : e.target.value }} )
  }




  render() {

    if(this.state.isSubmitClicked){
      return <Redirect to={{
        pathname: "/search",
        state: { redirectParams: this.state.redirectParams }
      }}
      />
    } else
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
            <FormGroup controlId="formcategory" style={{marginLeft:20}} >       
                <FormControl   style ={{width:230}} componentClass="select" placeholder="Category" onChange={this.handleChange.bind(this,'category')}>
                  <option value ="category">Category</option>
                  <option value="stylist">Stylist</option>
                  <option value="educator">Educator</option>
                </FormControl ><span style={{marginLeft:20}}></span>
            </FormGroup>

            <FormGroup controlId="formlocation">
                <FormControl   style ={{width:230}}componentClass="select" placeholder="Location" onChange={this.handleChange.bind(this,'location')}>
                  <option>Location</option>
                  <option value="stylist">Stylist</option>
                  <option value="educator">Educator</option>
                </FormControl ><span style={{marginLeft:20}}></span>
            </FormGroup>

            <FormGroup controlId="formInlineGender">          
                <FormControl   style ={{width:230}} componentClass="select" placeholder="Gender" onChange={this.handleChange.bind(this,'gender')}>
                  <option>Gender</option>
                  <option value="select">select</option>
                  <option value="other">...</option>
                </FormControl ><span style={{marginLeft:20}}></span>
            </FormGroup>

            <FormGroup controlId="formInlineDate">      
              <DatePickerFeild bsStyle = "primary" onChange={this.handleChange}/><span style={{marginLeft:20}}></span>
            </FormGroup>
           
            <Button type="button" bsStyle="default" onClick={this.testSubmit.bind(this)}>Search Now</Button>
          </Form>
        </div>
      </Grid>
      
      
      <StylistBar/>

      <div>
        <h2 className="howitworkshead">How it Works</h2>
        <hr />
        
      </div>
      </div>
    )
  }
}

