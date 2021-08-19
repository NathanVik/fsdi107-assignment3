import React, { Component } from 'react';
import "./quantityPicker.css";


class QuantityPicker extends Component {
    state = { 
        quantity: 1
     }
    render() { 
        return (
            <div className="quantityPicker">
                <button className="btn-vittle" onClick={this.decrement}>-</button>
                <div>{ this.state.quantity } </div>
                <button className="btn-vittle" onClick={this.increment}>+</button>
            </div> 
         );
    } // Render End
    
    increment = () => {
        if(this.state.quantity < 20 ){
            let qnty = this.state.quantity + 1;
            this.setState( prevState =>({ quantity: prevState.quantity + 1 }) );
            this.props.onChange(qnty);
        }
    }
    decrement = () => {
        if(this.state.quantity > 1) {
            let qnty = this.state.quantity - 1;
            this.setState( prevState =>({ quantity: prevState.quantity - 1}) );
            this.props.onChange(qnty);
        };
    }

}
 

export default QuantityPicker;