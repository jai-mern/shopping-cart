// Cart.js
import React from 'react';
import { useCart } from './CartContext';

const Cart = () => {
  const { cart, dispatch } = useCart();

  const increaseQuantity = (item) => {
    dispatch({ type: 'INCREASE_QUANTITY', payload: { id: item.id } });
  };

  const decreaseQuantity = (item) => {
    if (item.quantity > 1) {
      dispatch({ type: 'DECREASE_QUANTITY', payload: { id: item.id } });
    }
  };

  const removeFromCart = (item) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id: item.id } });
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} - Quantity: {item.quantity}{' '}
            <button onClick={() => increaseQuantity(item)}>+</button>{' '}
            <button onClick={() => decreaseQuantity(item)}>-</button>{' '}
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
