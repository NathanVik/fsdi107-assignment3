import React, { Component } from 'react';
import storeContext from '../store/storeContext';
import ItemInCart from './itemInCart';

import "./cart.css";


class Cart extends Component {
    static contextType = storeContext;
    state = {  }
    render() { 
        return ( 
            <div className="cartPage">

                    <h2>Your Cart</h2>
                    <h5>You have {this.context.cart.length} items in your cart</h5>
                    <div className="cart-container">
                        <div className="cart-detail">
                            { this.context.cart.map(item => <ItemInCart key={item._id} data={item}></ItemInCart>) }
                        </div>
                        <div className="cart-total">
                            <h4>Total Price: ${this.getTotal()}</h4>
                            <button className="btn-vittle">Confirm Order</button>
                        </div>
                    </div>
            </div>
         );
    }

getTotal = () => {
    let cartTotal = 0;
    for( let i = 0; i < this.context.cart.length; i++){
        cartTotal += (this.context.cart[i].price * this.context.cart[i].quantity);
    };
    return cartTotal.toFixed(2);
    }



}
 
export default Cart;