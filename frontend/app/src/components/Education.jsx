import React from "react";

export default function Education({education}) {

    return (
        
        <div className="flex flex-wrap items-start mt-6 md:mt-2">

            <span className="font-text font-semibold text-gray-500 text-sm md:mr-5 md:mt-1 min-w-[180px]">
                {education?.duration}
            </span>

            <div className="flex flex-wrap flex-col mt-4 md:mt-0 lg:max-w-[450px] xl:max-w-[600px] 2xl:max-w-max">

                <span className="font-text font-semibold text-gray-700 text-xl">
                    {education?.title}
                </span>
                <span className="font-text font-semibold text-gray-500 text-sm mt-1">
                    {education?.institute}
                </span>
            
                <span className="font-text text-gray-600 mt-3">
                    <ol className="list-disc list-inside">

                        {
                            education?.achievements.map((item, index) =>                
                                <li key={index}>{item}</li>
                            )
                        }
            
                    </ol>
                </span>

            </div>

        </div>
    )

}