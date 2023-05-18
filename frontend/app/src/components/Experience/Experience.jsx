import React from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Experience({experience}) {

    return (
        
        <div 
            className="
                flex 
                flex-wrap 
                items-start 
                mt-6 
                md:mt-2
            "
        >

            <span 
                className="
                    font-text 
                    font-semibold 
                    text-gray-500 
                    text-sm 
                    md:mr-8 
                    md:mt-1 
                    min-w-[180px]
                "
            >
                {experience?.duration || <Skeleton width={170} height={20} />}
            </span>

            <div 
                className="
                    flex 
                    flex-wrap 
                    flex-col 
                    mt-4 
                    md:mt-0 
                    max-w-[500px]
                "
            >

                <span 
                    className="
                        font-text 
                        font-semibold 
                        text-gray-700 
                        text-xl
                    "
                >
                    {experience?.title || <Skeleton width={300} height={30} />}
                </span>

                <span 
                    className="
                        font-text 
                        font-semibold 
                        text-gray-500 
                        text-sm 
                        mt-1
                    "
                >
                    {experience?.company || <Skeleton width={170} />}
                </span>
            
                <span className="font-text text-gray-600 mt-3">
                    <ol className="list-disc list-inside">

                        {
                            experience?.responsibilities 
                            ? 
                                experience?.responsibilities.map((item, index) =>                
                                    <li key={index}>{item}</li>
                                )
                            : 
                                <>
                                    <Skeleton width={500} />
                                    <Skeleton width={500} />
                                    <Skeleton width={500} />
                                </>
                        }
            
                    </ol>
                </span>

            </div>

        </div>
    )

}