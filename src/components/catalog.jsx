import React, { Component } from 'react';
import "./catalog.css"
import Item from './item';
import ItemService from '../services/itemService';

class Catalog extends Component {
    state = { 
        catalog: []
     }
    render() { 

        return ( 
        <div className="catalog">
            
            <h3>Here's my catalogue</h3>
            <h5>We have {this.state.catalog.length} products for your selection</h5>
            <div className="itemList">

            { this.state.catalog.map( obj => <Item key={obj._id} data={obj}></Item> ) }

            </div>
        

        </div>
        );
    }

    //best place to load server data here
    //executed after render
    componentDidMount() {
    let service = new ItemService();
    let data = service.getCatalog();
    this.setState({ catalog: data });
    }
}
 
export default Catalog;


