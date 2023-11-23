// CartContext.js
import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.payload];

    case 'REMOVE_FROM_CART':
      return state.filter(item => item.id !== action.payload.id);

    case 'INCREASE_QUANTITY':
      return state.map(item =>
        item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
      );

    case 'DECREASE_QUANTITY':
      return state.map(item =>
        item.id === action.payload.id ? { ...item, quantity: item.quantity - 1 } : item
      );

    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export { CartProvider, useCart };
