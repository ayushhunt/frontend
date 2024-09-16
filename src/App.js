// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';

import Signin from './pages/Signin';
import Footer from './components/Footer';
import Header from './components/Header';
import Error from './pages/Error'

function App() {
  return (

    <Router>
      <Header/>

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Sigin" element={<Signin />} />
          <Route path='/*' element ={<Error/>}/>
        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
