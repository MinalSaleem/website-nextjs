import React from 'react'
import Image from 'next/image';

interface Props {
    title:string;
    image:string;
    price:string;
}

const MenuCard = ({ title, image, price}:Props) => {
  return (
    <div className='bg-slate-100'>

        <div className='bg-white rounded-lg p-6 m-3 flex flex-col hover:scale-110 hover:z-10 duration-100 '>
            
            <div className='w-[200px] mx-auto h-[200px]'>
                <Image src={image} alt={title} width={200} height={200}
                    className='w-[100%] h-[100%] object-cover'
                />
                </div>
            <h1 className='mt-[1.3rem] text-[22px] text-black font-semibold text-center'>{title}</h1>
            

            <div className='flex flex-col items-center space-x-3'>
                <div className='flex bg-slate-200 w-28 justify-center rounded-lg mt-2'>
                    <h1 className='font-semibold text-black py-[2px]'>{price}</h1>
                </div>
                <div className='mt-3'>
                    <button className='bg-cyan-950 text-white font-semibold w-52 rounded-lg py-2 hover:bg-cyan-800 hover:font-bold' >
                        Add to Cart
                    </button>
                </div>

            </div>
        </div>
        
    </div>
  )
}

export default MenuCard;