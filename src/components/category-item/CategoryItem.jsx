import {
  DirectoryItemContainer,
  Body,
  BackgroundImage,
} from "./CategoryItem-styled";
import React from "react";
import { useNavigate } from "react-router-dom";

const CategoryItem = ({ category: { title, imageUrl, route } }) => {
  const navigate = useNavigate();
  const handleClickToShopNow = () => {
    navigate(`/${route}`);
  };
  return (
    <DirectoryItemContainer>
      <BackgroundImage
        className="background-image"
        imageUrl={imageUrl}
      ></BackgroundImage>
      <Body onClick={handleClickToShopNow}>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default CategoryItem;
