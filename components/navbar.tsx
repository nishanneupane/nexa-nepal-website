import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <nav className='bg-white flex items-center justify-between px-5 z-50'>
            <div className='h-full w-full'>
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

            <div className='space-x-3 font-semibold font-sans text-lg '>
                <Link className='text-black hover:text-blue-700' href={"/"}>Home</Link>
                <Link className='text-black hover:text-blue-700' href={"/about"}>About</Link>
                <Link className='text-black hover:text-blue-700' href={"/services"}>Services</Link>
                <Link className='text-black hover:text-blue-700' href={"/contact"}>Contact</Link>
            </div>
        </nav>
    )
}
