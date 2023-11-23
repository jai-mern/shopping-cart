// Product.js
import React from 'react';
import { useCart } from './CartContext';

const Product = ({ product }) => {
  const { dispatch } = useCart();

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: { ...product, quantity: 1 } });
  };

  return (
    <div>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;
