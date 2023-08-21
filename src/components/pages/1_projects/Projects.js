import {React, useState} from 'react';
import '../Generic.css';
import './Projects.css';

import TeamButton from '../../team/TeamButton';
import TeamBlurb from '../../team/TeamBlurb';

import droid1 from '../../../images/projects/droid/droid-1.jpg'
import droid2 from '../../../images/projects/pacbot/pacbot-3.jpg'

import drone1 from '../../../images/projects/drone/drone-1.jpg'
import drone2 from '../../../images/projects/drone/drone-2.jpg'
import drone3 from '../../../images/projects/drone/drone-3.jpg'

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
                slides = {[]}
                showSlides = {showSlides}
                milestones = {[]}
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
                            [droid2, 'v']]}
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
                about = 'The Drone Team is focused on exploring and adapting drone technology to solve problems. Our main project involves developing a modular autonomous quadcopter platform that can be fitted with different hardware and software to be applied in different scenarios: our first application being computer vision-based gesture recognition and control. This entails having the drone ‘see’ hand gestures from a person through a camera, recognize what that gesture is, and executing a command accordingly. The team is less competitive in nature and is anchored more on research and exploration! In essence, we are motivated by our curiosities towards pushing the boundaries of what drone technology is capable of within the context of integrating robotics into our daily lives. As such, we are also open to explore different venues of autonomous drone systems - whether it be drone delivery systems, or autonomous racing drones. Please let us know if you have any crazy ideas!'
                slides = {[[drone1, 'h'],
                            [drone2, 'v'],
                            [drone3, 'h']]}
                showSlides = {showSlides}
                milestones =  {[['2022-09-01' , 'Built base drone hardware for manual flight, and adapted sensor array to establish position-hold through optical flow and lidar sensors instead of GPS (in order for the drone to have a position estimate indoors).'], 
                                ['2023-02-01', 'Finished writing code for basic computer vision-based gesture control, and successfully conducted preliminary vision-based flight tests (takeoff and landing through gesture recognition).'], 
                                ['2023-09-01', 'Explore more vision-based applications such as localization, path planning, obstacle / collision avoidance. Improve on safety guarantees for gesture control (make sure it’s safer to use).']]}
                milestoneDisplay = 'm'
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