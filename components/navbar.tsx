import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { NavigationItemCard } from './navigation-item-card'

export default function Navbar() {
    return (
        <div className='sticky top-0 w-full z-50'>
            <nav className='bg-white flex items-center justify-between px-5 shadow-md'>
                <div className=''>
                    <Link href={"/"}>
                        <Image
                            src={"/logo.jpeg"}
                            height={70}
                            width={70}
                            className='object-contain'
                            alt='logo'
                        />
                    </Link>
                </div>

                <div className='space-x-3 font-semibold font-sans text-lg flex items-center md:pe-40'>
                    <Link className='text-black hover:text-blue-700' href={"/"}>Home</Link>
                    <NavigationItemCard />
                    <Link className='text-black hover:text-blue-700' href={"/about"}>About</Link>
                    <Link className='text-black hover:text-blue-700' href={"/contact"}>Contact</Link>
                </div>
            </nav>
        </div>
    )
}
