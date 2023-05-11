import React from "react";
import Experience from "./Experience";

export default function ExperienceSection({experience}) {
    return (

        <div className="basis-full flex flex-wrap items-center gap-y-[10px] p-[10px] mt-20">

            <h2 className="basis-full font-heading text-2xl font-black text-gray-700 text-center">My Experience</h2>

            <div className="grid grid-flow-row gap-4 mt-8">

                {
                    experience ? experience.map((item, index) =>
                        <Experience key={index} experience={item}/>
                    ) : ''
                }
            </div>

        </div>

        
    )
}