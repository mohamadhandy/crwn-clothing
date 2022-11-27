import React, { useContext } from "react";
import "./CartDropdown.scss";
import Button from "../button/Button";
import CartItem from "../cart-item/CartItem";
import { CartContext } from "../../contexts/CartContext";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);
  const goToCheckoutPage = () => {
    navigate("/checkout");
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems?.map((item) => (
          <CartItem cartItem={item} key={item.id} />
        ))}
      </div>
      <Button onClick={goToCheckoutPage}>Checkout</Button>
    </div>
  );
};

export default CartDropdown;
