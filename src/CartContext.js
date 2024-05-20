import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      const newCartItems = cartItems.map((cartItem) =>
        cartItem.id === product.id ? { ...exist, qty: exist.qty + 1 } : cartItem
      );
      setCartItems(newCartItems);
    } else {
      const newCartItems = [...cartItems, { ...product, qty: 1 }];
      setCartItems(newCartItems);
    }
  };

  const removeFromCart = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      const newCartItems = cartItems.filter(
        (cartItem) => cartItem.id !== product.id
      );
      setCartItems(newCartItems);
    } else {
      const newCartItems = cartItems.map((cartItem) =>
        cartItem.id === product.id ? { ...exist, qty: exist.qty - 1 } : cartItem
      );
      setCartItems(newCartItems);
    }
  };

  const getCartTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.qty, 0);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, getCartTotal }}
    >
      {children}
    </CartContext.Provider>
  );
};
