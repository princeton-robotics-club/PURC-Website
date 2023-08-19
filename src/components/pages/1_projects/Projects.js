import {React, useState} from 'react';
import '../Generic.css';
import './Projects.css';

import TeamButton from '../../team/TeamButton';
import TeamBlurb from '../../team/TeamBlurb';

import droid1 from '../../../images/projects/droid/droid-1.jpg'
import droid2 from '../../../images/projects/pacbot/pacbot-3.jpg'
import droid3 from '../../../images/projects/droid/Mont_Saleve_Hike_by_Tristan_Richard_Brandes.JPG'
import droid4 from '../../../images/projects/droid/random.MOV'

function Projects(props) {

  const {
    darkMode
  } = props;

  const [selectedTeam, setSelectedTeam] = useState('');
  const HEADER_OFFSET = 200;

  function toggleBlurb(teamName){

    if (teamName === selectedTeam) {
      setSelectedTeam('')
    }
    else {
      showSlides(teamName, 1)

      if (selectedTeam !== '' && document.getElementById(selectedTeam + '-text').getBoundingClientRect().top < document.getElementById(teamName + '-text').getBoundingClientRect().top){
        window.scrollTo({top: -document.getElementById(selectedTeam + '-blurb').getBoundingClientRect().height + document.getElementById(teamName + '-text').getBoundingClientRect().top + window.scrollY - HEADER_OFFSET, behavior: 'smooth'})
      } else {
        window.scrollTo({top: document.getElementById(teamName + '-text').getBoundingClientRect().top + window.scrollY - HEADER_OFFSET, behavior: 'smooth'})
      }
      
      setSelectedTeam(teamName)
    }
  }

  function showSlides(teamName, n) {
    let i
    let slideIndex = n
    let slides = document.getElementsByClassName(teamName + '-carousel')
    let dots = document.getElementsByClassName(teamName + '-dot')

    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none'
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' ' + teamName + '-dot-active', '')
    }

    if (slides.length > 0) {slides[slideIndex-1].style.display = 'block'}
    if (dots.length > 0) {dots[slideIndex-1].className += ' ' + teamName + '-dot-active'}
  }

  return (
    <>
      <div className='body-bg'>
        <div className='projects-bg-img'/>
        <section className='article-centered'>

          <div className='first-row v-spacer'></div>
          <div className='m-spacer'></div>

          <div className='page-title' style={{color: darkMode ? 'white' : 'black'}}> MEET OUR TEAMS </div>

          <div className='first-row v-spacer'></div>
          <div className='m-spacer'></div>

          <div className = 'team-wrap'>

            <div className = 'first-row'>
              <TeamButton
                  teamName = 'droid'
                  teamTitle = 'DROID'
                  selectedTeam = {selectedTeam}
                  toggleBlurb = {toggleBlurb}
              />
            </div>

            <div className = 'second-row'>
              <TeamBlurb
                darkMode = {darkMode}
                teamName = 'droid'
                selectedTeam = {selectedTeam}
                about = 'With the help of the Alumni Fund, the droid team was successfully able to buy parts to bring a life-size, fully functioning BB-8 droid to life. From motors to motor driver to soundboards, to washers and steel shot adhesive, the purchases for our parts helped provide our members with lots of hands-on mechanical and electrical engineering experience through the lens of our BB-8 project, which we are hoping to use for social outreach purposes such as visits to children hospitals and sci-fi conventions.'
                slides = {[[droid1, 'h'],
                            [droid2, 'v'],
                            [droid3, 'h'],
                            [droid4, 'h']]}
                showSlides = {showSlides}
                milestones = {[['2023-10-10' , 'step 1'], 
                                ['2022-11-10', 'step 2'], 
                                ['2023-12-10', ' help play  help play a lit  ']]}
              />
            </div>

            <div className='first-row h-spacer'></div>
            <div className='m-spacer'></div>

            <div className = 'first-row'>
              <TeamButton
                  teamName = 'pacbot'
                  teamTitle = 'PACBOT'
                  selectedTeam = {selectedTeam}
                  toggleBlurb = {toggleBlurb}
              />
            </div>

            <div className = 'second-row'>
              <TeamBlurb
                darkMode = {darkMode}
                teamName = 'pacbot'
                selectedTeam = {selectedTeam}
                about = 'After a year of preparation, our PacBot team and their PacBot, “PacBob,” will be traveling to Harvard in late April to compete in the annual PacBot competition against schools from all around the country. (The PacBot competition involves building a robot which autonomously plays a physical version of Pacman)'
                slides = {[[droid1, 'h'],
                            [droid2, 'v'],
                            [droid3, 'h'],
                            [droid4, 'h']]}
                showSlides = {showSlides}
                milestones = {[['2023-10-10' , 'step 1'], 
                                ['2022-11-10', 'step 2'], 
                                ['2023-12-10', ' help play  help play a lit  ']]}
              />
            </div>

            <div className='first-row h-spacer'></div>
            <div className='m-spacer'></div>

            <div className = 'first-row'>
              <TeamButton
                  teamName = 'drone'
                  teamTitle = 'DRONE'
                  selectedTeam = {selectedTeam}
                  toggleBlurb = {toggleBlurb}
              />
            </div>

            <div className = 'second-row'>
              <TeamBlurb
                darkMode = {darkMode}
                teamName = 'drone'
                selectedTeam = {selectedTeam}
                about = 'With the support of the Alumni Fund, the Drone Team was able to kickstart our autonomous quadcopter project. The project entailed developing a modular autonomous drone system capable of computer-vision-based ‘gesture control,’ which allows the user to control the quadcopter through hand ‘gestures.’ These gestures are recognized by the camera - using computer vision - and interpreted as a command. We were able to successfully integrate our systems and have a working version of the quadcopter!'
                slides = {[[droid1, 'h'],
                            [droid2, 'v'],
                            [droid3, 'h'],
                            [droid4, 'h']]}
                showSlides = {showSlides}
                milestones = {[['2023-10-10' , 'step 1'], 
                                ['2022-11-10', 'step 2'], 
                                ['2023-12-10', ' help play  help play a lit  ']]}
              />
            </div>

            <div className='first-row break'></div>
            <div className='second-row v-spacer'></div>
            <div className='m-spacer'></div>

            <div className = 'second-row'>
              <TeamButton
                  teamName = 'droid'
                  teamTitle = 'DRONE 2'
                  selectedTeam = {selectedTeam}
                  toggleBlurb = {toggleBlurb}
              />
            </div>

            <div id='drone2-blurb' className='third-row team-blurb drone-blurb' style={{display: selectedTeam === 'drone2' ? 'flex' : 'none'}}>
              With the support of the Alumni Fund, the Drone Team was able to kickstart our autonomous quadcopter project. The project entailed developing a modular autonomous drone system capable of computer-vision-based ‘gesture control,’ which allows the user to control the quadcopter through hand ‘gestures.’ These gestures are recognized by the camera - using computer vision - and interpreted as a command. We were able to successfully integrate our systems and have a working version of the quadcopter!
            </div>

            <div className='second-row h-spacer'></div>
            <div className='m-spacer'></div>

            <div className = 'second-row'>
              <TeamButton
                  teamName = 'drone'
                  teamTitle = 'DRONE 3'
                  selectedTeam = {selectedTeam}
                  toggleBlurb = {toggleBlurb}
              />
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