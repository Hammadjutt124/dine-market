import React from 'react'
import Logo from "/public/Logo.webp"
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart } from "lucide-react"

const Header = () => {
    return (
        <div className='flex justify-between items-center py-6 px-8  '>
            <Link href={'/'}>
                <Image src={Logo} alt='logo' className='w-40' />
            </Link>
            <ul className='flex gap-x-3'>
                <li className='text-lg'>
                    <Link href={"/category/female"}>
                        Female
                    </Link>
                </li>
                <li className='text-lg'>
                    <Link href={"/category/male"}>
                        Male
                    </Link>
                </li>
                <li className='text-lg'>
                    <Link href={"/category/kids"}>
                        Kids
                    </Link>
                </li>
                <li className='text-lg'>
                    <Link href={"/products"}>
                        All Products
                    </Link>
                </li>
            </ul>
            {/* <div className='border flex items-center text-gray-600 px-3 rounded-md'>
                <BiSearch />
                <input
                    type='text'
                    className='pl-1 pr-5 py-1 w-80'
                    placeholder='Search in Our Store'
                />
            </div> */}
            <div className='flex justify-center items-center h-10 w-10 rounded-full bg-gray-300 '>
                <ShoppingCart className='h-6 w-6' />
            </div>

        </div>
    )
}

export default Header