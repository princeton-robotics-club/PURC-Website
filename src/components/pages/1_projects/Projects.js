import React, { useState, useRef } from 'react';
import '../Generic.css';
import './Projects.css';

function Projects(props) {

  const {
    darkMode
  } = props;

  const [selectedTeam, setSelectedTeam] = useState('');

  const LOGO_CLASSES = ['team-logo-original', 'team-logo-selected', 'team-logo-unselected'];
  const TEXT_CLASSES = ['team-text-original', 'team-text-selected', 'team-text-unselected'];
  const HEADER_OFFSET = 200;

  function toggleBlurb(teamName){

    if (teamName === selectedTeam) {
      setSelectedTeam('')
    }
    else {
      showSlides(teamName, 1)

      if (selectedTeam != '' && document.getElementById(selectedTeam + '-text').getBoundingClientRect().top < document.getElementById(teamName + '-text').getBoundingClientRect().top){
        window.scrollTo({top: -document.getElementById(selectedTeam + '-blurb').getBoundingClientRect().height + document.getElementById(teamName + '-text').getBoundingClientRect().top + window.scrollY - HEADER_OFFSET, behavior: 'smooth'})
      } else {
        window.scrollTo({top: document.getElementById(teamName + '-text').getBoundingClientRect().top + window.scrollY - HEADER_OFFSET, behavior: 'smooth'})
      }
      setSelectedTeam(teamName)
    }
  }

  //let slideIndex = 1;

  function showSlides(teamName, n) {
    let slideIndex = n;
    let i;

    let slides = document.getElementsByClassName(teamName + '-slides');
    let dots = document.getElementsByClassName(teamName + '-dot');

    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';  
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' ' + teamName + '-dot-active', '');
    }

    if (slides.length > 0) {
    slides[slideIndex-1].style.display = 'block';  
    }

    if (dots.length > 0) {
    dots[slideIndex-1].className += ' ' + teamName + '-dot-active';
    }
  }

  return (
    <>
      <div className='body-bg'>
        <div className='projects-bg-img'/>
        <section className='article-centered'>

          <div className='first-row v-spacer'></div>
          <div className='m-spacer'></div>

          <div className='page-title' style={{color: darkMode ? 'white' : 'black'}}> EXPLORE OUR PROJECTS </div>

          <div className='first-row v-spacer'></div>
          <div className='m-spacer'></div>

          <div className = 'team-wrap'>

            <div className='first-row droid-glow' onClick={() => toggleBlurb('droid')}>
              <div className = {selectedTeam === 'droid' ? 'droid-logo ' + LOGO_CLASSES[1] : 
                  (selectedTeam === '' ? 'droid-logo ' + LOGO_CLASSES[0] : 'droid-logo ' + LOGO_CLASSES[2])}
                  style = {{transition: '0.5s'}}>
              </div>
              <div id='droid-text' className = {selectedTeam === 'droid' ? 'droid-text ' + TEXT_CLASSES[1] : 
                  (selectedTeam === '' ? 'droid-text ' + TEXT_CLASSES[0] : 'droid-text ' + TEXT_CLASSES[2])}
                  style = {{transition: '0.5s'}}>
                  DROID
              </div>
            </div>
            <div id='droid-blurb' className='second-row team-blurb droid-blurb' style={{display: selectedTeam === 'droid' ? 'flex' : 'none', backgroundColor: darkMode ? 'black' : 'white'}}>

            <div className='divider'></div>

            <div className='droid-slides team-carousel droid-1'></div>
            <div className='droid-slides team-carousel droid-2'></div>
            <div className='droid-slides team-carousel droid-3'></div>

            <div className='divider'></div>

            <span class="droid-dot dot" onClick={() => showSlides('droid', 1)}></span> 
            <span class="droid-dot dot" onClick={() => showSlides('droid', 2)}></span> 
            <span class="droid-dot dot" onClick={() => showSlides('droid', 3)}></span> 
            
            <div className='blurb-text' style={{color: darkMode ? 'white' : 'black'}}>
            With the help of the Alumni Fund, the droid team was successfully able to buy parts to bring a life-size, fully functioning BB-8 droid to life. From motors to motor driver to soundboards, to washers and steel shot adhesive, the purchases for our parts helped provide our members with lots of hands-on mechanical and electrical engineering experience through the lens of our BB-8 project, which we are hoping to use for social outreach purposes such as visits to children hospitals and sci-fi conventions.
            </div>
              
            </div>

            <div className='first-row h-spacer'></div>
            <div className='m-spacer'></div>

            <div className='first-row pacbot-glow' onClick={() => toggleBlurb('pacbot')}>
              <div className = {selectedTeam === 'pacbot' ? 'pacbot-logo ' + LOGO_CLASSES[1] : 
                  (selectedTeam === '' ? 'pacbot-logo ' + LOGO_CLASSES[0] : 'pacbot-logo ' + LOGO_CLASSES[2])}
                  style = {{transition: '0.5s'}}>
              </div>
              <div id='pacbot-text' className = {selectedTeam === 'pacbot' ? 'pacbot-text ' + TEXT_CLASSES[1] : 
                  (selectedTeam === '' ? 'pacbot-text ' + TEXT_CLASSES[0] : 'pacbot-text ' + TEXT_CLASSES[2])}
                  style = {{transition: '0.5s'}}>
                  PACBOT
              </div>
            </div>
            <div id='pacbot-blurb' className='second-row team-blurb pacbot-blurb' style={{display: selectedTeam === 'pacbot' ? 'flex' : 'none', backgroundColor: darkMode ? 'black' : 'white'}}>
              
            <div className='divider'></div>

            <div className='pacbot-slides team-carousel pacbot-1'></div>
            <div className='pacbot-slides team-carousel pacbot-2'></div>
            <div className='pacbot-slides team-carousel pacbot-3'></div>

            <div className='divider'></div>

            <span class="pacbot-dot dot" onClick={() => showSlides('pacbot', 1)}></span> 
            <span class="pacbot-dot dot" onClick={() => showSlides('pacbot', 2)}></span> 
            <span class="pacbot-dot dot" onClick={() => showSlides('pacbot', 3)}></span> 
              
              <div className='blurb-text' style={{color: darkMode ? 'white' : 'black'}}>
              After a year of preparation, our PacBot team and their PacBot, “PacBob,” will be traveling to Harvard in late April to compete in the annual PacBot competition against schools from all around the country. (The PacBot competition involves building a robot which autonomously plays a physical version of Pacman)
              </div>
            </div>

            <div className='first-row h-spacer'></div>
            <div className='m-spacer'></div>

            <div className='first-row drone-glow' onClick={() => toggleBlurb('drone')}>
              <div className = {selectedTeam === 'drone' ? 'drone-logo ' + LOGO_CLASSES[1] : 
                  (selectedTeam === '' ? 'drone-logo ' + LOGO_CLASSES[0] : 'drone-logo ' + LOGO_CLASSES[2])}
                  style = {{transition: '0.5s'}}>
              </div>
              <div id='drone-text' className = {selectedTeam === 'drone' ? 'drone-text ' + TEXT_CLASSES[1] : 
                  (selectedTeam === '' ? 'drone-text ' + TEXT_CLASSES[0] : 'drone-text ' + TEXT_CLASSES[2])}
                  style = {{transition: '0.5s'}}>
                  DRONE
              </div>
            </div>
            <div id='drone-blurb' className='second-row team-blurb drone-blurb' style={{display: selectedTeam === 'drone' ? 'flex' : 'none', backgroundColor: darkMode ? 'black' : 'white'}}>
              
              <div className='blurb-text' style={{color: darkMode ? 'white' : 'black'}}>
                With the support of the Alumni Fund, the Drone Team was able to kickstart our autonomous quadcopter project. The project entailed developing a modular autonomous drone system capable of computer-vision-based ‘gesture control,’ which allows the user to control the quadcopter through hand ‘gestures.’ These gestures are recognized by the camera - using computer vision - and interpreted as a command. We were able to successfully integrate our systems and have a working version of the quadcopter!
              </div>
            </div>

            <div className='first-row break'></div>
            <div className='second-row v-spacer'></div>
            <div className='m-spacer'></div>

            <div className='second-row drone-glow' onClick={() => toggleBlurb('drone2')}>
              <div className = {selectedTeam === 'drone2' ? 'drone-logo ' + LOGO_CLASSES[1] : 
                  (selectedTeam === '' ? 'drone-logo ' + LOGO_CLASSES[0] : 'drone-logo ' + LOGO_CLASSES[2])}
                  style = {{transition: '0.5s'}}>
              </div>
              <div id='drone2-text' className = {selectedTeam === 'drone2' ? 'drone-text ' + TEXT_CLASSES[1] : 
                  (selectedTeam === '' ? 'drone-text ' + TEXT_CLASSES[0] : 'drone-text ' + TEXT_CLASSES[2])}
                  style = {{transition: '0.5s'}}>
                  DRONE
              </div>
            </div>
            <div id='drone2-blurb' className='third-row team-blurb drone-blurb' style={{display: selectedTeam === 'drone2' ? 'flex' : 'none'}}>
              With the support of the Alumni Fund, the Drone Team was able to kickstart our autonomous quadcopter project. The project entailed developing a modular autonomous drone system capable of computer-vision-based ‘gesture control,’ which allows the user to control the quadcopter through hand ‘gestures.’ These gestures are recognized by the camera - using computer vision - and interpreted as a command. We were able to successfully integrate our systems and have a working version of the quadcopter!
            </div>

            <div className='second-row h-spacer'></div>
            <div className='m-spacer'></div>

            <div className='second-row drone-glow' onClick={() => toggleBlurb('drone3')}>
              <div className = {selectedTeam === 'drone3' ? 'drone-logo ' + LOGO_CLASSES[1] : 
                  (selectedTeam === '' ? 'drone-logo ' + LOGO_CLASSES[0] : 'drone-logo ' + LOGO_CLASSES[2])}
                  style = {{transition: '0.5s'}}>
              </div>
              <div id='drone3-text' className = {selectedTeam === 'drone3' ? 'drone-text ' + TEXT_CLASSES[1] : 
                  (selectedTeam === '' ? 'drone-text ' + TEXT_CLASSES[0] : 'drone-text ' + TEXT_CLASSES[2])}
                  style = {{transition: '0.5s'}}>
                  DRONE
              </div>
            </div>
            <div id='drone3-blurb' className='third-row team-blurb drone-blurb' style={{display: selectedTeam === 'drone3' ? 'flex' : 'none'}}>
              With the support of the Alumni Fund, the Drone Team was able to kickstart our autonomous quadcopter project. The project entailed developing a modular autonomous drone system capable of computer-vision-based ‘gesture control,’ which allows the user to control the quadcopter through hand ‘gestures.’ These gestures are recognized by the camera - using computer vision - and interpreted as a command. We were able to successfully integrate our systems and have a working version of the quadcopter!
            </div>

          </div>

        </section>
      </div>
    </>
  );
}

export default Projects;