import React from "react";
import Project from "./Project";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function ProjectsSection({projects, isLoading}) {
    return (

        <div 
            className="
                basis-full 
                flex 
                flex-wrap 
                items-center 
                justify-center 
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
                    {!isLoading ? "My Projects" : <Skeleton width={160} height={32} />}
            </h2>

            <div 
                className="
                    grid 
                    grid-flow-row 
                    md:grid-cols-3 
                    gap-4 
                    mt-8
                    "
            >

                {
                    !isLoading && projects 
                    ? 
                        projects.map((item, index) => 
                    
                            <Project 
                                key={index} 
                                project={item}
                            />

                        ) 
                    :
                        <>
                            <Skeleton width={300} height={300} />
                            <Skeleton width={300} height={300} />
                            <Skeleton width={300} height={300} />
                        </>
                }
            </div>

        </div>

        
    )
}