import React, { Component } from 'react'
import { Navbar, Nav, NavItem,Grid} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './GuestUserNavbar.css'

export default class GuestUserNavbar extends Component {
  
 
  render() {
    return (
      <Grid>
        <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <span><img alt="" src="assets/logo/logo.jpg" className="logoImage"/></span><span> </span>StylistCity
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight style={{paddingRight:20}}>
            <NavItem eventKey={1} componentClass={Link} href="/" to="/">
              <div style={{fontSize:15}}>CreateProfile <span style={{ marginLeft : 45 ,marginRight: 20}}>|</span></div>
            </NavItem>
            <NavItem eventKey={2} componentClass={Link} href="/" to="/">
              Home 
            </NavItem>
            <NavItem eventKey={3} componentClass={Link} href="/" to="/">
              Service
            </NavItem>
            
            <NavItem eventKey={4} componentClass={Link} href="/" to="/">
              About
            </NavItem>
            <NavItem eventKey={5} componentClass={Link} href="/" to="/">
              Sign up
            </NavItem>
            <NavItem eventKey={6} componentClass={Link} href="/" to="/">
              Log in
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </Grid>
    )
  }
}
