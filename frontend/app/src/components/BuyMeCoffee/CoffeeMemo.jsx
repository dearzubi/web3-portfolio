import React from "react";

export default function CoffeeMemo({memo}){

    return (
        <div className="flex flex-col gap-2 shadow-md bg-white p-4">
            <span className="font-text font-semibold text-gray-700">
                {memo.name || 'Annoymous'} sent {memo.amount} {memo.currency}
            </span>

            {
                memo.message
                ?
                <span className="font-text text-gray-600">
                    {memo.message}
                </span>
                : null
            }

            {
                memo.linkedin 
                ? <a href={memo.linkedin} target="_blank" rel="noreferrer" className="font-text text-gray-600 underline">
                    {memo.name}'s LinkedIn
                </a> : null
            }

            
        </div>
    )

}