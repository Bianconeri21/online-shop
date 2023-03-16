import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ToyInfo from './pages/ToyInfo';
import './scss/app.scss';

function App() {
  return (
    <div className='main'>
      <Header />
      <div className='content'>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/cart' element={ <Cart /> } />
          <Route path='/pizza/:id' element={ <ToyInfo /> } />
          <Route path='*' element={ <NotFound /> } />
        </Routes>
      </div>
    </div>
  );
}

export default App;
