import React, { Component } from 'react';
//import { Link } from "react-router-dom";
import {Jumbotron,Grid,Image,Form,FormGroup,Button,FormControl} from "react-bootstrap";
import StylistBar from "./stylistBar";
import DatePickerFeild from "./datePicker";
import {Redirect} from 'react-router-dom';
import "./home.css";


export default class Home extends Component {

  constructor(){
    super()
    this.state = {
      redirectParams: undefined
    }
  }

  /*searchHome(e){
    e.preventDefault();
    
    const category = this.refs.category;
    console.log(category);
  }*/
  /*constructor(props) {
    super(props);
    this.state = {value: 'category'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();

    return <Route  />
  }
*/

testSubmit(){
  console.log('x')
  this.setState({redirectParams: 'x'})
}

  render() {

    if(this.state.redirectParams){
      return <Redirect to={{
        pathname: "/search",
        state: { params: this.state.redirectParams }
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
            <FormGroup controlId="formInlinecategory" style={{marginLeft:20}}>       
                <FormControl  style ={{width:230}} componentClass="select" placeholder="Category">
                  <option value = "category">Category</option>
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
                <FormControl  style ={{width:230}} componentClass="select" placeholder="Gender">
                  <option>Gender</option>
                  <option value="select">select</option>
                  <option value="other">...</option>
                </FormControl><span style={{marginLeft:20}}></span>
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

