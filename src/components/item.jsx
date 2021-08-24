import React, { Component } from 'react';
import QuantityPicker from './quantityPicker';
import "./item.css";
import storeContext from '../store/storeContext';

class Item extends Component {
    static contextType = storeContext;
    state = { 
        quantity: 1
     }
    render() { 
        return ( 
            <div className="itemFrame">
                <img src={'/images/products/' + this.props.data.image} alt="product img" width="200" height="200"></img>
                <h5>{this.props.data.title}</h5>
                <p>Unit Price: ${this.props.data.price.toFixed(2)}</p>
            <QuantityPicker onChange={this.handleQuantityChange}></QuantityPicker>
            <p>Total Price: {this.getTotal()}</p>
            <button className="btn-vittle" onClick={this.handleAddToCart}>
                Add to Cart <i className="fa fa-cart-plus"></i>
            </button>
            </div>
         );
    }
handleQuantityChange = (qnty) => {
    this.setState({ quantity: qnty });
    };
getTotal = () => {
    let total = this.state.quantity * this.props.data.price;
    return total.toFixed(2);
    };
handleAddToCart = () => {
    //create object for the cart
    let prod = {
        ...this.props.data, // item information
        quantity: this.state.quantity, // qnty from component state
    };
    this.context.addProductToCart(prod);
    };
}
 
export default Item;