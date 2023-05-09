import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Expertise({expertise, icon}) {
    return (
        
        <div className="flex flex-wrap shadow-md p-[20px] bg-white justify-center rounded-md xl:max-w-[400px]">
            <div className="basis-full flex flex-wrap justify-center items-center">
                <FontAwesomeIcon className="basis-full text-xl text-gray-700 font-semibold" icon={icon} />
                <span className="text-center font-text font-semibold text-gray-700 text-lg mt-3">{expertise?.title}</span>
            </div>
            <span className="basis-full text-center font-text text-gray-600 mt-4">
                {expertise?.description}
            </span>
        </div>
    )
}