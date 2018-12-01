import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Home from './components/home/Home';
import Profile from './components/profile/Profile';
import Search from './components/search/Search';

class App extends Component {
  render() {
    return (
    
      <Router>
        <div>
          <Route path="/" exact component={Home}/>
          <Route path="/search" exact component={Search}/>
          <Route path="/profile" exact component={Profile}/>
          </div>
       
      </Router>
    
      
    );
  }
}

export default App;
