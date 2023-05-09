import React from "react";
import Project from "./Project";

export default function ProjectsSection() {
    return (

        <div className="basis-full flex flex-wrap items-center justify-center gap-y-[10px] p-[10px] mt-20">

            <h2 className="basis-full font-heading text-2xl font-black text-gray-700 text-center">My Projects</h2>

            <div className="grid grid-flow-row lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-8">
                <Project project={{
                    title: "Project 1",
                    description: "Lorem ipsum.....",
                    techStack: "React, Node, Express, MongoDB",
                    imageUrl: "https://venturebeat.com/wp-content/uploads/2022/05/GettyImages-1357404897-KanawatTH.jpg"
                }}/>
                <Project project={{
                    title: "Project 1",
                    description: "Lorem ipsum.....",
                    techStack: "React, Node, Express, MongoDB",
                    imageUrl: "https://venturebeat.com/wp-content/uploads/2022/05/GettyImages-1357404897-KanawatTH.jpg"
                }}/>
                <Project project={{
                    title: "Project 1",
                    description: "Lorem ipsum.....",
                    techStack: "React, Node, Express, MongoDB",
                    imageUrl: "https://venturebeat.com/wp-content/uploads/2022/05/GettyImages-1357404897-KanawatTH.jpg"
                }}/>
            </div>

        </div>

        
    )
}