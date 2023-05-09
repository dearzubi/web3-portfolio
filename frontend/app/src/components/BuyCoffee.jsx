import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CoffeeCupIcon from '../assets/img/coffee-cup.png';
import USDTLogo from '../assets/img/icons/tether-usdt-logo.svg';
import ETHLogo from '../assets/img/icons/ether-logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmileBeam} from '@fortawesome/free-regular-svg-icons';
import {faArrowLeftLong} from '@fortawesome/free-solid-svg-icons';
import CoffeeMessage from './CoffeeMessage';

export default function BuyCoffee() {

    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [currency, setCurrency] = useState('USDT'); // ['USDT', 'ETH'
    const [coffeeCount, setCoffeeCount] = useState(1);

    return (


        <div className='flex flex-wrap px-[50px] py-[100px] gap-y-12'>

            <Link to="/">
                <button className="bg-white rounded-sm py-[10px] px-[20px] shadow-sm font-text hover:text-white hover:bg-gray-700 transition-colors">
                    <FontAwesomeIcon icon={faArrowLeftLong} className='mr-2'/> Home
                </button>
            </Link>

            <div className='basis-full flex flex-wrap items-end font-heading text-3xl font-bold'>
                Buy Me A Coffee
            </div>

            <div className='basis-full flex flex-wrap gap-y-10 gap-x-24'>

                <div className='flex flex-col gap-y-3'>
                    <span className='font-text text-gray-600 font-semibold'>Your name (optional)</span>
                    <input className='rounded-sm shadow-sm  h-10 p-1 font-text text-md focus:outline-none' value={name} onChange={(e) => setName(e.target.value)}></input>
                    <span className='font-text text-gray-600 font-semibold mt-2'>Your message (optional)</span>
                    <textarea maxLength={100} rows={5} className='rounded-sm shadow-sm p-1 font-text text-md focus:outline-none' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                </div>
                
                <div className='flex flex-col gap-y-3'>

                    <span className='font-text text-gray-600 font-semibold'>Select your currency</span>

                    <div className='flex flex-wrap gap-2'>
                        <button onClick={() => setCurrency('USDT')} className={`font-text border-2 ${currency == 'USDT' ? 'border-green-600' : ''}  bg-white rounded-md px-[20px] py-[5px]`}>
                            <span className={`flex flex-wrap gap-2 items-center ${currency == 'USDT' ? 'text-green-600 font-semibold' : ''}`}>
                                <img className='w-[24px] h-[24px]' src={USDTLogo}></img>
                                USDT
                            </span>
                        </button>
                        <button onClick={() => setCurrency('ETH')} className={`font-text border-2 ${currency == 'ETH' ? 'border-purple-600' : ''} bg-white rounded-md px-[20px] py-[5px]`}>
                            <span className={`flex flex-wrap gap-2 items-center ${currency == 'ETH' ? 'text-purple-600 font-semibold' : ''}`}>
                                <img className='w-[24px] h-[24px]' src={ETHLogo}></img>
                                Ether
                            </span>
                        </button>
                    </div>

                    <span className='font-text text-gray-600 font-semibold mt-3'>Select the number of coffees</span>

                    <div className='flex flex-wrap items-center gap-2'>
                        <img className='w-[30px] h-[30px] mr-4' src={CoffeeCupIcon}></img> 
                        <div className='flex flex-wrap gap-2'>

                            <button type='submit' onClick={() => setCoffeeCount(1)} className={`rounded-sm px-[20px] py-[5px] ${coffeeCount == 1 ? 'bg-gray-700 text-white' : 'bg-white text-gray-700'} shadow-sm font-text hover:text-white hover:bg-gray-700 transition-colors`}>
                                x1
                            </button>
                            <button type='submit' onClick={() => setCoffeeCount(3)} className={`rounded-sm px-[20px] py-[5px] ${coffeeCount == 3 ? 'bg-gray-700 text-white' : 'bg-white text-gray-700'}  shadow-sm font-text hover:text-white hover:bg-gray-700 transition-colors`}>
                                x3
                            </button>
                            <button type='submit' onClick={() => setCoffeeCount(5)} className={`rounded-sm px-[20px] py-[5px] ${coffeeCount == 5 ? 'bg-gray-700 text-white' : 'bg-white text-gray-700'}  shadow-sm font-text hover:text-white hover:bg-gray-700 transition-colors`}>
                                x5
                            </button>
                           
                        </div>
                    </div>

                    <div className='flex flex-col mt-2'>
                        <span className='font-text text-gray-700'>Can't find the right amount?</span>
                        <span className='font-text text-gray-700'>Enter a custom one:</span>
                        <input type='number' min='1' className='rounded-sm shadow-sm  max-w-[100px] h-8 p-1 mt-2 font-text text-md focus:outline-none' value={coffeeCount} onChange={(e) => setCoffeeCount(e.target.value)}></input>
                    </div>

                    <span className='font-text text-sm text-gray-500'>You're sending {coffeeCount} {currency} to me <FontAwesomeIcon icon={faFaceSmileBeam} className='mr-2' /></span>

                    <div className='flex flex-wrap items-center mt-2'>

                        <button type='submit' className={`rounded-sm px-[20px] py-[10px] bg-gray-700 text-white shadow-sm font-text hover:text-gray-700 hover:bg-white transition-colors`}>
                            <FontAwesomeIcon icon={faFaceSmileBeam} className='mr-2' /> Let's do it!
                        </button>

                    </div>

                </div>

                <div className='flex flex-col gap-y-3'>

                    <CoffeeMessage msg={{
                        name: 'John Doe',
                        message: 'Hey, I love your work! Keep it up!',
                        amount: 3,
                        currency: 'USDT'
                    }}/>

                    <CoffeeMessage msg={{
                        name: 'Mr Robot',
                        message: 'Amazing work! I love your website!',
                        amount: 5,
                        currency: 'ETH'
                    }}/>

                </div>

                

            </div>


        </div>


    );

}