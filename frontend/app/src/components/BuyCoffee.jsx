import React from 'react';
import CoffeeCupIcon from '../assets/img/coffee-cup.png';

export default function BuyCoffee() {

    return (

        <div className='flex flex-wrap gap-y-2.5'>

            <div className='flex flex-wrap items-center gap-x-[10px]'>

                <img className='w-[36px] h-[36px]' src={CoffeeCupIcon}></img> 
                <span className='font-heading text-2xl font-bold'>Buy Me A Coffee</span>

            </div>

            <span className='basis-full'></span>

            <div className='flex flex-wrap'>
                <button type='submit' className='rounded-full'>1</button>
            </div>
    
        </div>


    );

}