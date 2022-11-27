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
  // find the cart item to remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === product.id
  );

  // check if is quantity equal to 1, if it is remove that item from the cart
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== product.id);
  }

  // return back cartItems with matching cart item with quantity - 1
  return cartItems.map((cartItem) =>
    cartItem.id === product.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
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
