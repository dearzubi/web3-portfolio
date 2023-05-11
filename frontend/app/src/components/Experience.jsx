import React from "react";

export default function Experience({experience}) {

    return (
        
        <div className="flex flex-wrap items-start mt-6 md:mt-2">

            <span className="font-text font-semibold text-gray-500 text-sm md:mr-8 md:mt-1 min-w-[180px]">
                {experience?.duration}
            </span>

            <div className="flex flex-wrap flex-col mt-4 md:mt-0 max-w-[500px]">

                <span className="font-text font-semibold text-gray-700 text-xl">
                    {experience?.title}
                </span>
                <span className="font-text font-semibold text-gray-500 text-sm mt-1">
                    {experience?.company}
                </span>
            
                <span className="font-text text-gray-600 mt-3">
                    <ol className="list-disc list-inside">

                        {
                            experience?.responsibilities.map((item, index) =>                
                                <li key={index}>{item}</li>
                            )
                        }
            
                    </ol>
                </span>

            </div>

        </div>
    )

}