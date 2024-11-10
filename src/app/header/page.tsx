"use client"
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='bg-slate-100'>

        <div className='px-4 md:px-6 py-4 flex justify-between items-center'>

            <div className={`flex-col md:flex md:flex-row gap-4 md:gap-14 text-gray-700 ${isOpen ? 'flex' : 'hidden'} md:flex`}>
            <Link href={'/'} className='text-base hover:font-semibold active:font-bold active:text-cyan-900 md:text-lg '>Home</Link>
            <Link href={'/menu'} className='text-base hover:font-semibold active:font-bold active:text-cyan-900 md:text-lg '>Menu</Link>
            <Link href={'/about'} className='text-base hover:font-semibold active:font-bold active:text-cyan-900 md:text-lg '>About Us</Link>
            <Link href={'/contact'} className='text-base hover:font-semibold active:font-bold active:text-cyan-900 md:text-lg '>Contact Us</Link>
            </div>

            <div className='md:hidden'>
              <button onClick={toggleMenu}>
                <FaBars size={24} />
              </button>
            </div>

            <div>
                <button className='bg-cyan-950 text-white text-sm font-bold rounded-lg hover:bg-cyan-800 hover:font-extrabold md:text-lg w-full md:w-60 py-2 md:py-4 px-5'>Order Now</button>
            </div>
        </div>
    </div>
  )
}
