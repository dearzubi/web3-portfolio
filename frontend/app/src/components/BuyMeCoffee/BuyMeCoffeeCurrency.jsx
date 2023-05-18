import React from "react";
import USDTLogo from '../../assets/img/icons/tether-usdt-logo.svg';
import ETHLogo from '../../assets/img/icons/ether-logo.svg';

export default function BuyMeCoffeeCurrency({currency, setCurrency}){
    return (
        <>
            <span className='font-text text-gray-600 font-semibold'>
                Select your currency
            </span>

            <div className='flex flex-wrap gap-2'>

                <button 
                    className={`font-text border-2 ${currency == 'USDT' ? 'border-green-600' : ''}  bg-white rounded-md px-[20px] py-[5px]`}
                    onClick={() => setCurrency('USDT')}>

                    <span className={`flex flex-wrap gap-2 items-center ${currency == 'USDT' ? 'text-green-600 font-semibold' : ''}`}>
                        <img className='w-[24px] h-[24px]' src={USDTLogo}></img>
                        USDT
                    </span>

                </button>

                <button 
                    className={`font-text border-2 ${currency == 'ETH' ? 'border-purple-600' : ''} bg-white rounded-md px-[20px] py-[5px]`}
                    onClick={() => setCurrency('ETH')}>
                    
                    <span className={`flex flex-wrap gap-2 items-center ${currency == 'ETH' ? 'text-purple-600 font-semibold' : ''}`}>
                        <img className='w-[24px] h-[24px]' src={ETHLogo}></img>
                        Ether
                    </span>

                </button>
            </div>
        </>
    )
}