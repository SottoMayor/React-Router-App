import './App.css';
import { Route } from 'react-router-dom';
import Home from './pages/home'
import Products from './pages/products'

function App() {
  return (
    <div className="App">
      <h2 style={{"margin-bottom": "30px", "margin-top": "30px"}} >This will always persists!</h2>

      <Route path='/home'>
        <Home />
      </Route>

      <Route path='/products'>
        <Products />
      </Route>

    </div>
  );
}

export default App;
