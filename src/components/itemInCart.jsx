import React, { Component } from 'react';
import storeContext from '../store/storeContext';
import "./itemInCart.css";

class ItemInCart extends Component {
    static contextType = storeContext;
    state = {  }
    render() { 
        return ( 
            <div className="cartItem">
                <div>
                    <img src={'/images/products/' + this.props.data.image} alt="Product"></img>
                </div>
                <div className="titleBox">
                    <h3>{this.props.data.title}</h3><h5>{this.props.data.category}</h5>
                </div>
                <div className="priceBox">
                    Price: ${this.props.data.price}
                </div>
                <div className="quantBox">
                    Quantity: {this.props.data.quantity}
                </div>
                <div className="totalPriceBox">
                    Total Price: ${this.getTotal()}
                </div>
                <button className="btn-vittle remove-btn" onClick={ () => { this.handleDelete(this.props.data._id) } }>
                    Remove Item
                </button>
            </div>


         );
    }

getTotal = () => {
    let total = this.props.data.quantity * this.props.data.price;
    return total.toFixed(2);
    };

handleDelete = (productId) => {
    let id = productId;
    console.log(id);
    this.context.removeProductFromCart(id);
    };
}
 
export default ItemInCart;