import React, { Component } from 'react';
import storeContext from '../store/storeContext';
import ItemInCart from './itemInCart';
import ItemService from '../services/itemService';

import "./cart.css";


class Cart extends Component {
    static contextType = storeContext;
    state = { 
        couponCode: "",
        discount: 0.0,
     }
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
                            <input type="text" placeholder="Coupon Code" name ="couponCode" value={this.state.couponCode} onChange={this.handleInputChange}></input>
                            <button disabled={!this.state.couponCode} className="btn-vittle" onClick={this.applyCoupon}>Apply Coupon</button>
                            <br></br>
                            <br></br>
                            <button className="btn-vittle" onClick={this.confirmOrder}>Confirm Order</button>
                        </div>
                    </div>
            </div>
         );
    }

applyCoupon = async () => {
    //check to make sure there is a code
    if (!this.state.couponCode){
        return;
    }
    
    // validate on server
    let service = new ItemService();
    let response = await service.validateCoupon(this.state.couponCode);
    if (!response) {
        console.log("Invalid Code!");
        this.setState({ "discount": 0});
        return;
    };
    this.setState({ "discount": response.discount });
}

getTotal = () => {
    let cartTotal = 0;
    for( let i = 0; i < this.context.cart.length; i++){
        cartTotal += (this.context.cart[i].price * this.context.cart[i].quantity);
    };
    let discTotal = (cartTotal - (cartTotal * this.state.discount));
    return discTotal.toFixed(2);
    }

confirmOrder = async () => {
    let order = {
        "userID" : 123,
        "discountCode": (this.state.couponCode),
        "cart": (this.context.cart),
    }
    let service = new ItemService();
    let response = await service.submitOrder(order);
    if (response) {
        this.props.history.push("/complete");
    }else{
        //show error
    };
};

handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
};


}
 
export default Cart;

// 
//  on click of order button
// console log order
// userID, discount, products diplayed
// 