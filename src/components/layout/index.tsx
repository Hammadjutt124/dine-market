

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






// import React from 'react'
// import Logo from "/public/Logo.webp"
// import Image from 'next/image'
// import Link from 'next/link'
// import { ShoppingCart } from "lucide-react"
// import { Input } from "@/components/ui/input"
// import ContextWrapper from '@/global/context'

// const Header = () => {
//     return (

//         <div className='flex justify-between items-center py-6 px-8  '>
//             <Link href={'/'}>
//                 <Image src={Logo} alt='logo' className='w-40' />
//             </Link>

//             <ul className='flex gap-x-5'>
//                 <li className='text-lg'>
//                     <Link href={"/female/Female"}>
//                         Female
//                     </Link>
//                 </li>
//                 <li className='text-lg'>
//                     <Link href={"/male/Male"}>
//                         Male
//                     </Link>
//                 </li>
//                 <li className='text-lg'>
//                     <Link href={"/kid"}>
//                         Kid
//                     </Link>
//                 </li>
//                 <li className='text-lg'>

//                     <Link href={"/products"}>
//                         All Products
//                     </Link>
//                 </li>
//             </ul>

//             <div className='border flex items-center text-gray-600 px-3 rounded-md'>

//                 <Input
//                     type='text'
//                     className='pl-1 pr-5 py-1 w-80'
//                     placeholder='Search in Our Store'
//                 />
//             </div>
//             <div className='flex justify-center items-center h-10 w-10 rounded-full bg-gray-300 '>
//                 <ShoppingCart className='h-6 w-6' />
//             </div>

//         </div>

//     )
// }

// export default Header



"use client"
import { IoMdClose } from "react-icons/io"
import { GiHamburgerMenu } from "react-icons/gi"
import { useState } from "react"
import { HiOutlineChevronDown } from "react-icons/hi"
import { BiSearch } from "react-icons/bi"
import { NavbarArray, NavbarItemType } from "@/components/utils/NavbarArrayAndTypes"
import Image from "next/image"
import Link from "next/link"
import DropDown from "./subComponents/DropDown"
import Expand from "./subComponents/Expand"
import { useRouter } from "next/navigation"
import ContextWrapper from "@/global/context"
import Cartstate from "./subComponents/Cartstate"


const Navbar = () => {
    const router = useRouter();
    const [isNavbarOpen, setNavbarOpen] = useState<boolean>(false);
    const [searchQuery, setSearchQuery] = useState("");


    function handleSerachCalledFunc(e: any) {
        if (e.key === "Enter" && e.keyCode === 13) {
            router.push(`/search/${searchQuery}`);
        }
    }

    return (
        <ContextWrapper>
            <div className="sticky top-0 backdrop-blur-lg bg-gradient-to-tr from-white via-[#ffffffde] to-opacityDownColor z-20">
                <div className="py-5 flex justify-between items-center gap-8">
                    <Link href="/" className="w-36 flex-shrink-0">
                        <Image width={500} height={500} src={"/Logo.webp"} alt="Logo" />
                    </Link>
                    <div className="hidden lg:flex justify-between items-center w-full">
                        <ul className="flex space-x-4 font-medium text-lg text-purple-950">
                            {NavbarArray.map((item: NavbarItemType, index: number) => (
                                <li key={index} className="flex items-center relative rounded-sm px-3 py-1 hover:bg-gray-100 cursor-pointer group">
                                    <Link href={item.href} >{item.label}</Link>
                                    {item.isDropDown ? <HiOutlineChevronDown className="mt-1 -rotate-180 group-hover:rotate-0 duration-300" size={15} /> : ""}
                                    {item.isDropDown && <div className={`invisible group-hover:visible absolute top-8 left-0 py-2 px-6 bg-gray-100 font-light min-w-[7.8rem]`}>
                                        <DropDown item={item} />
                                    </div>}
                                </li>
                            ))}
                        </ul>
                        <div className="border flex items-center bg-white text-gray-600 pl-3 rounded-md" >
                            <Link href={`/search/${searchQuery}`}><BiSearch /></Link>
                            <input
                                type="text"
                                value={searchQuery}
                                onKeyDown={handleSerachCalledFunc}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="focus:outline-none pl-1 pr-5 py-1 w-80 rounded-r-md"
                                placeholder="Search in Our Store"
                            />
                        </div>
                        <Link href={"/cart"}>
                            <Cartstate />
                        </Link>
                    </div>
                    <div className="cursor-pointer" onClick={() => setNavbarOpen(!isNavbarOpen)}>
                        {isNavbarOpen ?
                            <div className="flex lg:hidden">
                                <IoMdClose size={29} />
                            </div>
                            :
                            <div className="flex lg:hidden">
                                <GiHamburgerMenu size={25} />
                            </div>
                        }
                    </div>
                </div>
                {
                    isNavbarOpen && <MobileNavbar />
                }
            </div>
        </ContextWrapper>
    )
}

export default Navbar


const MobileNavbar = () => {
    return (
        <div className="w-full px-6 py-4 bg-gray-100">
            {
                NavbarArray.map((item: NavbarItemType, index: number) => {
                    return (
                        <Expand key={index} item={item} />
                    )
                })
            }
        </div>
    )
}