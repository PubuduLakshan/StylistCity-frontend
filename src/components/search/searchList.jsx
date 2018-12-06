import React, { Component } from 'react'
import{Grid,Col,Jumbotron,Row,Image,ButtonToolbar,Button,ButtonGroup} from 'react-bootstrap';
import SortingTabs from './sortTabs';
import AdvancedSearch from './advancedSearch';
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
          <div key={stylist.id}> <div>
          <Jumbotron>
          <Row>  
              <Col md={4}>               
              <div className="image_inner_container">
                  <Image src={`assets/profile/${stylist.id}.jpg`} />
              </div>
              </Col > 
              <Col md={4}> 
              <div>
                  <h2 style={{fontWeight:"bold",fontFamily:"Time new roman",paddingTop:20}}>{stylist.firstName} {stylist.lastName}</h2>
                  
                  <h5>Category : {stylist.type}</h5>
                  <h5>Location :{stylist.city}</h5>
              </div >
              </Col> 
              <Col md={4}>
              <div>
                  <h3 style={{marginTop:50,color:"red"}}>Book Now!</h3>
                  <ButtonToolbar>
                    <ButtonGroup bsSize="xsmall">
                      <Button bsStyle="success"><div>FullDay</div><div>$100</div></Button>
                      <Button bsStyle="success"><div>Morning</div><div>$50</div></Button>
                      <Button bsStyle="success"><div>Evening</div><div>$80</div></Button>
                    </ButtonGroup>
                  </ButtonToolbar>
                  <Button bsSize="small" bsStyle="default" style={{marginLeft:40,marginTop:20}}>View Profile</Button>
              </div>
              </Col>                  
             
          </Row> </Jumbotron>   
        </div></div>
        )
        
      })
    }
    
    return (
      <div>
        <Grid>
            <Col md={4}>
            <AdvancedSearch/>
            </Col>

            <Col md={8}>
            <h3>sort by :</h3><SortingTabs/>
            <>
            {stylistList}
            </>

            
            </Col> 
        </Grid>
      </div>
    )
  }
}
