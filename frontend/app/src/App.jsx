import React from 'react';
import axios from "axios";
import { ethers } from 'ethers';
import { useQuery } from "react-query";
import { Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import BuyCoffee from './components/BuyCoffee';
import NotFound from './components/NotFound';
import contract from './assets/json/portfolio.json';

function App() {


  const fetchPortfolio = async () => {

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const portfolioContract = new ethers.Contract(contract.address, contract.abi, provider.getSigner());
    
    const portfolioURL = await portfolioContract.url();

    const { data } = await axios.get(portfolioURL);
    return data;
  };

  const { 
    isLoading, 
    isSuccess, 
    error, 
    isError, 
    data: portfolio 
 } = useQuery("portfolio", fetchPortfolio);

  if(isError) console.log(error);

  return (

    <main>
      <Routes>
        <Route path="*" element={<NotFound/>}></Route>
        <Route path='/' element={<Home portfolio={portfolio}/>} exact />
        <Route path='/buy-me-a-coffee' element={<BuyCoffee/>} />
      </Routes>
    </main>
  );
}

export default App;
