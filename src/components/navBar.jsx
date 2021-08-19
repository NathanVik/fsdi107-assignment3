import React, { Component } from 'react'; // "imrc"
import "./navBar.css";

class NavBar extends Component {  //class component "cc"
    state = {  }
    render() { 
        return ( //wrapper that isn't reflected on html
            <React.Fragment> 
            <nav>
                <h4 className="nav-title">Vik's Vittles</h4>
                <div className="menu-items">
                    <a href="/">Home</a>
                    <a href="/catalog">Catalog</a>
                    <a href="/about">About Us</a>
                    {/* <a href="#">Contact</a> */}
                </div>
            </nav>

            </React.Fragment>
         );
    }
}
 
export default NavBar;