import Image from 'next/image'
import Hero from '@/components/views/Hero'
//import ProductList from '@/views/ProductList'
import ProductType from '@/components/views/ProductTypes'
import BASE_PATH_FORAPI from '@/components/shared/BasePath';
import ProductCarousel from '@/components/views/ProductCarousel';


async function fetchAllProductsData() {
  let res = await fetch(`${BASE_PATH_FORAPI}/api/products`);
  if (!res.ok) {
    throw new Error("Failed to fetch")
  }
  return res.json();
}


export default async function Home() {
  let { response } = await fetchAllProductsData();
  return (
    <div>

      <Hero />

      <ProductType />
      <ProductCarousel ProductData={response} />
    </div>
  )
}
