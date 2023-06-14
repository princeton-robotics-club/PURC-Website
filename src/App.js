import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Routes>
            <Route path='/' exact />
            <Route path='/projects' exact />
            <Route path='/supporters' exact />
            <Route path='/about' exact />
            <Route path='/join' exact />
          </Routes>
      </Router>
    </>
  );
}

export default App;
