import React, {useState} from "react";
import { ethers } from "ethers";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlugCircleXmark, faPlugCircleCheck } from '@fortawesome/free-solid-svg-icons';

export default function ConnectWallet({setAccount}){

    const [errorMessage, setErrorMessage] = useState('');
    const [accountAddress, setAccountAddress] = useState('');

    const checkMetaMask = async () => {

        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const accounts = (await provider.send("eth_accounts", []));

        if (accounts.length > 0) {
            setAccount(accounts[0]);
            setAccountAddress(accounts[0]);
        }
        
    }
    checkMetaMask();

    const connectMetmask = async () => {

        setErrorMessage('');

        if (typeof window.ethereum === 'undefined') {
            setErrorMessage('MetaMask is not installed!');
            return console.log(errorMessage);
        }

        await window.ethereum.request({
            method: "wallet_requestPermissions",
            params: [
              {
                eth_accounts: {}
              }
            ]
        });

        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const account = (await provider.send("eth_requestAccounts", []))[0];
        
        setAccount(account);
        setAccountAddress(account);

       
    }

    return (
        <div className='flex flex-col gap-3'>
            <button onClick={connectMetmask} className="bg-white rounded-sm py-[10px] px-[30px] shadow-md font-text font-semibold hover:text-white hover:bg-gray-700 transition-colors">
                
                <span className='flex flex-wrap items-center gap-2'>

                    {
                        accountAddress !== '' 
                        ? <FontAwesomeIcon icon={faPlugCircleCheck} className='text-green-700' />
                        : <FontAwesomeIcon icon={faPlugCircleXmark} className='text-red-700' />
                    }

                    { accountAddress !== '' ? 'Connected' : 'Connect Wallet' }
        
                </span>

            </button>

            {
                errorMessage !== '' ? <span className="font-text text-sm text-red-600">{errorMessage}</span> : ''
            }

        </div>
    );

}