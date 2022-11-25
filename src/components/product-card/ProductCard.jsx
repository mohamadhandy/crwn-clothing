import React from "react";
import Button from "../button/Button"
import "./ProductCard.scss";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt="Product card" />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <Button buttonType={"inverted"}>Add to cart</Button>
    </div>
  );
};

export default ProductCard;
