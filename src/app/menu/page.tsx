import React from 'react'
import MenuCard from './MenuCard'

export default function Menu() {
  return (
    <div className='bg-slate-100'>
        <div><h1 className='text-cyan-950 text-5xl font-serif font-bold shadow-md border-[4px] shadow-slate-400 mb-6 mx-6 text-center py-9 h-32 tracking-widest'>VANILLA SWIRLS</h1>
        </div>
        
        <div className='mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-10 content-around px-5'>
            <MenuCard 
                title="Vanilla Swirl" 
                image="/Vanilla Swirl.webp" 
                price="PKR 140" 
            />
            <MenuCard 
                title="Vanilla Nutty Swirl" 
                image="/Nutty Swirl.webp" 
                price="PKR 210" 
            />
            <MenuCard 
                title="Vanilla Brownie Swirl" 
                image="/Brownie Swirl.webp" 
                price="PKR 210" 
            />
            <MenuCard 
                title="Double Vanilla Swirl" 
                image="/Vanilla Swirl.webp" 
                price="PKR 140" 
            />
        </div>

        <div><h1 className='text-cyan-950 text-5xl font-serif font-bold shadow-md border-[4px] shadow-slate-400 mb-6 mt-14 mx-6 text-center py-9 h-32 tracking-widest'>CHOCOLATE SWIRLS</h1>
        </div>
        
        <div className='mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-10 content-around px-5'>
            <MenuCard 
                title="Chocolate Swirl" 
                image="/Chocolate Swirl.webp" 
                price="PKR 170" 
            />
            <MenuCard 
                title="Chocolate Oreo Swirl" 
                image="/Chocolate Oreo Swirl.webp" 
                price="PKR 240" 
            />
            <MenuCard 
                title="Choco Brownie Swirl" 
                image="/Chocolate Brownie Swirl.webp" 
                price="PKR 240" 
            />
            <MenuCard 
                title="Chocolate Nutty Swirl" 
                image="/Chocolate Nutty Swirl.webp" 
                price="PKR 240" 
            />
        </div>

        <div><h1 className='text-cyan-950 text-5xl font-serif font-bold shadow-md border-[4px] shadow-slate-400 mb-6 mt-14 mx-6 text-center py-9 h-32 tracking-widest'>VANILLA TWISTERS</h1>
        </div>
        
        <div className='mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-10 content-around px-5'>
            <MenuCard 
                title="Cocomo Express" 
                image="/Cocomo Express.webp" 
                price="PKR 460" 
            />
            <MenuCard 
                title="Oreo Supernova" 
                image="/Oreo Supernova.webp" 
                price="PKR 460" 
            />
            <MenuCard 
                title="M&M Mile" 
                image="/MnM Mile.webp" 
                price="PKR 490" 
            />
            <MenuCard 
                title="Kit Kat Connection" 
                image="/KitKat Connection.webp" 
                price="PKR 490" 
            />
        </div>
        

    </div>
  )
}
