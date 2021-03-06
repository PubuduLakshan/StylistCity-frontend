import React, { Component } from 'react';
//import { Link } from "react-router-dom";
import {Jumbotron,Grid,Form,FormGroup,Button, FormControl,Carousel, Row,Col} from "react-bootstrap";
import StylistBar from "./stylistBar";
//import DatePickerFeild from "./datePicker";
import { DatePicker } from 'antd';

import {Redirect} from 'react-router-dom';
import "./home.css";
import axios from 'axios';


export default class Home extends Component {

  constructor(){
    super()
    this.state = {
      redirectParams: {
        category:"stylist",
        location:"london",
        gender:"female"


      },
      updateStyleBar:{},
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

  handleDatePicker(pickerType,date,dateString){
    console.log(pickerType + ' ' + dateString)
    this.setState({redirectParams: {...this.state.redirectParams, [pickerType] : dateString }} )
  }

  componentWillUnmount(){
    console.log('test')
    this.setState({isSubmitClicked: false})
  }

  componentDidMount(){
    axios.get('http://localhost:8000/', {
    })
    .then((response) => {
     console.log(response.data);
     this.setState({updateStyleBar:response.data})
     })
   .catch(function (error) {
    console.log(error);
     });
     return
    
  }


  render() {
    //console.log("this.state.isSubmitClicked -> ", this.state.isSubmitClicked)
    if(this.state.isSubmitClicked){
      return <Redirect to={{
        pathname: "/search",
        state: { redirectParams: this.state.redirectParams }
      }}
      />
    } else
    return (
      <div >
      <Grid>
        <Carousel className="coverCarosal" fluid="true" >
          <Carousel.Item className="coverImages">
            <img  alt="" src="assets/home/home1.jpg" />
          </Carousel.Item>
          <Carousel.Item className="coverImages">
            <img  alt="" src="assets/home/home2.jpg" />
          </Carousel.Item>
          <Carousel.Item className="coverImages">
            <img  alt="" src="assets/home/home5.jpg" />
          </Carousel.Item>
        </Carousel>
        
     
        
        
          <Jumbotron className="jumboHome">
          </Jumbotron>
          <div className="welcomehead">
            <h1 className="welcome">Welcome to City of Stylists</h1>
            <h3 className="subwelcome">Best Place-Best Stylists</h3>
          </div>
          
          <div className="searchForm">
          <h3 className="searchinstruction">Search Here</h3>
          <Grid>
          <Row className="searchTitle"><Col md={2} style={{marginLeft:5}}>Category</Col><Col  md={3} style={{marginLeft:56}}>City</Col><Col  md={3} style={{marginLeft:-43}}>Gender</Col><Col  md={3} style={{marginLeft:-43}}></Col></Row>
          </Grid>
            <Form inline>
              <FormGroup controlId="formcategory" style={{marginLeft:20}} >       
                  <FormControl   style ={{width:230}} componentClass="select" placeholder="Category" defaultValue="stylist" onChange={this.handleChange.bind(this,'category')}>    
                    <option value="stylist">Stylist</option>
                    <option value="educator">Educator</option>
                  </FormControl ><span style={{marginLeft:20}}></span>
              </FormGroup>

              <FormGroup controlId="formlocation">
                  <FormControl   style ={{width:230}}componentClass="select" placeholder="Location" onChange={this.handleChange.bind(this,'location')}>
                    <option value="london">London</option>
                    <option value="TX">TX</option>
                  </FormControl ><span style={{marginLeft:20}}></span>
              </FormGroup>

              <FormGroup controlId="formInlineGender">          
                  <FormControl   style ={{width:230}} componentClass="select" placeholder="Gender" onChange={this.handleChange.bind(this,'gender')}>
                  
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                  </FormControl ><span style={{marginLeft:20}}></span>
              </FormGroup>
              
            
              <Button type="button" bsStyle="primary" onClick={this.testSubmit.bind(this)}>Search Now</Button>
            </Form>
          </div>
        
        
        <Row className="members">
        <StylistBar displayProfiledata={this.state.updateStyleBar}/>
        </Row>

        <div>
          <h2 className="howitworkshead">How it Works</h2>
          <hr />   
        </div>
        </Grid>
      </div>
    )
  }
}

