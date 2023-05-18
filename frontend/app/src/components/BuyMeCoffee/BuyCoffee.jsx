import React, {useState} from "react";
import { useQueryClient } from "react-query";
import { ethers } from "ethers";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmileBeam} from '@fortawesome/free-regular-svg-icons';
import { getContractInstance } from "../../utils/web3.utils.js";

export default function BuyCoffee({contract, amount, currency, buyerDetails}){

    const [info, setInfo] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const queryClient = useQueryClient();

    const connectMetaMask = async () => {

        setErrorMessage('');
        setInfo('');

        if (typeof window.ethereum === 'undefined') {
            setErrorMessage('MetaMask is not installed!');
            setInfo('');
            return console.log(errorMessage);
        }

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        let accounts = (await provider.send("eth_accounts", []));

        if (accounts.length > 0) return;
        
        await provider.send("eth_requestAccounts", [])
    }

    const buyCoffee = async () => {

        try{

            setErrorMessage('');
            await connectMetaMask();

            setInfo('Processing...');

            const txContract = getContractInstance(
                contract.address, 
                contract.abi,
                { provider: new ethers.providers.Web3Provider(window.ethereum).getSigner() }
            );

            let value = 0;
            let tokens = 0;

            switch(currency){
                case 'ETH':
                    value = ethers.utils.parseUnits(amount.toString(), 18).toString();
                    break;
                case 'USDT':
                    tokens = ethers.utils.parseUnits(amount.toString(), 6).toString();
                    break;
                default:
                    value = ethers.utils.parseUnits(amount.toString(), 18).toString();
            }

            const tx = await txContract.buyCoffee(
                buyerDetails?.name, 
                buyerDetails?.linkedin, 
                buyerDetails?.message,
                tokens,
                {value: value}
            );

            console.log(tx);
            setInfo('On the way! Details in console.');

            await tx.wait();

            setInfo('Thank you! Details in console.');

            await queryClient.refetchQueries(['memos']);

        }catch(err){
            console.log(err);
            setErrorMessage("Error! Details in console.");
            setInfo('');
        }
            
    }

    return (
        <div className='flex flex-col mt-2 gap-2'>

            <button
                className={`rounded-sm px-[20px] py-[10px] bg-gray-700 text-white shadow-md font-text hover:text-gray-700 hover:bg-white transition-colors`}
                type='submit'
                onClick={buyCoffee}>

                <FontAwesomeIcon icon={faFaceSmileBeam} className='mr-2' />
                Let's do it!

            </button>

            {
                errorMessage !== '' ? <span className="font-text text-sm text-red-600">{errorMessage}</span> : ''
            }

            {
                info !== '' ? <span className="font-text text-sm text-green-600">{info}</span> : ''
            }

        </div>
    )

}