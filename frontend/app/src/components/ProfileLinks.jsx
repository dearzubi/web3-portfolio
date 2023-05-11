import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faLinkedin, 
    faGithubAlt, 
    faMediumM,
    faTwitter,
    faInstagram,
    faFacebook,
    faYoutube,
    faTwitch,
    faDiscord,
    faTelegram,
    faWhatsapp,

} from '@fortawesome/free-brands-svg-icons';

import { faEnvelope, faPhone, } from '@fortawesome/free-solid-svg-icons';


export default function ProfileLinks({socials}) {

    const socialIcons = {
        'linkedin': faLinkedin,
        'github': faGithubAlt,
        'medium': faMediumM,
        'twitter': faTwitter,
        'instagram': faInstagram,
        'facebook': faFacebook,
        'youtube': faYoutube,
        'twitch': faTwitch,
        'discord': faDiscord,
        'telegram': faTelegram,
        'whatsapp': faWhatsapp,
        'email': faEnvelope,
        'phone': faPhone,
    }

    return (

        <div className='flex flex-wrap gap-x-5'>

            {
                socials ? Object.keys(socials).map((social, index) =>

                <span key={index} className="flex flex-wrap gap-x-2 items-center">
                    <FontAwesomeIcon icon={socialIcons[social]} className="text-xl"/>
                    <a href={socials[social].link} target="_blank" className="text-md font-text">{socials[social].username}</a>

                </span>
                ) : ''

            }
        </div>

    );

}