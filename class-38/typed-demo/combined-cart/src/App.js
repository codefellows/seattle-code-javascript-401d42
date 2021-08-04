import './App.css';

import ProductsList from './components/ProductList';
import SimpleCart from './components/SimpleCart';

function App() {
  return (
    <div className="App">
      <SimpleCart />
      <ProductsList />
    </div>
  );
}

export default App;
