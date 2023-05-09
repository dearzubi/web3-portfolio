import React from 'react';
import { Link } from 'react-router-dom';
import ProfilePic from '../assets/img/profile-pic.jpg';
import ProfileLinks from './ProfileLinks';
import CoffeeCupIcon from '../assets/img/coffee-cup.png';

export default function Profile() {

    return (
        <div className='basis-full flex flex-wrap items-center justify-center gap-y-[10px] p-[10px]'>

            <img className='w-[260px] h-[260px] rounded-full shadow-sm border border-white' src={ProfilePic} alt='zubair-dp'></img>
            <h3 className='basis-full font-heading text-2xl text-center text-gray-600 font-bold mt-3'>Zubair Khalid</h3>
            <span className='basis-full'></span>
            <span className='basis-full'></span>
            <h1 className='font-heading text-6xl font-black text-gray-900 mt-8'>Blockchain Developer</h1>
            <span className='basis-full font-text text-center text-gray-600'>Your friendly blockchain developer with 4+ years of experience in the software development field.</span>
            <span className='basis-full'></span>
            <span className='basis-full'></span>
            <ProfileLinks/>
            <span className='basis-full'></span>
            {/* <button className="bg-gray-700 text-white rounded-sm py-[10px] px-[30px] shadow-sm font-text hover:text-gray-700 hover:bg-white transition-colors mr-2">
                Get my CV
            </button> */}
            <Link to="/buy-me-a-coffee">

                <button className="bg-white text-gray-700 rounded-sm py-[10px] px-[10px] shadow-sm font-text hover:text-white hover:bg-gray-700 transition-colors">

                    <span className='flex flex-wrap gap-x-2'>
                        <img className='w-[24px] h-[24px]' src={CoffeeCupIcon}></img>
                        <span>Buy me a Coffee</span>
                    </span>

                </button>

            </Link>
            
        </div>
    );

}