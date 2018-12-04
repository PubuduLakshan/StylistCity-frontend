import React, { Component } from 'react';
import {Grid,Row,Col} from 'react-bootstrap';
import StylistProfCard from "./stylistProfCard";
import "./stylistBar.css";

export default class StylistBar extends Component {


  render() {

   // var cardList = this.props.displayProfiledata
    //console.log(cardList);
    
    /*map((info)=> 
        {console.log(info);
        return(
       <StylistProfCard info = {info}/>
        )
      }
     
    )*/
    if(this.props.displayProfiledata && this.props.displayProfiledata.length > 0){
    var homeStyle=this.props.displayProfiledata.map(homeStylist=>{
      return(
        <StylistProfCard homeStylist = {homeStylist}/>
      )
    })
  }

    

    return (
      <div className="stylistbar">
        
       
        <h2 className="membertitle">Members</h2>
        <hr />
          <Grid>
          <Row className="show-grid">
            <Col xs={4} md={3}>
             {homeStyle}
            </Col>
          </Row>
          </Grid>
       
        
      </div>
    )
  }
}
