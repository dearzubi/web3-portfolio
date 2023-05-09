import React from "react";
import Expertise from "./Expertise";
import { faCubes, faLaptopCode, faMobileScreen} from '@fortawesome/free-solid-svg-icons';

export default function ExpertiseSection() {
    return (

        <div className="basis-full flex flex-wrap items-center justify-center gap-y-[10px] p-[10px] mt-20">

            <h2 className="basis-full font-heading text-2xl font-black text-gray-700 text-center">My Expertise</h2>

            <div className="grid grid-flow-row md:grid-cols-3 gap-4 mt-8">
                <Expertise expertise={
                    {
                        title: "Blockchain Development",
                        description: "Experienced in blockchain research and development, web3.0 and decentralized apps."
                    }
                } icon={faCubes} />
                <Expertise expertise={
                    {
                        title: "Full Stack Web Development",
                        description: "Experienced in full stack web development using MERN and MEVN stack."
                    }
                } icon={faLaptopCode}/>
                <Expertise expertise={
                    {
                        title: "App Development",
                        description: "Experienced in native android app development using Java, Firebase, and android studio."
                    }
                } icon={faMobileScreen} />
                
            </div>

        </div>

        
    )
}