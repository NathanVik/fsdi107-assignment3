import React, { Component } from 'react';
import "./orderComplete.css"
import { Link } from 'react-router-dom';

class OrderComplete extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="orderComplete">
                <h1>Order Submitted!</h1>
                <h4>Thank you for your business!</h4>
                <br></br>
                <br></br>
                <Link className="btn-vittle" to="/history">Click Here to see your past orders</Link>
            </div>
         );
    }
}
 
export default OrderComplete;