import { ethers } from "ethers";

export const getContractInstance = (
    address, 
    abi, 
    {  
        provider = null, 
        readOnly = true 
    }) => {

    return new ethers.Contract(
        address, 
        abi, 
        readOnly ? provider : provider.getSigner()
    );

}
