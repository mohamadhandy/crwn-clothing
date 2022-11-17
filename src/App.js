import React from "react";

const App = () => {
  const categories = [
    { categoryName: "Hats", shopName: "Shop Now" },
    { categoryName: "Jackets", shopName: "Shop Now" },
    { categoryName: "Sneakers", shopName: "Shop Now" },
    { categoryName: "Women", shopName: "Shop Now" },
    { categoryName: "Men", shopName: "Shop Now" },
  ]
  return (
    <div className="categories-container">
      <div className="category-container">
        {/* <img src="" alt="Category image" /> */}
        {categories.map((category) => (
          <div key={category.categoryName} className="category-body-container">
            <h2>{category.categoryName}</h2>
            <p>{category.shopName}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
