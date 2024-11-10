import React from 'react'
import Image from 'next/image'

export default function About() {
  return (
    <div className='bg-slate-100 flex flex-col px-4 md:px-6 py-8 md:py-11'>

        <h1 className='text-center text-cyan-950 font-semibold md:text-5xl pb-6 md:pb-11'>About Us</h1>

        <div className='flex flex-col md:flex-row gap-6 md:gap-10 mx-0 md:mx-10'>
                    
            <div className='w-full flex justify-center shadow-md shadow-slate-400 rounded-3xl hover:scale-105 hover:z-10 duration-150'>
                <Image 
                    src="/about1.png"
                    alt="IceCream"
                    width={600}
                    height={300}
                    className='rounded-3xl w-full md:w-auto'
                />
            </div>

            <div className= 'bg-white shadow-md shadow-slate-400 rounded-3xl w-full p-4 md:p-7'>
                <p className='font-semibold text-cyan-950 text-base md:text-xl'>Leading Pakistani chain offering premium soft serve ice cream in all major cities across the country .Experience the creamy, dreamy delight of our soft swirl ice cream! Each luscious swirl is a perfect blend of velvety texture and rich flavor, crafted to tantalize your taste buds. From classic vanilla to decadent chocolate and fruity strawberry, every bite is a celebration of sweetness.</p>

            </div>
        </div>
    </div>
  )
}
