import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact'
import Services from './components/Services';


function App(){

  return (
    <>
  <Router>
    <Navbar />
    <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
    </div>
  </Router>
  </>
  );
}


export default App;
