import React, { Component } from 'react'
import{Grid,Col,Jumbotron,Row,Image} from 'react-bootstrap';
import SortingTabs from './sortTabs';
import './searchList.css';
//import SearchProfCard from './searchProfCard';
//import SearchProfCard from './searchProfCard';
//import {StarRating} from 'react-star-rating';


export default class SearchList extends Component {
  render() {
    //new
    console.log(this.props.searchResults);
    if(this.props.searchResults && this.props.searchResults.length > 0){
      var stylistList  = this.props.searchResults.map(stylist=>{
        console.log(stylist);
        return(
          <li key={stylist.id}> <div className="container">
          <Row>  
              <Col md={3}>               
              <div className="image_inner_container">
                  <Image src={`assets/profile/${stylist.id}.jpg`} />
              </div>
              </Col > 
              <Col md={3}> 
              <div>
                  <h3>{stylist.firstName} {stylist.lastName}</h3>
                  
                  <h4>{stylist.type}</h4>
                  <h4>{stylist.city}</h4>
              </div >
              </Col> 
              <Col md={3}>
              <div>
  
              </div>
              </Col>                  
             
          </Row>    
        </div></li>
        )
        
      })
    }
    
    return (
      <div>
        <Grid>
            <Col xs={6} md={2}>
            <Jumbotron></Jumbotron>
            </Col>

            <Col xs={14} md={10}>
            <h4>sort by :</h4><SortingTabs/>
            <>
            {stylistList}
            </>

            
            </Col> 
        </Grid>
      </div>
    )
  }
}
