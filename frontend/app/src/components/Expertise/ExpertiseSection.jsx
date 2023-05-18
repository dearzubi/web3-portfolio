import React from "react";
import Expertise from "./Expertise";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function ExpertiseSection({expertise, isLoading}) {

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
                    {!isLoading ? "My Expertise" : <Skeleton width={160} height={32} />}
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
                    !isLoading && expertise 
                    ? 
                        expertise.map((item, index) => 
                    
                            <Expertise 
                                key={index} 
                                expertise={item} 
                            />
                        ) 
                    : 
                        <>
                            <Skeleton width={300} height={168} />
                            <Skeleton width={300} height={168} />
                            <Skeleton width={300} height={168} />
                        </>
                }
                
            </div>

        </div>

        
    )
}