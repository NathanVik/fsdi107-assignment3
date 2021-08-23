import React, { Component } from 'react';
import ItemService from '../services/itemService'
import "./admin.css";



class Admin extends Component {
    state = { 
        title: "",
        category: "",
        price: "",
        image: "",

        showAlert: false,
     }
    render() { 
        return ( 
            <div className="admin">
                <h1>New Product Input</h1>

                

                <form className="new-product">
                    <div className="form-item">
                        <label>Product Name:</label>
                        <input type="text" className="form-input" name="title" value={this.state.title} onChange={this.handleInputChange}></input>
                    </div>
                    <div className="form-item">
                        <label>Category:</label>
                        <input type="text" className="form-input" name="category" value={this.state.category} onChange={this.handleInputChange}></input>
                    </div>
                    <div className="form-item">
                        <label>Unit Price:</label>
                        <input type="number" className="form-input" name ="price" step="0.01" value={this.state.price} onChange={this.handleInputChange}></input>
                    </div>
                    <div className="form-item">
                        <label>Image Filename:</label>
                        <input type="text" className="form-input" name ="image" value={this.state.image} onChange={this.handleInputChange}></input>
                    </div>
                    <div className="form-item">
                        <button type="button" className="btn-vittle btn-register" onClick={this.registerItem}>Add New Item</button>
                        { this.state.showAlert ? <div className="alert-saved">Item Saved!</div> : null }
                    </div>
                </form>

            </div>
         );
    } //Render End
    registerItem = () => {
        //create an object
        let item = { ...this.state }; // creates a copy of the state
        console.log(item)
        //send object to service -> to server
        let service = new ItemService();
        service.saveItem(item);

        //clear capture form
        this.setState({ title: "", category: "", price: "", image: "", showAlert: true });

        //set a timer and hide alert
        setTimeout( () => {
            this.setState({ showAlert: false });
        }, 3000); 

    };
    handleInputChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    };



}
 
export default Admin;