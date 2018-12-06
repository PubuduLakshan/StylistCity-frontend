import React, { Component } from 'react';
import SearchList from './searchList';
import axios from 'axios';

export default class Search extends Component {

  constructor(){
    super()
    this.state = {
      //searchResults: []
      searchResults: {}
    }
  }
//new
  updateState(stylistList){
    this.setState({
      searchResults:stylistList
    })
  }
//
 
/*................................ componentDidMount(){
    const searchedObj = this.props.location.state.redirectParams;
    console.log(searchedObj);

    axios.post('http://localhost:8000/search', {
    searchedObj: searchedObj 
    })
    .then((response) => {
     console.log(response.data);
     //new
     this.updateState(response.data);
     //
     })
   .catch(function (error) {
    console.log(error);
     });
     return
      
  }>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

  render() {

    return (
      <div>
        <SearchList searchResults={this.state.searchResults}/>
      </div>
    )
  }
}
