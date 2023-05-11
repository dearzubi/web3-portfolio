import React from 'react';
import Navbar from './Navbar';
import Profile from './Profile';
import ExpertiseSection from './ExpertiseSection';
import ProjectsSection from './ProjectsSection';
import ExperienceSection from './ExperienceSection';
import EducationSection from './EducationSection';

export default function Home({portfolio}) {

  return (

    <div className="flex flex-wrap justify-center">

      <Navbar data={{
        cvlink: portfolio?.cvlink
      }}/>
      <Profile profile={{
        profilePic: portfolio?.profilePic,
        name: portfolio?.name,
        title: portfolio?.title,
        summary: portfolio?.summary,
        socials: portfolio?.socials
      }}/>
      <ExpertiseSection expertise={portfolio?.expertise}/>
      <ProjectsSection projects={portfolio?.projects}/>
      <ExperienceSection experience={portfolio?.experience}/>
      <EducationSection education={portfolio?.education}/>

    </div>
  );
}
