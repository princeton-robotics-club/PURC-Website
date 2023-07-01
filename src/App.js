// React
import React, { useEffect } from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// External Components
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

// Styling
import './App.css';

// Pages
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Supporters from './components/pages/Supporters';
import About from './components/pages/About';
import Join from './components/pages/Join';

function App() {

  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    if (darkMode) document.body.classList.add('dark');
    else document.body.classList.remove('dark');
  }, [darkMode]);

  return (
    <>
      <Router>
        <Navbar
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <Routes className="content">
          <Route path='/' exact element={<Home/>} />
          <Route path='/projects' exact element={<Projects/>} />
          <Route path='/supporters' exact element={<Supporters darkMode={darkMode}/>} />
          <Route path='/about' exact element={<About/>} />
          <Route path='/join' exact element={<Join/>} />
        </Routes>
        <Footer
          darkMode={darkMode}
        />
      </Router>
    </>
  );
}

export default App;
