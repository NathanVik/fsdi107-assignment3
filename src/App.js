import "./App.css";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import Catalog from "./components/catalog";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <div className="App">
      <div className="main-content">
        <NavBar></NavBar>
        <Catalog></Catalog>
      </div>
      <div className="footer-box">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
