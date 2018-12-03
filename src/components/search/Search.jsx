import React, { Component } from 'react';
import SearchList from './searchList';
import axios from 'axios';

export default class Search extends Component {

  constructor(){
    super()
    this.state = {
      searchResults: []
    }
  }

  componentDidMount(){
    const searchedObj = this.props.location.state.redirectParams;
    console.log(searchedObj);

    axios.post('http://localhost:8000/search', {
    searchedObj: searchedObj 
    })
    .then(function (response) {
     console.log(response);
     })
   .catch(function (error) {
    console.log(error);
     });
     return
      
  }

  render() {

    return (
      <div>
        <SearchList searchResults={this.state.searchResults}/>
      </div>
    )
  }
}
