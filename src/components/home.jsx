import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import "./home.css";

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="home">
                <h1>Welcome to my victual emporium!</h1>
            
                <Link to="/catalog"><img src="/images/storefront.jpeg" alt="storefront"></img></Link>
                <div className="linkContainer">
                    <Link to="/catalog" className="homeLink">Check out our Catalog &rarr;</Link>
                    <Link to="/about" className="homeLink">Learn about out team &rarr;</Link>
                </div>



            </div>
         );
    }
}
 
export default Home;