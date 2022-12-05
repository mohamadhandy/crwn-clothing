import ProductCard from "../product-card/ProductCard";
import {
  CategoryPreviewContainer,
  TitlePreview,
  ProductsPreview,
} from "./CategoryPreview-styled";
import { useNavigate } from "react-router-dom";

import React from "react";

const CategoryPreview = ({ title, products }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/shop/${title}`);
  };
  return (
    <CategoryPreviewContainer>
      <TitlePreview onClick={handleClick}>{title?.toUpperCase()}</TitlePreview>
      <ProductsPreview>
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ProductsPreview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
