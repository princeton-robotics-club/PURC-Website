// React
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// External Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Styling
import './App.css';

// Pages
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Supporters from './components/pages/Supporters';
import About from './components/pages/About';
import Join from './components/pages/Join';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/projects' exact Component={Projects} />
          <Route path='/supporters' exact Component={Supporters} />
          <Route path='/about' exact Component={About} />
          <Route path='/join' exact Component={Join} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
