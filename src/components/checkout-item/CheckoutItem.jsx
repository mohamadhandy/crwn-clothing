import React, { useContext } from "react";
import "./CheckoutItem.scss";
import { CartContext } from "../../contexts/CartContext";

const CheckoutItem = ({ cartItem }) => {
  const { name, price, quantity, imageUrl } = cartItem;
  const { removeItemFromCart, addItemToCart } = useContext(CartContext);
  const handleRemove = () => {
    removeItemFromCart(cartItem);
  };
  const handleIncreaseQty = () => {
    addItemToCart(cartItem);
  }
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name"> {name} </span>
      <span className="quantity">
        <div className="arrow">&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={handleIncreaseQty}>&#10095;</div>
      </span>
      <span className="price"> {price}</span>
      <div className="remove-button" onClick={handleRemove}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
