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

const decreaseQty = (cartItems, product) => {
  const item = cartItems.find((cartItem) => cartItem.id === product.id);
  const index = cartItems.findIndex((cartItem) => cartItem.id === product.id);
  if (item.quantity - 1 > 0) {
    return [
      ...cartItems.slice(0, index),
      { ...cartItems[index], quantity: cartItems[index].quantity - 1 },
      ...cartItems.slice(index + 1),
    ];
  } else {
    return removeCartItem(cartItems, product);
  }
};

const removeCartItem = (cartItems, product) => {
  return cartItems.filter((cartItem) => cartItem.id !== product.id);
};

export const CartContext = createContext({
  toggle: false,
  setToggle: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeCartItem: () => {},
  decreaseQty: () => {},
});

export const CartProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const removeItemFromCart = (product) => {
    setCartItems(removeCartItem(cartItems, product));
  };
  const decreaseItemQty = (product) => {
    setCartItems(decreaseQty(cartItems, product));
  };
  const value = {
    toggle,
    setToggle,
    addItemToCart,
    cartItems,
    removeItemFromCart,
    decreaseItemQty,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
