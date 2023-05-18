import React from "react";
import CoffeeCupIcon from '../../assets/img/coffee-cup.png';
import CoffeeCupButton from './CoffeeCupButton';

export default function BuyMeCoffeeCups({coffeeCount, setCoffeeCount}) {

    return (

        <>
    
            <span className='font-text text-gray-600 font-semibold mt-3'>
                Select the number of coffees
            </span>

            <div className='flex flex-wrap items-center gap-2'>

                <img 
                    className='w-[30px] h-[30px] mr-4' 
                    src={CoffeeCupIcon}>
                </img> 

                <div className='flex flex-wrap gap-2'>

                    <CoffeeCupButton 
                        cupNumber={1} 
                        coffeeCount={coffeeCount} 
                        setCoffeeCount={setCoffeeCount}
                    />
                    <CoffeeCupButton 
                        cupNumber={3} 
                        coffeeCount={coffeeCount}
                        setCoffeeCount={setCoffeeCount}
                    />
                    <CoffeeCupButton 
                        cupNumber={5} 
                        coffeeCount={coffeeCount} 
                        setCoffeeCount={setCoffeeCount}
                    />
                
                </div>
            </div>

            <div className='flex flex-col mt-2'>

                <span className='font-text text-gray-700'>
                    Can't find the right amount?
                </span>

                <span className='font-text text-gray-700'>
                    Enter a custom one:
                </span>

                <input
                    className='rounded-sm shadow-sm  max-w-[100px] h-8 p-1 mt-2 font-text text-md focus:outline-none' 
                    type='number' 
                    min='1' 
                    value={coffeeCount} 
                    onChange={(e) => setCoffeeCount(e.target.value)}>
                </input>
            </div>

        
        </>

    );

}