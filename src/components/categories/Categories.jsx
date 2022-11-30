import { CategoriesContainer } from "./Categories-styled";
import React from "react";
import CategoryItem from "../category-item/CategoryItem";

const Categories = ({ categories }) => (
  <CategoriesContainer>
    {categories.map((category, index) => (
      <CategoryItem category={category} key={index} />
    ))}
  </CategoriesContainer>
);

export default Categories;
