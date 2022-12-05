import React, { useContext } from "react";
import Button, { BUTTON_TYPES_CLASSESS } from "../button/Button";
import "./ProductCard.scss";
import { CartContext } from "../../contexts/CartContext";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const { addItemToCart } = useContext(CartContext);
  const handleClick = () => {
    addItemToCart(product);
  };
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt="Product card" />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <Button onClick={handleClick} buttonType={BUTTON_TYPES_CLASSESS.inverted}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
