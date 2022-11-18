import "./categories.scss";
import React from "react";
import CategoryItem from "../category-item/CategoryItem";

const Categories = ({ categories }) => (
  <div className="categories-container">
    {categories.map((category, index) => (
      <CategoryItem category={category} key={index} />
    ))}
  </div>
);

export default Categories;
