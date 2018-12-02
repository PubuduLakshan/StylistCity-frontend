import React, { Component } from 'react'
import{Grid,Col,Jumbotron} from 'react-bootstrap';
import SortingTabs from './sortTabs';
import './searchList.css';
import SearchProfCard from './searchProfCard';

export default class SearchList extends Component {
  render() {
    return (
      <div>
        <Grid>
            <Col xs={6} md={2}>
            <Jumbotron></Jumbotron>
            </Col>

            <Col xs={14} md={10}>
            <h4>sort by :</h4><SortingTabs/>
            <SearchProfCard/>
            </Col>
        </Grid>
      </div>
    )
  }
}
