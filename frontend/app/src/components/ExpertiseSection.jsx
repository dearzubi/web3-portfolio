import React from "react";
import Expertise from "./Expertise";
import { faCubes, faLaptopCode, faMobileScreen} from '@fortawesome/free-solid-svg-icons';

export default function ExpertiseSection({expertise}) {

    return (

        <div className="basis-full flex flex-wrap items-center justify-center gap-y-[10px] p-[10px] mt-20">

            <h2 className="basis-full font-heading text-2xl font-black text-gray-700 text-center">My Expertise</h2>

            <div className="grid grid-flow-row md:grid-cols-3 gap-4 mt-8">

                {
                    expertise ? expertise.map((item, index) => 
                    
                        <Expertise key={index} expertise={
                            item
                        } icon={faLaptopCode} />

                    ) : ''
                }
                
            </div>

        </div>

        
    )
}