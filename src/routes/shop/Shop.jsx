import { useContext } from "react"
import { ProductsContext } from "../../contexts/ProductsContext"

const Shop = () => {
  const { products } = useContext(ProductsContext)
  return (
    <div>
      <h1>Shop Page</h1>
      <ul>
        { products.map(data => (
          <li key={data.id}>{data.name} ${data.price}</li>
        )) }
      </ul>
    </div>
  )
}

export default Shop