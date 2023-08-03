import React from 'react'
import P1 from "/public/p1.png"
import P2 from "/public/p2.png"
import P3 from "/public/p3.png"
//import P4 from "/public/p4.png"
import { Products } from '@/utils/mock'
import ProductCard from '@/components/ui/ProductCard'
import { StaticImageData } from 'next/image'


const Productlist = () => {
    const productChecks = Products.slice(0, 3);
    //  console.log(productChecks);
    return (
        <div className='flex justify-evenly mt-16 py-10 '>

            {
                productChecks.map((product) => (
                    <ProductCard key={product.id}
                        title={product.name}
                        price={product.price}
                        img={product.image as StaticImageData}
                        category={product.category}
                        id={product.id}
                    />
                ))
            }
        </div>
    )
}

export default Productlist