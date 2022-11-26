import { createContext, useState } from "react";

// helper function (bisa ini fungsinya)
const addCartItem = (cartItems, productToAdd) => {
  // find if cart items contains productToAdd or find index in cartItems that contains productToAdd
  let index = cartItems.findIndex((item) => item.id === productToAdd.id);

  // if found, increment quantity
  if (index >= 0) {
    return [
      ...cartItems.slice(0, index),
      { ...cartItems[index], quantity: cartItems[index].quantity + 1 },
      ...cartItems.slice(index + 1),
    ];
  }
  // otherwise return new array with modified cartItems or new cartItem
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  toggle: false,
  setToggle: () => {},
  cartItems: [],
  addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const value = { toggle, setToggle, addItemToCart, cartItems };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
