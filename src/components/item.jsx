import React, { Component } from 'react';
import QuantityPicker from './quantityPicker';
import "./item.css";

class Item extends Component {
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
            <button className="btn-vittle">Add to Cart <i className="fa fa-cart-plus"></i></button>
            </div>
         );
    }
handleQuantityChange = (qnty) => {
this.setState({ quantity: qnty });
}
getTotal = () => {
    let total = this.state.quantity * this.props.data.price;
    return total.toFixed(2);
}

}
 
export default Item;