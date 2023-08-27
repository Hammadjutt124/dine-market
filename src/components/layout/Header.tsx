"use client"

// import Image from "next/image";
// import { Search, ShoppingCart } from "lucide-react";
// import {
//     NavigationMenu,
//     NavigationMenuContent,
//     NavigationMenuIndicator,
//     NavigationMenuItem,
//     NavigationMenuLink,
//     NavigationMenuList,
//     NavigationMenuTrigger,
//     NavigationMenuViewport,
// } from "./../ui/navigation-menu";


// const Navbar = () => {
//     return (
//         <nav className="flex justify-between items-center h-20 px-20">
//             <Image src={"/Logo.webp"} alt="website logo" width={150} height={150} />
//             <div>
//                 <NavigationMenu>
//                     <NavigationMenuList>
//                         <NavigationMenuItem className="space-x-5">

//                             <NavigationMenuTrigger>Male</NavigationMenuTrigger>






//                             <NavigationMenuTrigger>
//                                 Female
//                             </NavigationMenuTrigger>

//                             <NavigationMenuTrigger>Kids</NavigationMenuTrigger>
//                             <NavigationMenuTrigger>All Products</NavigationMenuTrigger>
//                             <NavigationMenuContent>
//                                 <NavigationMenuLink></NavigationMenuLink>
//                             </NavigationMenuContent>
//                         </NavigationMenuItem>
//                     </NavigationMenuList>
//                 </NavigationMenu>
//             </div>
//             <div className="flex">
//                 <Search className="bg-white rounded-l" />{" "}
//                 <input
//                     type="text"
//                     placeholder="What you are looking for"
//                     className="rounded-r"
//                 ></input>
//             </div>
//             <div className="p-2 rounded-full bg-gray-300">
//                 <ShoppingCart className="relative" />
//                 <span className="absolute top-2 right-20 h-6 w-6 text-center rounded-full bg-[#f02d34] text-white">
//                     0
//                 </span>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;






import React from 'react'
import Logo from "/public/Logo.webp"
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart } from "lucide-react"
import { Input } from "@/components/ui/input"

const Header = () => {
    return (
        <div className='flex justify-between items-center py-6 px-8  '>
            <Link href={'/'}>
                <Image src={Logo} alt='logo' className='w-40' />
            </Link>

            <ul className='flex gap-x-5'>
                <li className='text-lg'>
                    <Link href={"/female/Female"}>
                        Female
                    </Link>
                </li>
                <li className='text-lg'>
                    <Link href={"/male/Male"}>
                        Male
                    </Link>
                </li>
                <li className='text-lg'>
                    <Link href={"/kid"}>
                        Kid
                    </Link>
                </li>
                <li className='text-lg'>

                    <Link href={"/products"}>
                        All Products
                    </Link>
                </li>
            </ul>

            <div className='border flex items-center text-gray-600 px-3 rounded-md'>

                <Input
                    type='text'
                    className='pl-1 pr-5 py-1 w-80'
                    placeholder='Search in Our Store'
                />
            </div>
            <div className='flex justify-center items-center h-10 w-10 rounded-full bg-gray-300 '>
                <ShoppingCart className='h-6 w-6' />
            </div>

        </div>
    )
}

export default Header