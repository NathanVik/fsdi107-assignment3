import React, { Component } from 'react';
import ItemService from '../services/itemService';
import storeContext from '../store/storeContext';
import HistoryItem from './orderHistoryItem';


class History extends Component {
    static contextType = storeContext;
    state = { 
        history: [],
     }
    render() { 
        return ( 
            <div className="history-page">
                <h2>Your Previous Orders Are:</h2>
                
                <div className="cart-detail">
                            { this.state.history.map(order => <HistoryItem key={order._id} data={order}></HistoryItem>)}
                </div>
               

            </div>


         );
    }
    async componentDidMount() {
        let service = new ItemService();
        let data = await service.getHistory(123); // PLACEHOLDER ID
        //console.log(data);

    this.setState({ history: data})
    }

}
export default History;