// App.js
import React from 'react';
import { CartProvider } from './CartContext';
import Product from './Product';
import Cart from './Cart';
import './App.css'; // Import the CSS file

const products = [
  { id: 1, name: 'Item 1', price: 10 },
  { id: 2, name: 'Item 2', price: 20 },
  { id: 3, name: 'Item 3', price: 15 }
];

function App() {
  return (
    <CartProvider>
      <div className="App">
        <header className="App-header">
          <h1>Shopping App</h1>
        </header>
        <main>
          <h2>Products</h2>
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
          <Cart />
        </main>
      </div>
    </CartProvider>
  );
}

export default App;
