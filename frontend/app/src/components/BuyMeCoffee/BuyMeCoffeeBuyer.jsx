import React from "react";

export default function BuyMeCoffeeBuyer({buyerDetails, setBuyerDetails}) {
    return (
        <div className='flex flex-col gap-y-3'>

            <span className='font-text text-gray-600 font-semibold'>
                Your name (optional)
            </span>

            <input 
                className='rounded-sm shadow-sm  h-10 p-1 font-text text-md focus:outline-none' 
                value={buyerDetails?.name} 
                onChange={(e) => setBuyerDetails({
                    name: e.target.value,
                    linkedin: buyerDetails?.linkedin,
                    message: buyerDetails?.message
                })}>
            </input>

            <span className='font-text text-gray-600 font-semibold'>
                    Your linkedin (optional)
            </span>

            <input 
                className='rounded-sm shadow-sm  h-10 p-1 font-text text-md focus:outline-none' 
                value={buyerDetails?.linkedin} 
                onChange={(e) => setBuyerDetails({
                    name: buyerDetails?.name,
                    linkedin: e.target.value,
                    message: buyerDetails?.message
                })}>
            </input>

            <span className='font-text text-gray-600 font-semibold mt-2'>
                Your message (optional)
            </span>

            <textarea 
                className='rounded-sm shadow-sm p-1 font-text text-md focus:outline-none' 
                maxLength={100} 
                rows={5} 
                value={buyerDetails?.message} 
                onChange={(e) => setBuyerDetails({
                    name: buyerDetails?.name,
                    linkedin: buyerDetails?.linkedin,
                    message: e.target.value,
                })}>
            </textarea>
        </div>
    );
}