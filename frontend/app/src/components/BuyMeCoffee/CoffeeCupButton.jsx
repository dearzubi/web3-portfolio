import React from "react";

export default function CoffeeCupButton({cupNumber, coffeeCount, setCoffeeCount}){

    return (

        <button
            className={`rounded-sm px-[20px] py-[5px] ${coffeeCount == cupNumber ? 'bg-gray-700 text-white' : 'bg-white text-gray-700'} shadow-sm font-text hover:text-white hover:bg-gray-700 transition-colors`}
            type='submit' 
            onClick={() => setCoffeeCount(cupNumber)}>
            x{cupNumber}
        </button>

    );

}