import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Categories from "../../components/categories/Categories";
import { CategoriesContext } from "../../contexts/CategoriesContext";

const Home = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  const categories = [];
  Object.entries(categoriesMap).forEach((category) => {
    const newObject = {
      title: category[0],
      imageUrl: category[1][0].imageUrl,
    };
    categories.push(newObject);
  });
  return (
    <>
      <Categories categories={categories} />
      <Outlet />
    </>
  );
};

export default Home;
