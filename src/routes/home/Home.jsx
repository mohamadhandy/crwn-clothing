import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Categories from "../../components/categories/Categories";
import { CategoriesContext } from "../../contexts/CategoriesContext";

const Home = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  console.log("obj", Object.keys(categoriesMap))
  // const { products } = useContext(CategoriesContext);
  // const categories = Object.entries(products).map((e) => ({ [e[0]]: e[1] }));
  // console.log("cate", categories);
  // return (
  //   <>
  //     {  }
  //     <Categories categories={products} />
  //     <Outlet />
  //   </>
  // );
};

export default Home;
