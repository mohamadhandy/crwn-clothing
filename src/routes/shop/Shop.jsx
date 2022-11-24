import SHOP_DATA from "../../shop-data.json"

const Shop = () => {
  return (
    <div>
      <h1>Shop Page</h1>
      <ul>
        { SHOP_DATA.map(data => (
          <li key={data.id}>{data.name} ${data.price}</li>
        )) }
      </ul>
    </div>
  )
}

export default Shop