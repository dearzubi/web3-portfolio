import React from 'react';
import Navbar from './components/Navbar';
import BuyCoffee from './components/BuyCoffee';
import Profile from './components/Profile';
import Expertise from './components/Expertise';

function App() {
  return (

    <div className="flex flex-wrap justify-center">

      <Navbar/>
      <Profile/>
      <Expertise/>

    </div>
  );
}

export default App;
