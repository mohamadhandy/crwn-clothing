import React from "react";
import { CartItemContainer, ItemDetails } from "./CartItem-styled";

const CartItem = ({ cartItem }) => {
  const { name, price, quantity, imageUrl } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt="product cart" />
      <ItemDetails>
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
