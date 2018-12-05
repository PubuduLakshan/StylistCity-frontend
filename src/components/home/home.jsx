import React, { Component } from 'react';
//import { Link } from "react-router-dom";
import {Jumbotron,Grid,Image,Form,FormGroup,Button, FormControl } from "react-bootstrap";
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
      <div>
        
        <Image src = "assets/home/homeImg1.jpg" fluid="true" alt="Responsive image"/>
     
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
            <FormGroup controlId="formInlineDate"> 
             <DatePicker  onChange={this.handleDatePicker.bind(this,'dateString')}/>
            </FormGroup>
           
            <Button type="button" bsStyle="success" onClick={this.testSubmit.bind(this)}>Search Now</Button>
          </Form>
        </div>
      </Grid>
      
      
      <StylistBar displayProfiledata={this.state.updateStyleBar}/>

      <div>
        <h2 className="howitworkshead">How it Works</h2>
        <hr />
        
      </div>
      </div>
    )
  }
}

