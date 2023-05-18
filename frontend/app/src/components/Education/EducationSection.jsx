import React from "react";
import Education from "./Education";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function EducationSection({education, isLoading}) {
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
                    {!isLoading ? "My Education" : <Skeleton width={160} height={32} />}
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
                    !isLoading && education 
                    ? 
                        education.map((item, index) =>
                            <Education 
                                key={index} 
                                education={item}
                            />
                        ) 
                    : ''
                }

            </div>

        </div>

        
    )
}