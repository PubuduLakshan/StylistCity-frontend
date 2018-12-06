import React, { Component } from 'react'
import{Grid,Col,Jumbotron,Row,Image,ButtonToolbar,Button,ButtonGroup,Tab,Tabs} from 'react-bootstrap';
import { Link } from 'react-router-dom';
//import SortingTabs from './sortTabs';
import AdvancedSearch from './advancedSearch';
import './searchList.css';
//import SearchProfCard from './searchProfCard';
//import SearchProfCard from './searchProfCard';
//import {StarRating} from 'react-star-rating';


export default class SearchList extends Component {
  constructor() {
    super();

   
    this.state = {
      key: 1
    };
  }

  handleSelect(key) {
    //alert(`selected ${key}`);
    this.setState({ key });
    console.log( this.props.key);
   

  }
  componentDidMount(){
    if(this.state.key===2){
      console.log("gdyguy8g"+ this.state.key);
      
    }

  }

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
                  <h2 style={{fontWeight:"bold",paddingTop:20}}>{stylist.firstName} {stylist.lastName}</h2>
                  
                  <h5>Category : {stylist.type}</h5>
                  <h5>Location :{stylist.city}</h5>
              </div >
              </Col> 
              <Col md={4}>
              <div>
                  <h3 style={{marginTop:50,color:"red"}}>Book Now!</h3>
                  <ButtonToolbar>
                    <ButtonGroup bsSize="xsmall">
                      <Button bsStyle="success"><div>FullDay</div><div>${stylist.charge && stylist.charge.fullDay}</div></Button>
                      <Button bsStyle="success"><div>Morning</div><div>${stylist.charge && stylist.charge.morning}</div></Button>
                      <Button bsStyle="success"><div>Evening</div><div>${stylist.charge && stylist.charge.afternoon}</div></Button>
                    </ButtonGroup>
                  </ButtonToolbar>

                  <Link to ={`/profile/${stylist.id}`}><Button bsSize="small" bsStyle="default" style={{marginLeft:40,marginTop:20}}>View Profile</Button></Link>
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
            <div className="advSearch">
            <AdvancedSearch/>
            </div>
            </Col>

            <Col md={8}>
            <h3>sort by :</h3>
              <Tabs
                activeKey={this.state.key}
                onSelect={this.handleSelect.bind(this)}
                id="controlled-tab-example">
                <Tab eventKey={1} title="Rating">
                
                </Tab>
                <Tab eventKey={2} title="Rates">
                
                </Tab>
                <Tab eventKey={3} title="Popular">
                
                </Tab>
                <Tab eventKey={4} title="Location">
                </Tab>
              </Tabs>
                       
              {stylistList}
          

            
            </Col> 
        </Grid>
      </div>
    )
  }
}
