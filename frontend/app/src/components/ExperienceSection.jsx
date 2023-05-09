import React from "react";
import Experience from "./Experience";

export default function ExperienceSection() {
    return (

        <div className="basis-full flex flex-wrap items-center gap-y-[10px] p-[10px] mt-20">

            <h2 className="basis-full font-heading text-2xl font-black text-gray-700 text-center">My Experience</h2>

            <div className="grid grid-flow-row gap-4 mt-8">
                <Experience experience={{
                    title: "Experience 1",
                    company: "Company 1",
                    description: "Lorem ipsum.....",
                    duration: "2020 - 2021",
                    responsibilities: ['Conducted research on blockchain security', 'Developed a blockchain security tool', 'Published a research paper']

                }}/>
                <Experience experience={{
                    title: "Experience 1",
                    company: "Company 1",
                    description: "Lorem ipsum.....",
                    duration: "2020 - 2021",
                    responsibilities: ['Conducted research on blockchain security', 'Developed a blockchain security tool', 'Published a research paper']

                }}/>
            </div>

        </div>

        
    )
}