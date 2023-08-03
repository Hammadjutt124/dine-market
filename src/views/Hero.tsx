import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import heroImage from "/public/hero-img.webp"
import Image from 'next/image'
import bazar from "public/bazar.webp"
import bustle from "public/bustle.webp"
import versace from "public/versace.webp"
import instyle from "public/instyle.webp"

const Hero = () => {
    return (
        <section className='flex flex-col lg:flex-row gap-y-10  py-6 '>
            {/*left div */}
            <div className='flex-1'>
                <Badge className='py-3 px-6 rounded-lg bg-blue-200 text-blue-700 '>Sale 70%</Badge>
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-6">
                    An Industrial Take on Streetwear
                </h1>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                    Once upon a time, in a far-off land, there was a very lazy king who
                    spent all day lounging on his throne. One day, his advisors came to him
                    with a problem: the kingdom was running out of money.
                </p>
                <Button className='bg-black h-12 px-8 mt-4'>Start Shoping</Button>
                <div>
                    <button className='flex items-center justify-between gap-3'>
                        <div className='w-12 md:w-24'> <Image width={100} height={100} className='mt-6 ' src={bazar} alt='bazar' /></div>
                        <div className='w-12 md:w-24'><Image width={100} height={100} className='mt-6  ' src={bustle} alt='bazar' /></div>
                        <div className='w-12 md:w-24'> <Image width={100} height={100} className='mt-6 ' src={versace} alt='bazar' /></div>
                        <div className='w-12 md:w-24'>   <Image width={100} height={100} className='mt-6 ' src={instyle} alt='bazar' /></div>

                    </button>

                </div>
                <div>

                </div>
                {/* <div>
                    <Image />
                    <Image />
                    <Image />
                    <Image />
                </div> */}

            </div>
            {/*right div  */}
            <div className='flex-1 bg-gray-200 rounded-full w-100 h-100'>
                <Image src={heroImage} alt='hero' />
            </div>

        </section>
    )
}

export default Hero