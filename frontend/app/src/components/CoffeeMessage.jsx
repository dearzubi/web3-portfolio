import React from "react";

export default function CoffeeMessage({msg}){

    return (
        <div className="flex flex-col gap-2 shadow-sm bg-white p-4">
            <span className="font-text font-semibold text-gray-700">{msg.name} sent {msg.amount} {msg.currency}</span>
            <span className="font-text text-gray-600">{msg.message}</span>
        </div>
    )

}