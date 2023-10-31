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

            <div className='space-x-3 font-semibold font-sans text-lg text-black hover:text-blue-700'>
                <Link href={"/"}>Home</Link>
                <Link href={"/about"}>About</Link>
                <Link href={"/services"}>Services</Link>
                <Link href={"/contact"}>Contact</Link>
            </div>
        </nav>
    )
}
