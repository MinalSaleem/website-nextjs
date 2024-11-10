"use client"
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };
  
export default function Hero() {
  return (
    <div>
        <div><h1 className='text-cyan-950 text-5xl font-serif font-bold shadow-md border-[4px] shadow-slate-400 mb-6 mx-6 text-center py-9 h-32 tracking-widest'>SOFT SWIRL</h1>
        </div>
        <Carousel 
            additionalTransfrom={0} 
            arrows={false} 
            autoPlay={true} 
            autoPlaySpeed={3000} 
            centerMode={false} 
            infinite 
            responsive={responsive} 
            itemClass='item' 
            showDots={true} 
        >
            <div className='w-[100%] h-[50vh] flex flex-col items-center justify-center bg-slate-100'>
              <div>
                <Image 
                  src="/new1.png"
                  alt="Cone"
                  width={900}
                  height={300}
                  className='rounded-lg'
                  />
                </div>
            </div>

            <div className='w-[100%] h-[50vh] flex flex-col items-center justify-center bg-slate-100 '>
              <div>
                <Image 
                  src="/new2.png"
                  alt="Cone"
                  width={900}
                  height={300}
                  className='rounded-lg'
                  />
                </div>
            </div>

        </Carousel>

        


    </div>
  )
}
