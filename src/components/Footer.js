import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='social-media'>
        <div className='social-media-wrap'>

          <Link to='https://princeton.edu'>
            <div className='footer-logo-princeton'/>
          </Link>

          <Link to='https://odus.princeton.edu'>
            <div className='footer-logo-odus'/>
          </Link>

          <div className='footer-text'>
            © 2023 The Trustees of Princeton University
          </div>

          <div className='social-icons'>

            <Link
              className='social-icon-link email'
              to='mailto:robot@princeton.edu'
              target='_blank'
              aria-label='Email'
            > 
              <i className="fa fa-envelope" />
            </Link>

            <Link
              className='social-icon-link instagram'
              to='https://www.instagram.com/princetonrobotics/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='https://www.linkedin.com/company/princeton-robotics-club'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;