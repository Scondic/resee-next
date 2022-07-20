import Navigation from "../components/Navigation";
import Banners from "../components/Banners";
import Filters from "../components/Filters";

export default function Index({products}) {

  return (
    <>
      <Navigation/>
      <Banners />
      <Filters products={products.response}/>
    </>

 )
}

export async function getServerSideProps() {
  const products = await fetch(`https://easydonate.ru/api/v3/shop/products`, {
    headers: {
      'Shop-Key': '16b7d199c7fc567dfd1a12288b022f9a',
    }
  }).then((response) => {
    return response.json();
  })

  return {props: {products}}
}