import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmileBeam} from '@fortawesome/free-regular-svg-icons';
import {faArrowLeftLong} from '@fortawesome/free-solid-svg-icons';
import ConnectWallet from '../components/BuyMeCoffee/ConnectWallet';
import BuyMeCoffeeBuyer from '../components/BuyMeCoffee/BuyMeCoffeeBuyer';
import BuyMeCoffeeCurrency from '../components/BuyMeCoffee/BuyMeCoffeeCurrency';
import BuyMeCoffeeCups from '../components/BuyMeCoffee/BuyMeCoffeeCups';
import BuyCoffee from '../components/BuyMeCoffee/BuyCoffee';
import BuyMeCoffeeMemos from '../components/BuyMeCoffee/BuyMeCoffeeMemos';

export default function BuyMeCoffee({contract}) {

    const [buyerDetails, setBuyerDetails] = useState({name: '', linkedin: '', message: ''});
    const [currency, setCurrency] = useState('ETH'); // ['USDT', 'ETH']
    const [coffeeCount, setCoffeeCount] = useState(1);
    const [isWalletConnected, setIsWalletConnected] = useState(null);
    
    return (


        <div className='flex flex-wrap px-[50px] py-[100px] gap-y-12'>

            <Link to="/">
                <button className="bg-white rounded-sm py-[5px] px-[10px] shadow-sm font-text text-sm hover:text-white hover:bg-gray-700 transition-colors">
                    <FontAwesomeIcon icon={faArrowLeftLong} className='mr-2'/> Home
                </button>
            </Link>

            <div className='basis-full flex flex-wrap items-end font-heading text-4xl font-bold'>
                Buy Me A Coffee
            </div>

            <ConnectWallet isWalletConnected={isWalletConnected} setIsWalletConnected={setIsWalletConnected}/>

            <div className='basis-full flex flex-wrap gap-y-10 gap-x-24'>

                <BuyMeCoffeeBuyer buyerDetails={buyerDetails} setBuyerDetails={setBuyerDetails}/>

                
                <div className='flex flex-col gap-y-3'>

                    <BuyMeCoffeeCurrency currency={currency} setCurrency={setCurrency}/>

                    <BuyMeCoffeeCups coffeeCount={coffeeCount} setCoffeeCount={setCoffeeCount}/>

                    <span className='font-text text-sm text-gray-500'>
                        You're sending {coffeeCount} {currency} to me 
                        <FontAwesomeIcon icon={faFaceSmileBeam} className='mr-2' />
                    </span>

                    <BuyCoffee contract={contract} amount={coffeeCount} currency={currency} buyerDetails={buyerDetails}/>

                </div>

                
                <BuyMeCoffeeMemos contractJson={contract}/>
                

            </div>


        </div>


    );

}