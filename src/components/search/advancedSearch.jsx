import React, { Component } from 'react';
import {Jumbotron,Button,Grid,Row,Col} from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {Redirect} from 'react-router-dom';
//import InputRange from 'react-input-range';
//import { Button } from 'antd';

export default class AdvancedSearch extends Component {

  constructor() {
    super();
    this.state = {
      searchDates:{
        startDate:new Date(),
        endDate:new Date()},
        isSubmitClicked : false,
        updateSearchList:{},
        range:14
    };
   
  }
  testSubmit(){
    this.setState({isSubmitClicked: true})
  }

  handleChange(searchType,data) {
    console.log(data);
    
    this.setState({searchDates: {...this.state.searchDates, [searchType] : data }} )
  }
 /*>>>>>>>>> componentDidMount(){
    axios.get('http://localhost:8000/advancesearch', {
    })
    .then((response) => {
     console.log(response.data);
     this.setState({updateSearchList:response.data})
     })
   .catch(function (error) {
    console.log(error);
     });
     return
    
  }<<<<*/
  render() {
    if(this.state.isSubmitClicked){
      return <Redirect to={{
        pathname: "/advancesearch",
        state: { searchDates: this.state.searchDates }
      }}
      />
    }else
    return (
      <div>
        <Jumbotron>
        <h3>Advance Search</h3>
        <hr />
        
        <div className="advSearchBody">
        <h4>Search by Dates</h4>
        
        
          
            <h5>From</h5>
            <DatePicker onChange={this.handleChange.bind(this,'startDate')}/>
           

            
            <h5>To</h5>

            <DatePicker onChange={this.handleChange.bind(this,'endDate')}/>
            
            <h4>Search by Rates</h4>
           
        </div>
        <Button bsStyle="primary" onClick={this.testSubmit.bind(this)} style={{marginTop:10}}>Search Again</Button>
        </Jumbotron>
      </div>
    )
    }
  }

