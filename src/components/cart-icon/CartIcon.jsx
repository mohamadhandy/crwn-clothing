import React, { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/CartContext";
import "./CartIcon.scss";

const CartIcon = () => {
  const { toggle, setToggle, cartItems } = useContext(CartContext);
  const handleClick = () => setToggle(!toggle);
  const cartCount = cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity,
    0
  );
  return (
    <div className="cart-icon-container" onClick={handleClick}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
