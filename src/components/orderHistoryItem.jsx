import React, { Component } from 'react';
import "./orderHistoryItem.css"


class HistoryItem extends Component {
    state = {  }
    render() { 
        return ( 
        <div className="historyItem">
            <div className="section">Date: {this.getFormattedDate(this.props.data.createOn)}</div>
            <div className="section">Number of Products: {this.props.data.cart.length}</div>
            <div className="section">Total Price: ${this.props.data.total.toFixed(2)}</div>


        </div> );
    }

    getFormattedDate = (dateStr) => {
        let d = new Date(dateStr);
        return d.toLocaleDateString() + " " + d.toLocaleTimeString();
    };

}
 
export default HistoryItem;


// this.props.data

//"_id": "6133a74b881c7b697e09dfe5",
// "userID": 123,
// "discountCode": "Invalid",
// "cart": [
//   {
//     "_id": "9",
//     "title": "Coffee",
//     "category": "Drinks",
//     "price": 4.99,
//     "image": "coffee.jpg",
//     "quantity": 3
//   },
//   {
//     "_id": "8",
//     "title": "Chocolate",
//     "category": "Sweets",
//     "price": 1.39,
//     "image": "chocolate.jpg",
//     "quantity": 3
//   }
// ],
// "createOn": "2021-09-04T17:05:15.345Z",
// "total": 19.14