import React, { Component } from 'react'; // "imrc"
import storeContext from '../store/storeContext';
import {Link} from "react-router-dom";
import "./navBar.css";

class NavBar extends Component {  //class component "cc"
    static contextType = storeContext;
    state = {  }
    render() { 
        return ( //wrapper that isn't reflected on html
            <React.Fragment> 
            <nav>
                <h4 className="nav-title">Vik's Vittles</h4>
                <div className="menu-items">
                    <Link to="/">Home</Link>
                    <Link to="/catalog">Catalog</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/cart" className="cartButton"> &nbsp;&nbsp;&nbsp;Cart [{this.context.cart.length}]&nbsp;&nbsp;&nbsp;</Link>
                </div>
            </nav>

            </React.Fragment>
         );
    }
}
 
export default NavBar;