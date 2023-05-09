import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import BuyCoffee from './components/BuyCoffee';
import NotFound from './components/NotFound';

function App() {
  return (

    <main>
      <Routes>
        <Route path="*" element={<NotFound/>}></Route>
        <Route path='/' element={<Home/>} exact />
        <Route path='/buy-me-a-coffee' element={<BuyCoffee/>} />
      </Routes>
    </main>
  );
}

export default App;
