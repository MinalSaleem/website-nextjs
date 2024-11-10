import React from 'react'
import Image from 'next/image'

export default function Contact() {
  return (
    <div className='bg-slate-100 flex flex-col px-4 md:px-6 py-8 md:py-12'>

        <h1 className='text-center text-cyan-950 font-semibold text-3xl md:text-5xl pb-6 md:pb-10'>Contact Us</h1>

        <div className='flex flex-col md:flex-row gap-6 md:gap-20 px-4 md:px-20'>
            
            <div className=' w-full md:w-1/2 flex justify-center md:justify-start shadow-md shadow-slate-400 rounded-3xl hover:scale-105 hover:z-10 duration-150'>
                <Image 
                    src="/contact1.jpg"
                    alt="Cone"
                    width={800}
                    height={300}
                    className=' rounded-3xl w-full'
                />
            </div>

            <div className='w-full md:w-1/2'>
            <form className='bg-white shadow-md shadow-slate-400 rounded-3xl p-6'>
                <div className='flex flex-col gap-4'></div>
                <label className='font-semibold text-cyan-950'>Name:</label><br />
                <input type='text' placeholder='Your Name' name='name' required
                className='bg-gray-100 py-3 px-4 rounded-md w-full'/><br />

                <label className='font-semibold text-cyan-950'>Phone:</label><br />
                <input type='number' placeholder='Your Phone' name='number' required 
                className='bg-gray-100 py-3 px-4 rounded-md w-full'/><br />

                <label className='font-semibold text-cyan-950'>Email:</label><br />
                <input type='email' placeholder='Your Email' name='email' required
                className='bg-gray-100 py-3 px-4 rounded-md w-full' /><br />

                <label className='font-semibold text-cyan-950'>Message:</label><br />
                <textarea placeholder='Your Message' name='message' rows={4}
                className='bg-gray-100 py-3 px-4 rounded-md w-full'></textarea><br />

                <button className='bg-cyan-950 text-white py-3 px-6 mt-4 font-bold w-full rounded-md hover:bg-cyan-800 hover:font-extrabold'>Send Your Message</button>
            </form>
            </div>

        </div>
    </div>
  )
}
