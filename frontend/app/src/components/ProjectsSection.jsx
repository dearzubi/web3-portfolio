import React from "react";
import Project from "./Project";

export default function ProjectsSection({projects}) {
    return (

        <div className="basis-full flex flex-wrap items-center justify-center gap-y-[10px] p-[10px] mt-20">

            <h2 className="basis-full font-heading text-2xl font-black text-gray-700 text-center">My Projects</h2>

            <div className="grid grid-flow-row md:grid-cols-3 gap-4 mt-8">

                {
                    projects ? projects.map((item, index) => 
                    
                        <Project key={index} project={
                            item
                        }/>

                    ) : ''
                }
            </div>

        </div>

        
    )
}