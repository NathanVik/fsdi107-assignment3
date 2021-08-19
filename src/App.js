import "./App.css";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import Catalog from "./components/catalog";
import Home from "./components/home";
import About from './components/about';
import Admin from './components/admin';

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
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
          </Switch>

        </div>
        <div className="footer-box">
          <Footer></Footer>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
