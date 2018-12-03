import React, { Component } from 'react';
import SearchList from './searchList';

export default class Search extends Component {

  constructor(){
    super()
    this.state = {
      searchResults: []
    }
  }

  componentDidMount(){
      
  }

  render() {

    return (
      <div>
        <h1>{this.props.location.state.params}</h1>
        <SearchList searchResults={this.state.searchResults}/>
      </div>
    )
  }
}
