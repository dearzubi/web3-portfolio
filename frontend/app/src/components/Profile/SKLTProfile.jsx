import React from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function SKLTProfile(){

    return (
        <>
            <Skeleton 
                circle height="100%" 
                containerClassName="
                    avatar-skeleton 
                    w-[260px] 
                    h-[260px]
                "
            />
            <Skeleton
                width={160} 
                height={30}
                containerClassName="basis-full text-center mt-3"
            />
            <Skeleton
                height={60}
                containerClassName="basis-full text-center mt-8"
            />
            <Skeleton 
                containerClassName="basis-full"
            />
            <Skeleton 
                containerClassName="basis-full"
            />
            <Skeleton 
                width={160} 
                height={40} 
                containerClassName="basis-full text-center"
            />

        </>
    );

}