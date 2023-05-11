import React from "react";
import Education from "./Education";

export default function EducationSection({education}) {
    return (

        <div className="basis-full flex flex-wrap items-center gap-y-[10px] p-[10px] mt-20">

            <h2 className="basis-full font-heading text-2xl font-black text-gray-700 text-center">My Education</h2>

            <div className="grid grid-flow-row gap-4 mt-8">

                {
                    education ? education.map((item, index) =>
                        <Education key={index} education={item}/>
                    ) : ''
                }

            </div>

        </div>

        
    )
}