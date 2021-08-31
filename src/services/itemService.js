import axios from "axios";

var catalog = [];
// 9 products minimum

// class Product {
//   constructor(_id, title, category, price, image, minimum) {
//     this._id = _id;
//     this.title = title;
//     this.category = category;
//     this.price = price;
//     this.image = image;
//     this.minimum = minimum;
//   }
// }

// var strawberry = new Product(
//   1,
//   "Strawberries",
//   "Fruit",
//   1.99,
//   "strawberry.jpg",
//   1
// );
// var apple = new Product(2, "Apples", "Fruit", 1.59, "apple.jpg", 3);
// var milk = new Product(3, "Milk", "Dairy", 1.99, "milk.jpg", 1);
// var bread = new Product(4, "Loaf of Bread", "Bakery", 2.49, "bread.jpg", 2);
// var cheese = new Product(5, "Cheese", "Dairy", 2.99, "cheese.jpg", 1);
// var steak = new Product(6, "Steak", "Meat", 9.99, "steak.jpg", 2);
// var chicken = new Product(7, "Chicken", "Meat", 7.99, "chicken.jpg", 1);
// var chocolate = new Product(8, "Chocolate", "Sweets", 1.39, "chocolate.jpg", 3);
// var coffee = new Product(9, "Coffee", "Drinks", 4.99, "coffee.jpg", 1);

// catalog.push(strawberry);
// catalog.push(apple);
// catalog.push(milk);
// catalog.push(bread);
// catalog.push(cheese);
// catalog.push(steak);
// catalog.push(chicken);
// catalog.push(chocolate);
// catalog.push(coffee);

class ItemService {
  async getCatalog() {
    //logic to call server
    //retrieve array of products
    let response = await axios.get('http://127.0.0.1:5000/api/catalog');
    return response.data;
  }
  async saveItem(item) {
    await axios.post('http://127.0.0.1:5000/api/catalog', item);
  }

  getItemDetails(id) {}

  // create a method to validate coupon code on server
  // /api/coupons/search/<id>
  async validateCoupon(code) {
    let response = await axios.get('http://127.0.0.1:5000/api/coupons/search/' + code);
    return response.data;
  }

}

export default ItemService;
