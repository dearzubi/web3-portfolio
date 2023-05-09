import React from 'react';
import Navbar from './Navbar';
import Profile from './Profile';
import ExpertiseSection from './ExpertiseSection';
import ProjectsSection from './ProjectsSection';
import ExperienceSection from './ExperienceSection';
import EducationSection from './EducationSection';

export default function Home() {
  return (

    <div className="flex flex-wrap justify-center">

      <Navbar/>
      <Profile/>
      <ExpertiseSection/>
      <ProjectsSection/>
      <ExperienceSection/>
      <EducationSection/>

    </div>
  );
}
