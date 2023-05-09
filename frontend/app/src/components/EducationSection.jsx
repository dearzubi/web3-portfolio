import React from "react";
import Education from "./Education";

export default function EducationSection() {
    return (

        <div className="basis-full flex flex-wrap items-center gap-y-[10px] p-[10px] mt-20">

            <h2 className="basis-full font-heading text-2xl font-black text-gray-700 text-center">My Education</h2>

            <div className="grid grid-flow-row gap-4 mt-8">
                <Education education={{
                    title: "Education 1",
                    institute: "Institute 1",
                    duration: "2020 - 2021",
                    achievements: ['Obtained a CGPA of 9.5', 'Won a hackathon', 'Published a research paper']
                }}/>
                <Education education={{
                    title: "Education 2",
                    institute: "Institute 2",
                    duration: "2020 - 2021",
                    achievements: ['Obtained a CGPA of 9.5', 'Won a hackathon', 'Published a research paper']
                }}/>
            </div>

        </div>

        
    )
}