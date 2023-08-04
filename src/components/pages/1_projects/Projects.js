import React, { useState, useRef } from 'react';
import '../Generic.css';
import './Projects.css';

function Projects(props) {

  const {
    darkMode
  } = props;

  const [selectedTeam, setSelectedTeam] = useState('');
  const [buttonOffset, setButtonOffset] = useState(0);

  const BUTTON_CLASSES = ['team-button', 'team-button-selected', 'team-button-unselected'];
  const HEADER_OFFSET = 200;

  function toggleBlurb(teamName){

    if (teamName === selectedTeam){
      setSelectedTeam('')
    }
    else {
      if (selectedTeam === '') {
        window.scrollTo({top: document.getElementById(teamName + '_button').getBoundingClientRect().bottom + window.scrollY - HEADER_OFFSET, behavior: 'smooth'})
      } else {
        window.scrollTo({top: document.getElementById(selectedTeam + '_button').getBoundingClientRect().bottom - document.getElementById(selectedTeam + '_blurb').getBoundingClientRect().height + window.scrollY - HEADER_OFFSET, behavior: 'smooth'})
      }
      setSelectedTeam(teamName)
    }
  }

  return (
    <>
      <div className='body-bg'>
        <div className='projects-bg-img'/>
        <section className='article-centered'>

          <div className='first-row v-spacer'></div>
          <div className={'page-title'}> EXPLORE OUR PROJECTS </div>
          <div className='first-row v-spacer'></div>

          <div className = 'team-button-wrap'>

            <div id='droid_button' onClick={() => toggleBlurb('droid')}
              className = {selectedTeam === 'droid' ? 'first-row droid-logo ' + BUTTON_CLASSES[1] : 
                (selectedTeam === '' ? 'first-row droid-logo ' + BUTTON_CLASSES[0] : 'first-row droid-logo ' + BUTTON_CLASSES[2])}
              style = {{transition: '0.5s'}}>
            </div>
            <div id='droid_blurb' className='second-row droid-blurb' style={{display: selectedTeam === 'droid' ? 'block' : 'none'}}>
            With the help of the Alumni Fund, the droid team was successfully able to buy parts to bring a life-size, fully functioning BB-8 droid to life. From motors to motor driver to soundboards, to washers and steel shot adhesive, the purchases for our parts helped provide our members with lots of hands-on mechanical and electrical engineering experience through the lens of our BB-8 project, which we are hoping to use for social outreach purposes such as visits to children hospitals and sci-fi conventions.
            </div>

            <div className='first-row h-spacer'></div>

            <div id='pacbot_button' onClick={() => toggleBlurb('pacbot')}
              className = {selectedTeam === 'pacbot' ? 'first-row pacbot-logo ' + BUTTON_CLASSES[1] : 
                (selectedTeam === '' ? 'first-row pacbot-logo ' + BUTTON_CLASSES[0] : 'first-row pacbot-logo ' + BUTTON_CLASSES[2])}
              style = {{transition: '0.5s'}}>
            </div>
            <div id='pacbot_blurb' className='second-row pacbot-blurb' style={{display: selectedTeam === 'pacbot' ? 'block' : 'none'}}>
            After a year of preparation, our PacBot team and their PacBot, “PacBob,” will be traveling to Harvard in late April to compete in the annual PacBot competition against schools from all around the country. (The PacBot competition involves building a robot which autonomously plays a physical version of Pacman)
            </div>

            <div className='first-row h-spacer'></div>

            <div id='drone_button' onClick={() => toggleBlurb('drone')}
              className = {selectedTeam === 'drone' ? 'first-row drone-logo ' + BUTTON_CLASSES[1] : 
                (selectedTeam === '' ? 'first-row drone-logo ' + BUTTON_CLASSES[0] : 'first-row drone-logo ' + BUTTON_CLASSES[2])}
              style = {{transition: '0.5s'}}>
            </div>
            <div id='drone_blurb' className='second-row drone-blurb' style={{display: selectedTeam === 'drone' ? 'block' : 'none'}}>
            With the support of the Alumni Fund, the Drone Team was able to kickstart our autonomous quadcopter project. The project entailed developing a modular autonomous drone system capable of computer-vision-based ‘gesture control,’ which allows the user to control the quadcopter through hand ‘gestures.’ These gestures are recognized by the camera - using computer vision - and interpreted as a command. We were able to successfully integrate our systems and have a working version of the quadcopter!
            </div>

            <div className='first-row break'></div>
            <div className='second-row v-spacer'></div>

            <div onClick={() => toggleBlurb('pacbot1')}
              className = {selectedTeam === 'pacbot1' ? 'second-row pacbot-logo ' + BUTTON_CLASSES[1] : 
                (selectedTeam === '' ? 'second-row pacbot-logo ' + BUTTON_CLASSES[0] : 'second-row pacbot-logo ' + BUTTON_CLASSES[2])}
              style = {{transition: '0.5s'}}>
            </div>
            <div className='third-row pacbot-blurb' style={{display: selectedTeam === 'pacbot1' ? 'block' : 'none'}}>
              Hey it's pacbot
            </div>

            <div className='second-row h-spacer'></div>

            <div onClick={() => toggleBlurb('pacbot2')}
              className = {selectedTeam === 'pacbot2' ? 'second-row pacbot-logo ' + BUTTON_CLASSES[1] : 
                (selectedTeam === '' ? 'second-row pacbot-logo ' + BUTTON_CLASSES[0] : 'second-row pacbot-logo ' + BUTTON_CLASSES[2])}
              style = {{transition: '0.5s'}}>
            </div>
            <div className='third-row pacbot-blurb' style={{display: selectedTeam === 'pacbot2' ? 'block' : 'none'}}>
              Hey it's pacbot
            </div>

            <div className='second-row break'></div>
            <div className='third-row v-spacer'></div>

          </div>

        </section>
      </div>
    </>
  );
}

export default Projects;