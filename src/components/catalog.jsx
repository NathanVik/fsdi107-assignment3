import React, { Component } from 'react';
import "./catalog.css"
import Item from './item';
import ItemService from '../services/itemService';

class Catalog extends Component {
    state = { 
        catalog: [],
        categories: [],
        filter: ""
     }
    render() { 

        let itemsToDisplay = this.state.catalog;
        if(this.state.filter) {
            itemsToDisplay = itemsToDisplay.filter( item => item.category === this.state.filter );
        };

        return ( 
        <div className="catalog">
            
            <h2>Here's my catalogue</h2>
            <h5>We have {this.state.catalog.length} products for your selection</h5>
            
            <div className="filterButtons">
                <button className="btn-vittle" onClick={this.clearFilter}>Show All</button>
                {this.state.categories.map(cat => <button onClick={ () => { this.filterByCat(cat) } } key={cat} className="btn-vittle">{cat}</button>)}
            </div>

            <div className="itemList">

            { itemsToDisplay.map( obj => <Item key={obj._id} data={obj}></Item> ) }

            </div>
        

        </div>
        );
    };

    filterByCat = (cat) => {
        this.setState({ filter: cat });
    };
    clearFilter = () => {
        this.setState({ filter: "" });
    }
    //best place to load server data here
    //executed after render
    componentDidMount() {
    let service = new ItemService();
    let data = service.getCatalog();

    let categories = [];
    for(let i=0; i< data.length; i++) {
        let category = data[i].category;
        //if the category is not included in my array
        if(!categories.includes(category)) {
            categories.push(category);
        }
    }
    
    this.setState({ categories: categories})
    this.setState({ catalog: data });
    }
}
 
export default Catalog;


