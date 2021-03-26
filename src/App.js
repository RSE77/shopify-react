import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage'
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
      <Cart />
        <Switch>
        
        <Route path ='/products/:handle'>
          <ProductPage />
        </Route>

        <Route path='/'>
          <Home />
        </Route>
        <p>Footer</p>
      
        </Switch>
      
      </Router>
    </div>
  );
}

export default App;
