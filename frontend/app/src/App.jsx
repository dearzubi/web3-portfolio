import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import BuyMeCoffee from './pages/BuyMeCoffee';
import NotFound from './pages/NotFound';
import contract from './assets/json/portfolio.json';

function App() {

  return (

    <main>
      <Routes>
        <Route path="*" element={<NotFound/>}></Route>
        <Route path='/' element={<Home contract={contract}/>} exact />
        <Route path='/buy-me-a-coffee' element={<BuyMeCoffee contract={contract}/>} />
      </Routes>
    </main>
  );
}

export default App;
