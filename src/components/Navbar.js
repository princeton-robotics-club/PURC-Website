import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css'

function Navbar() {
  
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => setButton(window.innerWidth > 960);

  useEffect(() => {
    showButton();
  }, []);

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

          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                Projects
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/supporters' className='nav-links' onClick={closeMobileMenu}>
                Supporters
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li>
              <Link
                to='/join'
                className='nav-links-mobile'
                onClick={closeMobileMenu}

              >
                JOIN
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>JOIN</Button>}
        </div>
      </nav>
    </>
  );
};

export default Navbar