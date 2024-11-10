import React from 'react'
import Image from 'next/image'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";
import Link from 'next/link';

export default function Footer() {
  return (
    <div className=' bg-slate-100 flex flex-col px-4 py-8 md:px-6 md:py-11'>

        <div className='flex flex-col bg-slate-200 mx-2 rounded-lg  md:rounded-2xl mt-8 md:mt-16 py-8 md:py-16 md:flex-row md:mx-14'>
            <div className='flex flex-col items-center md:flex-row md:items-start'>
                <div className='hover:scale-105 hover:z-10 transition-transform duration-150 mb-6 md:mb-0'>
                    <Image 
                        src="/contact2.png"
                        alt="Logo"
                        width={150}
                        height={150}
                        className='w-36 h-36 md:w-72 md:h-72'
                    />
                </div>

                <div className='pt-4 flex flex-col text-center  md:text-left md:ml-8'>
                    <h3 className='font-bold text-lg text-cyan-900 pb-2 md:text-xl'>Contact Us</h3>
                    <p className='font-semibold text-cyan-900 flex items-center justify-center md:justify-start pb-1'><FaPhoneAlt className='pr-1' size={24}/>+92 123456</p>
                    <p className='text-cyan-900 font-semibold flex items-center justify-center md:justify-start pb-1'><MdEmail className='pr-1' size={24}/>email@gmail.com</p>
                    <p className='font-semibold text-cyan-900 flex items-center justify-center md:justify-start'><IoLocation size={24}/></p>
                </div>
            </div>

            <div className='flex flex-col md:flex-row items-center gap-2 mt-6 md:mt-16 md:ml-auto md:mr-12'>
                <h1 className='font-semibold text-2xl tracking-wider text-cyan-900 md:text-4xl text-center md:text-left'>Join Us:</h1>

                <Link href="https://github.com/MinalSaleem" 
                    target="_blank"
                    rel="noopener noreferrer" >
                <FaLinkedinIn size={42} className='text-2xl md:text-4xl text-cyan-950' />
                </Link>

                <Link href="https://www.linkedin.com/in/minalsaleem" 
                    target="_blank"
                    rel="noopener noreferrer" >
                <FaGithub size={42} className='text-2xl md:text-4xl text-cyan-950' />
                </Link>
            </div>
        </div>

        <div className='flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2 justify-center py-2 text-gray-600 text-xs md:text-base'>
                <FaRegCopyright /><p>Copyright Rimel 2022. All right reserved</p>
        </div>

    </div>
  )
}
