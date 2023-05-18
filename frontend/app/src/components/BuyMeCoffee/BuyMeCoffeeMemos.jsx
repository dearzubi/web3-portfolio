import React, {useState, useEffect} from "react";
import { useQuery } from "react-query";
import CoffeeMemo from './CoffeeMemo';
import { ethers } from "ethers";
import { getContractInstance } from "../../utils/web3.utils.js";


export default function BuyMeCoffeeMemos({ contractJson }) {

    const [memos, setMemos] = useState([]);
    const [loadMore, setLoadMore] = useState(false);
    const [memoCount, setMemoCount] = useState(0);
    const [memoLimits, setMemoLimits] = useState({
        start: 0,
        limit: 2
    });

    const jsonRpcProvider = new ethers.providers.JsonRpcProvider(import.meta.env.VITE_RPC_URL);

    const queryContract = getContractInstance(
        contractJson.address,
        contractJson.abi,
        { provider: jsonRpcProvider }
    );

    const {
        data: dataMemoCount,
    } = useQuery(["memoCount", queryContract], async() => {
        return parseInt((await queryContract.getMemoCount()).toString());
    });
    useEffect(() => { 
        if (dataMemoCount) {

            setMemoCount(dataMemoCount); 

            if(dataMemoCount > 2) setLoadMore(true);
        }
        
    }, [dataMemoCount]);

    useEffect(() => {if(memoCount > 2) setLoadMore(true);}, [memoCount]);

    const fetchMemos = async (contract, {start = 0, limit = 3}) => {

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

        return memosList;
    }

    const { 
        isLoading: isMemoLoading, 
        isSuccess: isMemoSuccess,
        data: memosData
    } = useQuery(
        ["memos", queryContract], 
        () => fetchMemos(queryContract, {start: 0, limit: 2})
    );
    useEffect(() => {
        if (memosData) {

            if(memosData.length === 0) return;

            if(memos.length > 2) memosData.pop();

            setMemos([...memosData, ...memos]); 
        }
    }, [memosData]);

    const { 
        data: moreMemosData,
        refetch: refetchMoreMemos
    } = useQuery(
        ["loadMoreMemos", queryContract], 
        () => fetchMemos(queryContract, {start: memoLimits.start + memoLimits.limit, limit: memoLimits.limit}),
        { enabled: false }
    );

    useEffect(() => {
        if (moreMemosData) {

            if(moreMemosData.length === 0) {
                return setLoadMore(false);
            };

            setMemos([...memos, ...moreMemosData]);
            
        }
    }, [moreMemosData]);

    const loadMoreMemos = () => {

        refetchMoreMemos();

        setMemoLimits({
            ...memoLimits,
            start: memoLimits.start + memoLimits.limit
        });

    }

    return (

        <div className='flex flex-col gap-y-3'>

            {
                isMemoLoading ? <div>Loading...</div> : null
            }
            {
                memos && memos.length > 0 ? memos.map((memo, index) => {
                    return <CoffeeMemo key={index} memo={memo}/>
                }) : null
            }

            {
                memos && memos.length > 0 && loadMore
                ? <button
                    onClick={loadMoreMemos}
                    className='bg-white rounded-sm py-[5px] px-[10px] shadow-sm font-text text-sm hover:text-white hover:bg-gray-700 transition-colors'>
                    Load More
                </button> : null
            }

        </div>

    );

}