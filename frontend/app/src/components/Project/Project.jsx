import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

export default function Project({project}) {
    return (
        
        <div className="flex flex-wrap shadow-md p-[20px] bg-white justify-center rounded-md xl:max-w-[400px]">

            <div className="basis-full flex flex-wrap justify-center items-center">

                <a href={project?.link} target="_blank" className="basis-full">

                    <img className="h-[250px]" src={project?.imageUrl} />

                </a>
                
                <a href={project?.link} target="_blank" className="text-center font-text font-semibold text-gray-700 text-lg mt-4">

                    <span>
                        {project?.title} <FontAwesomeIcon className="text-[14px] ml-2" icon={faArrowUpRightFromSquare} />
                    </span>

                </a>
                
            </div>
            
            <span className="basis-full font-text text-gray-600 mt-2">
                {project?.description}
            </span>
            <span className="text-start font-text text-gray-700 mt-4">
                <span className="font-semibold">Tech Stack:</span> {project?.techStack}
            </span>
            
        </div>
    )
}