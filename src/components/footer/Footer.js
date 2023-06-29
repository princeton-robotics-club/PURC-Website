import React from 'react';
import { useEffect, useState } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';

function Footer(props) {

  const {
    darkMode
  } = props;

  const [textColorStyle, setTextColorStyle] = useState(' light-text');
  const [iconColorStyle, setIconColorStyle] = useState(' white-text');
  const [pngColorStyle, setPngColorStyle] = useState(' light-png');
  const [bgColorStyle, setBgColorStyle] = useState(' dark-mode-footer');
  useEffect(() => {
    setTextColorStyle(darkMode ? ' light-text' : ' dark-text');
    setIconColorStyle(darkMode ? ' white-text' : ' gray-text');
    setPngColorStyle(darkMode ? ' light-png' : ' dark-png');
    setBgColorStyle(darkMode ? ' dark-mode-footer' : ' light-mode-footer');
  }, [darkMode]);

  return (
    <div className={'footer-container' + bgColorStyle}>
      <section className='social-media'>
        <div className='social-media-wrap'>

          <Link to='https://princeton.edu'
                data-tooltip-id='princeton-tooltip' 
                data-tooltip-content='Princeton University&#39;s website'>
            <div className={'footer-logo-princeton' + pngColorStyle} />
          </Link>
          <Tooltip id='princeton-tooltip'
                   offset={20}
                   className='footer-tooltip' />

          <Link to='https://odus.princeton.edu'
                data-tooltip-id='odus-tooltip' 
                data-tooltip-content='Office of the Dean of Undergraduate Students'>
            <div className={'footer-logo-odus' + pngColorStyle}/>
          </Link>
          <Tooltip id='odus-tooltip'
                   className='footer-tooltip' />

          <div className={'footer-text' + textColorStyle}>
            © 2023 The Trustees of Princeton University
          </div>

          <div className='social-icons'>

            <Link
              className={'social-icon-link email' + iconColorStyle}
              to='mailto:robot@princeton.edu'
              target='_blank'
              aria-label='Email'
              data-tooltip-id='email-tooltip' 
              data-tooltip-content='Email us!'>
              <i className="fa fa-envelope" />
            </Link>
            <Tooltip id='email-tooltip'
                     offset={20}
                     className='footer-tooltip' />

            <Link
              className={'social-icon-link instagram' + iconColorStyle}
              to='https://www.instagram.com/princetonrobotics/'
              target='_blank'
              aria-label='Instagram'
              data-tooltip-id='insta-tooltip' 
              data-tooltip-content='Follow us on Instagram!'>
              <i className='fab fa-instagram' />
            </Link>
            <Tooltip id='insta-tooltip'
                     offset={20}
                     className='footer-tooltip' />

            <Link
              className={'social-icon-link twitter' + iconColorStyle}
              to='https://www.linkedin.com/company/princeton-robotics-club'
              target='_blank'
              aria-label='LinkedIn'
              data-tooltip-id='linkedin-tooltip' 
              data-tooltip-content='Follow us on LinkedIn!'>
              <i className='fab fa-linkedin' />
            </Link>
            <Tooltip id='linkedin-tooltip'
                     offset={20}
                     className='footer-tooltip' />

          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;