import axios from "axios";
const ServerUrl = "http://127.0.0.1:5000";


class ItemService {
  async getCatalog() {
    //logic to call server
    //retrieve array of products
    let response = await axios.get(ServerUrl + '/api/catalog');
    return response.data;
  }
  async saveItem(item) {
    await axios.post(ServerUrl + '/api/catalog', item);
  }

  async getHistory(userID) {
    let response = await axios.get(ServerUrl + '/api/orders/' + userID);
    if(response.status === 200){
        return response.data;
    } else {
      console.error("Error getting user orders", response.data);
      return null;
    }
    
  }


  getItemDetails(id) {}

  // create a method to validate coupon code on server
  // /api/coupons/search/<id>
  async validateCoupon(code) {
    let response = await axios.get(ServerUrl + '/api/coupons/search/' + code);
    return response.data;
  }
  //create submit order fn
  async submitOrder(order){
    let response = await axios.post(ServerUrl + '/api/orders', order);
    if (response.status === 200){
      return response.data;
    } else {
      console.error("error submitting", response.data);
      return null;
    }
  }

}

export default ItemService;
