import React, { Component } from 'react';
import storeContext from '../store/storeContext';

import "./cart.css";


class Cart extends Component {
    static contextType = storeContext;
    state = {  }
    render() { 
        return ( 
            <div className="cartPage">

                    <h2>Your Cart</h2>
                    <h4>You have {this.context.cart.length} items in your cart</h4>








            </div>
         );
    }
}
 
export default Cart;