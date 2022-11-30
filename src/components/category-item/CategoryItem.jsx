import { DirectoryItemContainer, Body, BackgroundImage } from "./CategoryItem-styled";
import React from "react";

const CategoryItem = ({ category: { title, imageUrl } }) => (
  <DirectoryItemContainer>
    <BackgroundImage
      className="background-image"
      imageUrl={imageUrl}
    ></BackgroundImage>
    <Body>
      <h2>{title}</h2>
      <p>Shop Now</p>
    </Body>
  </DirectoryItemContainer>
);

export default CategoryItem;
