import React from "react";
import Experience from "./Experience";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function ExperienceSection({experience, isLoading}) {
    return (

        <div 
            className="
                basis-full 
                flex 
                flex-wrap 
                items-center 
                gap-y-[10px] 
                p-[10px] 
                mt-20
            "
        >
            <h2 
                className="
                    basis-full 
                    font-heading 
                    text-2xl 
                    font-black 
                    text-gray-700 
                    text-center
                ">
                    {!isLoading ? "My Experience" : <Skeleton width={160} height={32} />}
            </h2>

            <div 
                className="
                    grid 
                    grid-flow-row 
                    gap-4 
                    mt-8
                "
            >

                {
                    !isLoading && experience 
                    ? 
                        experience.map((item, index) =>
                            <Experience 
                                key={index} 
                                experience={item}
                            />
                        ) 
                    : ''
                }
            </div>

        </div>

        
    )
}