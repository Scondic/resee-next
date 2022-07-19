import Navigation from "../components/Navigation";
import Banners from "../components/Banners";
import Filters from "../components/Filters";

export default function Index({data}) {
  return (
    <>
      <Navigation/>
      <Banners />
      <Filters products={data.response}/>
    </>
  )
}

export async function getServerSideProps() {
  const response = await fetch(`https://easydonate.ru/api/v3/shop/products`, {
    headers: {
      'Shop-Key': '16b7d199c7fc567dfd1a12288b022f9a',
    }
  })
  const data = await response.json()

  return {props: {data}}
}