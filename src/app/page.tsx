import Image from 'next/image'
import Hero from '@/components/views/Hero'
//import ProductList from '@/views/ProductList'
import ProductType from "@/components/views/ProductTypes"
import BASE_PATH_FORAPI from '@/components/shared/BasePath';
import ProductCarousel from '@/components/views/ProductCarousel';
import { responseType } from '@/components/utils/ProductsDataArrayAndType';
import Jewellery from '@/components/views/Jewellery';
import Newslatter from '@/components/views/NewsLatter';
import Footer from '@/components/views/Footer';


async function fetchAllProductsData() {
  let res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-06-02/data/query/production?query=*[_type == "products"]`, {
    next: {
      revalidate: 60
    }
  });

  if (!res.ok) {
    throw new Error("Failed to fetch")
  }

  return res.json();
}

export default async function Home() {
  let { result }: responseType = await fetchAllProductsData();
  console.log(result)
  return (
    <div className="overflow-hidden">
      <Hero />
      <ProductType />
      <ProductCarousel ProductData={result} />
      <Jewellery />
      <Newslatter />

    </div>
  )
}
