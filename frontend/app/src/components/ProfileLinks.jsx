import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubAlt, faMediumM } from '@fortawesome/free-brands-svg-icons';


export default function ProfileLinks() {

    return (

        <div className='flex flex-wrap gap-x-5'>
            <span className="flex flex-wrap gap-x-2 items-center">
                <FontAwesomeIcon icon={faLinkedin} style={{color: "#37568b",}} className="text-xl"/>
                <a href="https://www.linkedin.com/in/zubair-khalid/" target="_blank" className="text-md font-text">in/zubair-khalid</a>
            </span>
            <span className="flex flex-wrap gap-x-2 items-center">
                <FontAwesomeIcon icon={faGithubAlt} className="text-xl"/>
                <a href="https://github.com/dearzubi" target="_blank" className="text-md font-text">dearzubi</a>
            </span>
            <span className="flex flex-wrap gap-x-2 items-center">
                <FontAwesomeIcon icon={faMediumM} className="text-xl"/>
                <a href="https://medium.com/@dearzubi" target="_blank" className="text-md font-text">@dearzubi</a>
            </span>
        </div>

    );

}