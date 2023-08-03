import { Product } from "@/utils/types"
import ProductCard from "@/components/ui/ProductCard"
import { StaticImageData } from "next/image"
import { Products } from "@/utils/mock"
import Image from "next/image"
import Quatity from "@/components/Quatity"

const getProductsDetail = (id: number | string) => {

    return Products.filter((product) => product.id == id);


}
const sizes = ["xs", "sm", "md", "lg", "xl"]
export default function Page({ params }: { params: { id: string } }) {
    const result = getProductsDetail(params.id)
    return (
        <div className='flex mt-16 py-10 flex-wrap'>
            {
                result.map((product) => (
                    <div key={product.id} className="flex justify-between gap-6">
                        {/*left image*/}
                        <div>
                            <Image src={product.image} alt={product.name} />
                        </div>
                        {/*right content*/}
                        <div>
                            <div>
                                <h1 className="text-2xl">{product.name} </h1>
                                <h2 className="text-base text-gray-400 font-semibold">{product.tagline}</h2>

                            </div>
                            <div>
                                <h3 className="text-xs font-semibold mt-6 ">SELECT SIZE</h3>
                                {/*SIZES*/}
                                <div className="flex gap-x-3">
                                    {sizes.map((item) => {
                                        return (
                                            <div className="center h-6 w-6 duration-300 rounded-full hover:shadow-xl border mt-2  ">
                                                <span className="text-[10px] text-center font-semibold text-gray-600">{item}</span>
                                            </div>

                                        )
                                    })
                                    }
                                </div>
                                {/*QUANTITY*/}
                                <div className="flex gap-x-3 mt-6 items-center">
                                    <h3 className="text-[10px] font-semibold">Quantity</h3>
                                    <Quatity />
                                </div>
                            </div>
                        </div>

                    </div>
                )

                )}

        </div>

    )
}