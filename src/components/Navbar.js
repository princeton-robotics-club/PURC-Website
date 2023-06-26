import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css'

function NavbarItem(props) {

  const {
    label,
    link,
    pathString = link,
    dropdown_options = [],
    dropdown_links = [],
    force_style = null,
    close_mobile
  } = props;

  const [drop, setDrop] = useState(false);  
  const showDrop = () => setDrop(window.innerWidth > 960);
  const hideDrop = () => setDrop(false);

  const [underline, setUnderline]  = useState(false);
  const location = useLocation();

  useEffect (() => {
    setUnderline(location.pathname.indexOf(pathString) === 0);
  }, [location.pathname, pathString, underline]);

  window.addEventListener('resize', hideDrop);
  
  return (
    <li className='nav-item' key={label} onMouseLeave={hideDrop}>
      <Link to={link}
            onMouseEnter={showDrop}  
            className={force_style ? force_style : (underline ? 'nav-links-here' : 'nav-links')} 
            onClick={close_mobile}
      >
        {label}
      </Link>
      {drop && 
        dropdown_options.map((option, idx) => {
          return (
            <div className='dropdown-rectangle' key={option}> 
              <Link to={dropdown_links[idx]} className='dropdown-link'>
                <div> {option} </div>
              </Link>
            </div>
          );
        })
      }
    </li>
  );
}

function Navbar() {
  
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const [joinPath,  setJoinPath]  = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => setButton(window.innerWidth > 960);

  useEffect(() => {
      showButton();
    }, []);

  const location = useLocation();

  useEffect(() => {
    setJoinPath(location.pathname.indexOf('/join') === 0);
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

          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            
            <NavbarItem 
              label = {'Projects'}
              link  = {'/projects'}
              pathString = {'/projects'}
              dropdown_options = {['P1', 'P2']}
              dropdown_links = {['/projects#p1', '/projects#p2']}
              close_mobile = {closeMobileMenu}
            />

            <NavbarItem 
              label = {'Supporters'}
              link  = {'/supporters'}
              pathString = {'/supporters'}
              dropdown_options = {[]}
              dropdown_links = {[]}
              close_mobile = {closeMobileMenu}
            />

            <NavbarItem 
              label = {'About Us'}
              link  = {'/about'}
              pathString = {'/about'}
              dropdown_options = {['Leaders', 'Members']}
              dropdown_links = {['/about#leaders', '/about#members']}
              close_mobile = {closeMobileMenu}
            />

            <li>
              <Link to='/join' 
                    className={joinPath ? 'nav-links-mobile-red' : 'nav-links-mobile'} 
                    onClick={() => {closeMobileMenu();}}>
                JOIN
              </Link>
            </li>
          </ul>
          {button && 
            <Button buttonStyle='btn--outline' 
                    buttonSize={joinPath ? 'btn--medium--colored' : 'btn--medium'}>
              JOIN
            </Button>}
        </div>
      </nav>
    </>
  );
};

export default Navbar