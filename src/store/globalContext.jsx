import React, { Component } from 'react';
import storeContext  from './storeContext';

class GlobalState extends Component {
    state = { 
        cart: [],

     }
    render() { 
        return  <storeContext.Provider 
                    value={{
                        cart: this.state.cart,
                        addProductToCart: this.addProductToCart,
                        removeProductFromCart: this.removerProductFromCart,

                    }}
                    >
                    {this.props.children}
                </storeContext.Provider>;
         
    }

    addProductToCart = (product) => {
        let currentCart = [...this.state.cart]; //hard copy of an array
        currentCart.push(product);
        this.setState({cart: currentCart});
    };
    
    removerProductFromCart = (productId) => {
        console.log("TODO: Remove product");
    };

}
 
export default GlobalState;