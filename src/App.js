import './App.css';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  return (
    <div className="App">

      <MainHeader/>
      
      <main>
        <Route path='/home'>
          <Home />
        </Route>

        <Route path='/products'>
          <Products />
        </Route>

        <Route path='/product-details/:productId'>
          <ProductDetails/>
        </Route>
      </main>

    </div>
  );
}

export default App;
