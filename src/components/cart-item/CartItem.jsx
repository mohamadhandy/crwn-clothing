import React from "react";
import { CartItemContainer, ItemDetails, ItemName } from "./CartItem-styled";

const CartItem = ({ cartItem }) => {
  const { name, price, quantity, imageUrl } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt="product cart" />
      <ItemDetails>
        <ItemName>{name}</ItemName>
        <ItemName>{quantity} x ${price}</ItemName>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
