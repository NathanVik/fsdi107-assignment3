import React, { Component } from 'react';
import QuantityPicker from './quantityPicker';
import "./item.css";

class Item extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="itemFrame">
                <img src={'/images/products/' + this.props.data.image} alt="product img" width="200" height="200"></img>
                <h5>{this.props.data.title}</h5>
                <p>Unit Price: ${this.props.data.price.toFixed(2)}</p>
            <QuantityPicker></QuantityPicker>
            <p>Total Price: {10}</p>
            <button className="btn-vittle">Add to Cart <i className="fa fa-cart-plus"></i></button>
            </div>
         );
    }
}
 
export default Item;