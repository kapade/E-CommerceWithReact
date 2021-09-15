import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Home from './pages/home/Home';
import Shop from './pages/shop/Shop';
import Login from './pages/Login';
import Registration from './pages/Registration';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Product from './components/Product';
import AddProduct from './admin/AddProduct';

function App() {
  return (
    <div className="App">
      {/* Announcement */}
      <NavBar />
      <Router>
        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route path="/shop" >
            <Shop />
          </Route>
          <Route path="/product" >
            <Product />
          </Route>
          <Route path="/login" >
            <Login />
          </Route>
          <Route path="/registration" >
            <Registration />
          </Route>
          <Route path="/add" >
            <AddProduct />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
