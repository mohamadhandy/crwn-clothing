import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { CartIconContainer, ItemCount, ShoppingIcon } from "./carticon-style";

const CartIcon = () => {
  const { toggle, setToggle, cartItems } = useContext(CartContext);
  const handleClick = () => setToggle(!toggle);
  const cartCount = cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity,
    0
  );
  return (
    <CartIconContainer onClick={handleClick}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
