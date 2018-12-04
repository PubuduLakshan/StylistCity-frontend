import React, { Component } from 'react'
import{Grid,Col,Jumbotron,Row,Image,ButtonToolbar,Button,ButtonGroup} from 'react-bootstrap';
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
          <Jumbotron>
          <Row>  
              <Col md={4}>               
              <div className="image_inner_container">
                  <Image src={`assets/profile/${stylist.id}.jpg`} />
              </div>
              </Col > 
              <Col md={4}> 
              <div>
                  <h2 style={{fontWeight:"bold",fontFamily:"Time new roman",fontSize:45}}>{stylist.firstName} {stylist.lastName}</h2>
                  
                  <h4>Category : {stylist.type}</h4>
                  <h4>Location :{stylist.city}</h4>
              </div >
              </Col> 
              <Col md={4}>
              <div>
                  <h2 style={{marginTop:50}}>Book Now!</h2>
                  <ButtonToolbar>
                    <ButtonGroup bsSize="large">
                      <Button bsStyle="primary"><div>FullDay</div><div>$100</div></Button>
                      <Button bsStyle="primary"><div>Morning</div><div>$50</div></Button>
                      <Button bsStyle="primary"><div>Evening</div><div>$80</div></Button>
                    </ButtonGroup>
                  </ButtonToolbar>
                  <Button bsSize="large" bsStyle="info" style={{marginLeft:80,marginTop:20}}>View Profile</Button>
              </div>
              </Col>                  
             
          </Row> </Jumbotron>   
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
