import { createContext, useState } from 'react';

// createContext() creates the global storage — same as Module 3
export const CartContext = createContext();

const CartProvider = ({ children }) => {

  // Global cart state — starts as empty array, same as Module 3
  const [cart, setCart] = useState([]);

  /*
    addToCart — same logic as Module 3:
    - If book already in cart → increase qty
    - If not → add it with qty: 1
  */
  const addToCart = (book) => {
    setCart(prevCart => {
      const existing = prevCart.find(item => item.id === book.id);
      if (existing) {
        return prevCart.map(item =>
          item.id === book.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }
      return [...prevCart, { ...book, qty: 1 }];
    });
  };

  // removeFromCart — uses filter() to remove, same as Module 3
  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  // increaseQty — same as Module 3
  const increaseQty = (id) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  // decreaseQty — same as Module 3, prevents going below 1
  const decreaseQty = (id) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  };

  // clearCart — same as Module 4's clearCart() after checkout
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, increaseQty, decreaseQty, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;