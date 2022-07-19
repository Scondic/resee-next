import ProductItem from "./ProductItem";

export default function ProductList({products, query, filter}) {

  if (filter === 'priceUp') {
    products.sort((a, b) => a.price > b.price ? 1 : -1)
  } else if (filter === 'priceDown') {
    products.sort((a, b) => a.price < b.price ? 1 : -1)
  }

  return (
    <div className={"container mx-auto"}>
      {filter}
      <div className="grid grid-cols-5 gap-5">
        {
          products.filter(product => {
            if (query === '') {
              return product;
            } else if (product.name.toLowerCase().includes(query.toLowerCase())) {
              return product;
            }
          }).map(product =>
            <ProductItem
              name={product.name}
              price={product.price}
              image={product.image}
              key={product.id}
            />
          )
        }
      </div>
    </div>
  )
}
