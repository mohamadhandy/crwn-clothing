import ProductCard from "../product-card/ProductCard";
import "./CategoryPreview.scss";
import { useNavigate } from "react-router-dom";

import React from "react";

const CategoryPreview = ({ title, products }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/shop/${title}`);
  };
  return (
    <div className="category-preview-container">
      <h2>
        <span onClick={handleClick} className="title">
          {title?.toUpperCase()}
        </span>
      </h2>
      <div className="preview">
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
