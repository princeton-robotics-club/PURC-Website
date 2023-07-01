import React from 'react';
import '../../App.css';
import './Generic.css';
import './Supporters.css'
import { Link } from 'react-router-dom';

function Supporters(props) {

  const {
    darkMode
  } = props;

  return (
    <div className='body-bg'>
      <div className={'supp-bg-img' + (darkMode ? ' supp-bg-img-dark' : ' supp-bg-img-light')}/>
      <section className='article-centered'>
        <div className={'title-blob' + (darkMode ? ' title-blob-dark' : ' title-blob-light')}> SUPPORTERS </div>
        <div className={'supp-intro-blob' + (darkMode ? ' supp-intro-blob-dark' : ' supp-intro-blob-light')}> 
          None of our projects would be possible without the funding, technical 
          advice, tools, and resources of our supporters.
          <br/>
          <br/>
          We have listed relevant information about our current supporters below.
          <br/>
          <br/>
          If your organization is interested in supporting us as well, please 
          consider <Link to='join#support-us' className={'link'+(darkMode ? ' link-orange' : ' link-coral')}>joining</Link> our 
          team as a donor or advisee. We appreciate your help!
        </div>

        <div className={'supp-info-blob full'+(darkMode?' supp-info-blob-dark':' supp-info-blob-light')}> 
          <Link className={'supp-logo-seas'+(darkMode?' supp-logo-seas-dark':' supp-logo-seas-light')}
                to='https://engineering.princeton.edu/'
                title='Princeton SEAS'/>
          <div>
            <div className='supp-info-text-e-quad'> 
              Princeton's School of Engineering and Applied Science consists of six
              departments:
              <ul className='dedent'>
                
                <li>
                  <Link className={'link'+(darkMode ? ' link-orange' : ' link-coral')} 
                        to='https://www.cs.princeton.edu/'>
                    Computer Science
                  </Link>
                </li>
                
                <li>
                  <Link className={'link'+(darkMode ? ' link-orange' : ' link-coral')} 
                        to='https://ece.princeton.edu/'>
                    Electrical & Computer Eng.
                  </Link>
                </li>

                <li className='small-text'>
                  <Link className={'link'+(darkMode ? ' link-orange' : ' link-coral')} 
                        to='https://mae.princeton.edu/'>
                    Mechanical & Aerospace Eng.
                  </Link>
                </li>

                <li className='small-text'>
                  <Link className={'link'+(darkMode ? ' link-orange' : ' link-coral')} o
                        to='https://orfe.princeton.edu/'>
                    Ops. Research & Financial Eng.
                  </Link>
                </li>

                <li className='small-text'>
                  <Link className={'link'+(darkMode ? ' link-orange' : ' link-coral')} 
                        to='https://cee.princeton.edu/'>
                    Civil & Environmental Eng.
                  </Link>
                </li>

                <li className='small-text'>
                  <Link className={'link'+(darkMode ? ' link-orange' : ' link-coral')} 
                        to='https://cbe.princeton.edu/'>
                    Chemical & Biological Eng.
                  </Link>
                </li>

              </ul>

              Our students also make use of several engineering resources offered
              by SEAS, including:

              <ul className='dedent'>
                <li>
                  <Link className={'link'+(darkMode ? ' link-orange' : ' link-coral')}
                        to='https://ece.princeton.edu/academics/undergraduate/student-projects'>
                    ECE "Car Lab"</Link> (in the E-Quad basement)
                </li>
                <li>
                  <Link className={'link'+(darkMode ? ' link-orange' : ' link-coral')} 
                        to='https://mae.princeton.edu/about-mae/spotlight/duo-behind-maes-machine-shop'>
                    MAE Machine Shop</Link> (in the E-Quad basement)
                </li>
                <li>
                  <Link className={'link'+(darkMode ? ' link-orange' : ' link-coral')} 
                        to='https://www.jacobswyper.com/projects/princeton-university-seas-robotics-laboratory'>
                    Robotics Lab</Link> (in the E-Quad F-Wing)
                </li>
              </ul>

            </div>
          </div>
          <div className='img-e-quad'/> 
        </div>

        <div className={'supp-info-blob half left'+(darkMode?' supp-info-blob-dark':' supp-info-blob-light')}> 
          <Link className='supp-logo-keller' 
                to='https://kellercenter.princeton.edu'/>
          <div className='supp-info-text'> 
            The Keller Center offers opportunities that bridge engineering, 
            entrepreneurship, and the liberal arts to equip students to solve critical 
            societal challenges. As part of their mission, they host an 
            open-access <Link className={'link'+(darkMode ? ' link-dark-orange' : ' link-coral')} 
                              to='https://kellercenter.princeton.edu/keller-center-makerspace'>
            Keller Center Makerspace</Link> in the Engineering Quad, with laser cutters, printers, scanners, 
            wood-working tools, and more.
          </div>
        </div>

        <div className={'supp-info-blob half right'+(darkMode?' supp-info-blob-dark':' supp-info-blob-light')}> 
          <Link className='supp-logo-cst' 
                to='https://cst.princeton.edu'/>
          <div className='supp-info-text'> 
            The Council for Science and Technology runs <Link className={'link'+(darkMode ? ' link-red' : ' link-coral')} 
                        to='https://cst.princeton.edu/studiolab'>StudioLab</Link>, a 
            technology-based makerspace in the basement of Fine Hall, equipped with 
            a variety of tools including 3D printers, soldering irons, drills, CNC 
            machines, laser cutters, motion-tracking systems, pattern sewing 
            machines, and more. We hold weekly meetings in the StudioLab with 
            permission from the CST and StudioLab's supervisors.
          </div>
        </div>

      </section>
    </div>
  );
}

export default Supporters;