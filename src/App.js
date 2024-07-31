// React
import React, { useEffect, useState } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

// External Components
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';

// Styling
import './App.css';

// Pages
import Home from './components/pages/0_home/Home';
import Projects from './components/pages/1_projects/Projects';
import Supporters from './components/pages/2_supporters/Supporters';
import About from './components/pages/3_about/About';
import Join from './components/pages/4_join/Join';
import Gallery from './components/pages/5_gallery/Gallery';

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
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Routes className="content">
          <Route path="/" exact element={<Home darkMode={darkMode} />} />
          <Route path="/projects" exact element={<Projects darkMode={darkMode} />} />
          <Route path="/supporters" exact element={<Supporters darkMode={darkMode} />} />
          <Route path="/about" exact element={<About darkMode={darkMode} />} />
          <Route path="/gallery" exact element={<Gallery darkMode={darkMode} />} />
          <Route path="/join" exact element={<Join darkMode={darkMode} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer darkMode={darkMode} />
      </Router>
    </>
  );
}

export default App;
