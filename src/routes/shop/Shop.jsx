import { useContext } from "react";
import ProductCard from "../../components/product-card/ProductCard";
import { ProductsContext } from "../../contexts/ProductsContext";
import "./Shop.scss"

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map((data) => (
        <ProductCard key={data.id} product={data} />
      ))}
    </div>
  );
};

export default Shop;
