import React from 'react';
import { Link } from 'react-router-dom';
import ProfileLinks from './ProfileLinks';
import CoffeeCupIcon from '../../assets/img/coffee-cup.png';
import SKLTProfile from './SKLTProfile';

export default function Profile({profile, isLoading}) {

    return (
        <div 
            className='
                basis-full 
                flex flex-wrap 
                items-center 
                justify-center 
                gap-y-[10px] 
                p-[10px]
            '
        >
            { isLoading 
                ? 
                    <SKLTProfile/> 
                : 
                    <>
                        <img 
                            className="
                                w-[260px] 
                                h-[260px] 
                                rounded-full 
                                shadow-sm border 
                                border-white
                            "
                            src={profile?.profilePic} 
                            alt='dp'>
                        </img>
                        <h3 
                            className='
                            basis-full 
                            font-heading 
                            text-2xl 
                            text-center 
                            text-gray-600 
                            font-bold 
                            mt-3
                        '>
                            {profile?.name}
                        </h3>
                        <h1 
                            className='
                                font-heading 
                                text-6xl 
                                font-black 
                                text-gray-900 
                                mt-8
                            '>
                                {profile?.title}
                        </h1>
                        <span 
                            className='
                                basis-full 
                                font-text 
                                text-center 
                                text-gray-600
                            '>
                                {profile?.summary}
                        </span>
                        <ProfileLinks 
                            className='basis-full' 
                            socials={profile?.socials}
                        />
                        <Link className='basis-full text-center' to="/buy-me-a-coffee">

                            <button 
                                className="
                                    bg-white 
                                    text-gray-700 
                                    rounded-sm 
                                    py-[10px] 
                                    px-[10px] 
                                    shadow-sm 
                                    font-text 
                                    hover:text-white 
                                    hover:bg-gray-700 
                                    transition-colors
                                ">

                                    <span className='flex flex-wrap gap-x-2'>
                                        <img 
                                            className='w-[24px] h-[24px]' 
                                            src={CoffeeCupIcon}>
                                        </img>
                                        <span>
                                            Buy me a Coffee
                                        </span>
                                    </span>

                            </button>

                        </Link>

                    </>
            }            
        </div>
    );

}