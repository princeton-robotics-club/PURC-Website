import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css'

function Navbar() {
  
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const [projPath,  setProjPath] = useState(false);
  const [suppPath,  setSuppPath] = useState(false);
  const [aboutPath, setAboutPath] = useState(false);
  const [joinPath,  setJoinPath] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => setButton(window.innerWidth > 960);

  useEffect(() => {
      showButton();
    }, []);

  const location = useLocation();

  useEffect(() => {
    setProjPath(location.pathname === '/projects');
    setSuppPath(location.pathname === '/supporters');
    setAboutPath(location.pathname === '/about');
    setJoinPath(location.pathname === '/join');
  }, [location.pathname]);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>

          <Link to='/' onClick={closeMobileMenu}>
            <div className='navbar-logo-image'/>
          </Link>

          <Link to='/' onClick={closeMobileMenu}>
            <div className='navbar-logo-text'>
              Princeton University <br/> Robotics Club
            </div>
          </Link>

          <div className='menu-icon' onClick={() => {handleClick();}}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/projects' className={projPath ? 'nav-links-here' : 'nav-links'} onClick={() => {closeMobileMenu();}}>
                Projects
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/supporters' className={suppPath ? 'nav-links-here' : 'nav-links'} onClick={() => {closeMobileMenu();}}>
                Supporters
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/about' className={aboutPath ? 'nav-links-here' : 'nav-links'} onClick={() => {closeMobileMenu();}}>
                About
              </Link>
            </li>
            <li>
              <Link to='/join' className='nav-links-mobile' onClick={() => {closeMobileMenu();}}>
                JOIN
              </Link>
            </li>
          </ul>
          {button && <Button buttonSize={joinPath ? 'btn--medium--colored' : 'btn--medium'} buttonStyle='btn--outline'>JOIN</Button>}
        </div>
      </nav>
    </>
  );
};

export default Navbar