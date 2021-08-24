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
        //for each product, check if ID exists in array
        
        let found = false;
        for (let i = 0; i < currentCart.length; i++ ) {
            let item = currentCart[i];
            if (item._id === product._id){
                item.quantity += product.quantity;
                found = true;
            };
        }
        //if exists, console log
        if(!found) {
            currentCart.push(product);
        }
        
        this.setState({cart: currentCart});
        console.log(currentCart);
    };
    
    removeProductFromCart = (productId) => {
        let currentCart = [...this.state.cart];

        for (let i = 0; i < currentCart.length; i++) {
            if( currentCart[i]._id === productId ){
                currentCart.splice(i, 1);
            };
        };

        this.setState({cart: currentCart});
        console.log("Item Removed");
    };

}
 
export default GlobalState;