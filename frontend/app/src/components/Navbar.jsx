import React from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Navbar({data, isLoading}) {

    return (
        <div className="basis-full flex flex-wrap justify-end p-[30px]">
            
            {
                !isLoading && data
                ?
                    <a href={data?.cvlink} target="_blank" rel="noreferrer">
                        <button 
                            className="
                                bg-white 
                                rounded-sm 
                                py-[10px] 
                                px-[30px] 
                                shadow-sm 
                                font-text 
                                hover:text-white 
                                hover:bg-gray-700 
                                transition-colors
                            "
                        >
                            Get my CV
                        </button>
                    </a>
                : <Skeleton width={135} height={44} />
            }

            
        </div>
    );

}