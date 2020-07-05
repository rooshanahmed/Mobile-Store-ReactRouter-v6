import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from '../src/components/Home';
import Header from '../src/components/Header';
import Repo from '../src/components/Repository';
import Cart from '../src/components/Cart/Cart';
import { GlobalProvider } from '../src/components/Context/GlobalContext';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='cart' element={<Cart />}></Route>
          <Route path='repo' element={<Repo />}></Route>
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;
