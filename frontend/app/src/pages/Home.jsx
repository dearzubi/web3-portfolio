import React from 'react';
import axios from "axios";
import { ethers } from 'ethers';
import { useQuery } from "react-query";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFaceFrown} from '@fortawesome/free-regular-svg-icons';
import Navbar from '../components/Navbar';
import Profile from '../components/Profile/Profile';
import ExpertiseSection from '../components/Expertise/ExpertiseSection';
import ProjectsSection from '../components/Project/ProjectsSection';
import ExperienceSection from '../components/Experience/ExperienceSection';
import EducationSection from '../components/Education/EducationSection';


export default function Home({contract}) {

  const fetchPortfolio = async () => {

    const provider = new ethers.providers.JsonRpcProvider(import.meta.env.VITE_RPC_URL);
    const portfolioContract = new ethers.Contract(contract.address, contract.abi, provider);
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

    <div className="flex flex-wrap justify-center">


      {
        !isLoading && isError
        ? 
          <div className="flex flex-col gap-5 p-8 mt-10">

              <FontAwesomeIcon 
                className='font-heading text-9xl text-gray-600'
                icon={faFaceFrown} 
              />

              <h1 className='font-heading text-5xl text-gray-600'>
                Some thing went wrong
              </h1>
              <span className='font-text text-red-600 text-md lg:text-center'>
                  Check Console for details
              </span>

          </div>
        : null
      }

      
      {
        !isError
        ?
          <>
          
            <Navbar isLoading={isLoading} data={{
              cvlink: portfolio?.cvlink
            }}/>
            <Profile isLoading={isLoading} profile={{
              profilePic: portfolio?.profilePic,
              name: portfolio?.name,
              title: portfolio?.title,
              summary: portfolio?.summary,
              socials: portfolio?.socials
            }}/>
            <ExpertiseSection isLoading={isLoading} expertise={portfolio?.expertise}/>
            <ProjectsSection isLoading={isLoading} projects={portfolio?.projects}/>
            <ExperienceSection isLoading={isLoading} experience={portfolio?.experience}/>
            <EducationSection isLoading={isLoading} education={portfolio?.education}/>
          
          </>
        : null
      }

    </div>
  );
}
