import React, { Component } from 'react';
import "./about.css";

class About extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="about">
                <h1>About the Team</h1>
                <div className="about-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, velit?
                </div>
                <div className="about-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus necessitatibus quae cupiditate, debitis sunt facere quasi voluptates quia soluta et iste ratione eum, molestiae aliquid!
                </div>
                <div className="about-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, sint. Itaque et atque ab aliquam.
                </div>

            </div>
         );
    }
}
 
export default About;