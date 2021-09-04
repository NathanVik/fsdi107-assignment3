import "./App.css";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import Catalog from "./components/catalog";
import Home from "./components/home";
import About from './components/about';
import Admin from './components/admin';
import Cart from './components/cart';
import OrderComplete from './components/orderComplete';
import History from "./components/history";

import GlobalState from "./store/globalContext";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import { BrowserRouter, Route, Switch } from 'react-router-dom';




function App() {
  return (
    <GlobalState>
      <BrowserRouter>
        <div className="App">
          <div className="main-content">
            <NavBar></NavBar>

            <Switch>
              <Route path="/" exact component={Home}></Route>
              <Route path="/home" exact component={Home}></Route>
              <Route path="/catalog" exact component={Catalog}></Route>
              <Route path="/about" exact component={About}></Route>
              <Route path="/admin" exact component={Admin}></Route>
              <Route path="/cart" exact component={Cart}></Route>
              <Route path="/complete" exact component={OrderComplete}></Route>
              <Route path="/history" exact component={History}></Route>
            </Switch>

          </div>
          <div className="footer-box">
            <Footer></Footer>
          </div>
        </div>
      </BrowserRouter>
    </GlobalState>
  );
}

export default App;
