
import React, { Component } from 'react';
import {Tabs,Tab} from 'react-bootstrap';

export default class SortingTabs extends Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleSelect = this.handleSelect.bind(this);
  
      this.state = {
        key: 1
      };
    }
  
    handleSelect(key) {
      alert(`selected ${key}`);
      this.setState({ key });
    }
  
    render() {
      return (
        <Tabs
          activeKey={this.state.key}
          onSelect={this.handleSelect}
          id="controlled-tab-example"
        >
          <Tab eventKey={1} title="Rating">
           
          </Tab>
          <Tab eventKey={2} title="Rates">
           
          </Tab>
          <Tab eventKey={3} title="Popular">
           
          </Tab>
          <Tab eventKey={4} title="Location">
          </Tab>
        </Tabs>
      );
    }
  }
  
  //render(<ControlledTabs />);