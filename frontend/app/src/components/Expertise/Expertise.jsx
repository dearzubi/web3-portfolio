import React from "react";

export default function Expertise({expertise}) {
    return (
        
        <div className="flex flex-wrap shadow-md p-[20px] bg-white justify-center rounded-md xl:max-w-[400px]">
            <div className="basis-full flex flex-wrap justify-center items-center">
                <span className="text-center font-text font-semibold text-gray-700 text-lg mt-3">{expertise?.title}</span>
            </div>
            <span className="basis-full text-center font-text text-gray-600 mt-4">
                {expertise?.description}
            </span>
        </div>
    )
}