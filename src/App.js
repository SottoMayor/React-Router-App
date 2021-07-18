import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  return (
    <div className="App">

      <MainHeader/>
      
      <main>
        <Switch>
          <Route path='/home'>
            <Home />
          </Route>

          
          <Route path='/products' exact>
            <Products />
          </Route>

          <Route path='/products/:productId'>
            <ProductDetails/>
          </Route>
        </Switch>
      </main>

    </div>
  );
}

export default App;
