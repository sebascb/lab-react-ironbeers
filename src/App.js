import React from 'react';
import './App.css';
import Home from './pages/Home';
import AddBeers from './pages/AddBeers';
import AllBeers from './pages/AllBeers';
import BeersDetail from './pages/BeerDetail';
import RandomBeer from './pages/RandomBeer';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/beers' element={ <AllBeers /> } />
        <Route path='/beers/:beerId' element={ <BeersDetail /> } />
        <Route path='/random-beer' element={ <RandomBeer /> } />
        <Route path='/new-beer' element={ <AddBeers /> } />
      </Routes>
    </div>
  );
}

export default App;