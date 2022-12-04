import React, { useContext } from "react";
import {
  CheckoutItemContainer,
  ImageContainer,
  NameQuantityPrice,
  RemoveButton,
  QuantityValue,
  QuantityClass,
  QuantityArrow,
} from "./CheckoutItem-styled";
import { CartContext } from "../../contexts/CartContext";

const CheckoutItem = ({ cartItem }) => {
  const { name, price, quantity, imageUrl } = cartItem;
  const { removeItemFromCart, addItemToCart, decreaseItemQty } =
    useContext(CartContext);
  const handleRemove = () => {
    removeItemFromCart(cartItem);
  };
  const handleIncreaseQty = () => {
    addItemToCart(cartItem);
  };
  const handleDecreaseQty = () => {
    decreaseItemQty(cartItem);
  };
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <NameQuantityPrice>{name}</NameQuantityPrice>
      <QuantityClass>
        <QuantityArrow onClick={handleDecreaseQty}>&#10094;</QuantityArrow>
        <QuantityValue>{quantity}</QuantityValue>
        <QuantityArrow onClick={handleIncreaseQty}>&#10095;</QuantityArrow>
      </QuantityClass>
      <NameQuantityPrice>${price}</NameQuantityPrice>
      <RemoveButton onClick={handleRemove}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
