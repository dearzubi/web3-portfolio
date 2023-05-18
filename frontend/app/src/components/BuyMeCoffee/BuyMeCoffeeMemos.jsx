import React, {useState, useEffect} from "react";
import { useQuery } from "react-query";
import CoffeeMemo from './CoffeeMemo';
import { ethers } from "ethers";
import { getContractInstance } from "../../utils/web3.utils.js";


export default function BuyMeCoffeeMemos({ contractJson }) {

    const [memos, setMemos] = useState([]);
    const [moreMemos, setMoreMemos] = useState([]);

    const [memoLimits, setMemoLimits] = useState({
        start: 0,
        limit: 3,
        max: 0
    });

    const jsonRpcProvider = new ethers.providers.JsonRpcProvider(import.meta.env.VITE_RPC_URL);

    const queryContract = getContractInstance(
        contractJson.address,
        contractJson.abi,
        { provider: jsonRpcProvider }
    );

    const fetchMemoCount = async (contract) => {
        return parseInt((await contract.getMemoCount()).toString());
    }

    const fetchMemos = async (contract, {start = 0, limit = 3}) => {

        console.log(start, limit);

        const fetchedMemos = await contract.getMemos(start, limit);

        const memosList = [];

        fetchedMemos.forEach(memo => {

            let amount = 0;

            switch(memo.currency){
                case 'ETH':
                    amount = ethers.utils.formatUnits(memo.amount.toString(), 18).toString();
                    break;
                case 'USDT':
                    amount = ethers.utils.formatUnits(memo.amount.toString(), 6).toString();
                    break;
                default:
                    amount = ethers.utils.formatUnits(memo.amount.toString(), 18).toString();
            }

            memosList.push({
                name: memo.name,
                message: memo.message,
                amount: amount,
                currency: memo.currency,
                linkedin: memo.linkedin,
            })
            

        });

        console.log(memosList)

        return memosList;

    }

    const { 
        isLoading: isMemoCountLoading, 
        isSuccess: isMemoCountSuccess, 
        error: memoCountError, 
        isError: isMemoCountError, 
        data: memoCount
    } = useQuery(["memoCount", queryContract], () => fetchMemoCount(queryContract));

    useEffect(() => {
        if (isMemoCountSuccess && memoCount) {
            setMemoLimits({
                ...memoLimits,
                start: 0,
                max: memoCount
            });
        }
    }, [isMemoCountSuccess, memoCount]);

    const { 
        isLoading: isMemoLoading, 
        isSuccess: isMemoSuccess, 
        error: memoError, 
        isError: isMemoError, 
        data: memosData
    } = useQuery(
        ["memos", queryContract], 
        () => fetchMemos(queryContract, {start: memoLimits.start, limit: memoLimits.limit})
    );

    useEffect(() => {
        if (isMemoSuccess && memosData) {
            
            setMemos(memosData);
        }
    }, [isMemoSuccess, memosData]);

    const { 
        isLoading: isMoreMemoLoading, 
        isSuccess: isMoreMemoSuccess, 
        error: moreMemoError,
        isError: isMoreMemoError, 
        data: moreMemosData,
        refetch: refetchMoreMemos
    } = useQuery(
        ["loadMoreMemos", queryContract, memoLimits.start, memoLimits.limit], 
        () => fetchMemos(queryContract, {start: memoLimits.start, limit: memoLimits.limit}),
        {
            enabled: false
        }
    );

    useEffect(() => {
        if (isMoreMemoSuccess && moreMemosData) {
            
            setMemos([...memos, ...moreMemosData]);
        }
    }, [isMoreMemoSuccess, moreMemosData]);

    const loadMore = () => {

        const newMemoLimits = {
            ...memoLimits,
            start: memoLimits.start + memoLimits.limit
        }
        
        setMemoLimits(newMemoLimits);

        refetchMoreMemos();

    }

    return (

        <div className='flex flex-col gap-y-3'>

            {
                isMemoLoading ? <div>Loading...</div> : null
            }
            {
                isMemoSuccess ? memos.map((memo, index) => {
                    return <CoffeeMemo key={index} memo={memo}/>
                }) : null
            }

            {
                memos && memos.length === 0 ? <div>No memos yet</div> : null
            }

            {
                memos && memos.length > 0 && memos.length < memoLimits.max 
                ? <button
                    onClick={loadMore}
                    className='bg-white rounded-sm py-[5px] px-[10px] shadow-sm font-text text-sm hover:text-white hover:bg-gray-700 transition-colors'>
                    Load More
                </button> : null
            }

        </div>

    );

}