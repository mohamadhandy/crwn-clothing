import React, { useContext } from "react";
import "./CartDropdown.scss";
import Button from "../button/Button";
import CartItem from "../cart-item/CartItem";
import { CartContext } from "../../contexts/CartContext";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems?.map((item) => (
          <CartItem cartItem={item} key={item.id} />
        ))}
      </div>
      <Button>Checkout</Button>
    </div>
  );
};

export default CartDropdown;
