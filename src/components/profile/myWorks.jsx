import React, { Component } from 'react';
import {Image} from 'react-bootstrap';

export default class MyWorks extends Component {

    render(){
        var ImageLocation = this.props.ImageLocationId;
       
        
        return(
           
                <Image alt="" src={`/assets/myworks/mywork${ImageLocation}.jpg`} width={340} height={200} />
          
            
        )
        
    }
}