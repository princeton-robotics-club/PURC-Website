import {React, useState} from 'react';
import '../Generic.css';
import './Projects.css';

import TeamButton from '../../team/TeamButton';
import TeamBlurb from '../../team/TeamBlurb';

import droid1 from '../../../images/projects/droid/droid-1.jpg'
import droid2 from '../../../images/projects/droid/droid-2.jpg'
import droid3 from '../../../images/projects/droid/droid-3.jpg'
import droid4 from '../../../images/projects/droid/droid-4.jpg'

import pacbot1 from '../../../images/projects/pacbot/pacbot-1.jpg'
import pacbot2 from '../../../images/projects/pacbot/pacbot-2.jpg'
import pacbot3 from '../../../images/projects/pacbot/pacbot-3.jpg'

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
    let i
    let allVideos = document.getElementsByTagName('video')

    for (i = 0; i < allVideos.length; i++) {
      allVideos[i].pause()
    }

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
    let allVideos = document.getElementsByTagName('video')

    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none'
    }

    for (i = 0; i < allVideos.length; i++) {
      allVideos[i].pause()
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
                about = 'The BB-8 Droid Team is building a life-size, fully-functional spherical BB-8 Droid based on the <i>Star Wars</i> movies. The droid contains numerous complex mechanical systems, including an outer rolling spherical shell, a weighted flywheel mechanism, a drive wheel assembly, and various motors alongside a pulley system which allow the droid to tilt and roll. From motor servos to audio amplifiers to feather boards to much more, the electrical components are hosted in three primary circuits, one in the body, one in the dome head, and one in the remote. We are creating the remote from scratch to send commands to the dome circuit, which confirms receiving the signals using neopixels, and also to the body circuit, which is integrated into our complex mechanical sub-assembly and causes the body to move. Our project is using a framework established by the BB-8 Builders Club with our own authentic add-on of computer vision to allow the droid to avoid obstacles, as well as respond to various hand gestures and embody the character’s spirit of adventure and companionship. Our end goal is to create a finalized droid that we can use for community outreach, such as trips to children hospitals and <i>Star Wars</i> conventions.'
                slides = {[[droid1, 'h', 'BB-8 Team Mechanical & Electrical Sub-Teams'],
                            [droid2, 'h', 'In-Progress BB-8 Body Circuit'],
                            [droid3, 'h', 'Electrical Team Researching Electrical Component Substitutions'],
                            [droid4, 'h', '3D-Printing Rib for the BB-8 Outer Frame']]}
                showSlides = {showSlides}
                milestones = {[['2022-09-01', 's', 'Mechanical Team completed the outer frame of the BB-8 Droid and began 3D-printing parts of the inner sub-assembly. Electrical Team completed the body circuit, which is run by an Arduino and hosts 27 electrical components, ranging from potentiometers to motor servos to motor drivers to feather boards.'], 
                ['2023-03-01', 's', 'Mechanical Team assembled of critical mechanical components in near-complete stage. The main structure of the inner chassis was completed, and construction of several subsystems began Electrical Team tested the body circuit in parts, mapping and uploading code to different sections of the circuit to test the components for their domain of functionality. Assembled the dome circuit used for confirming the receiving of signals from the remote.'], 
                ['2023-11-30', 's', 'Mechanical Team aims to complete the whole mechanical assembly, including installing tilting belts, integrating the various mechanical subassemblies, and incorporating the electrical circuits into the final mechanical product. Electrical Team aims to design a PCB for remote circuit and also for dome circuit. Explore integrating computer vision for hand gestures and obstacle avoidance.']]}
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
                about = 'The Pacbot Competition is a fun, real-life robotics version of the popular Pacman arcade game. The robot, roughly the size of your palm, navigates through an intricate maze to collect as many pellets as it can for a high score, all the while escaping the clutches of four simulated, scary ghosts.'
                slides = {[[pacbot1, 'h', 'Our Pacbot victory photo this past year, tying for first place with UIUC'],
                            [pacbot2, 'h', 'Two identical Pacbots our team designed from scratch during the 2022-23 academic year'],
                            [pacbot3, 'v', 'A cool photo of our team posing on a bridge overlooking Harvard University']]}
                showSlides = {showSlides}
                milestones = {[['2022-09-01', 's', 'Sensor selection and electrical design for our 2023 robot'],
                            ['2023-04-01', 's', 'Firmware and software teams working in parallel to get the robot to make intelligent decisions (competition in April)'],
                            ['2023-04-29', 'd', 'Our team competed in the 2023 PacBot Competiton at Harvard University and obtained the highest score!'],
                            ['2023-08-01', 's', 'Re-designing the Pacbot game engine to address some shortcomings from last year'],
                            ['2023-11-30', 's', ' Starting work on our 2024 Pacbot!']]}
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
                slides = {[[drone1, 'v', 'Drone Team Meeting'],
                            [drone2, 'v', 'Gesture Drone'],
                            [drone3, 'h', 'Gesture Drone Sensor Array']]}
                showSlides = {showSlides}
                milestones =  {[['2022-09-01', 's', 'Built base drone hardware for manual flight, and adapted sensor array to establish position-hold through optical flow and lidar sensors instead of GPS (in order for the drone to have a position estimate indoors).'], 
                                ['2023-03-01', 's', 'Finished writing code for basic computer vision-based gesture control, and successfully conducted preliminary vision-based flight tests (takeoff and landing through gesture recognition).'], 
                                ['2023-11-30', 's', 'Explore more vision-based applications such as localization, path planning, obstacle / collision avoidance. Improve on safety guarantees for gesture control (make sure it’s safer to use).']]}
              />
            </div>

            <div className='first-row break'></div>
            <div className='second-row v-spacer'></div>
            <div className='m-spacer'></div>

            <div className = 'second-row'>
              <TeamButton
                  teamName = 'robocup'
                  teamTitle = 'ROBOCUP'
                  selectedTeam = {selectedTeam}
                  toggleBlurb = {toggleBlurb}
              />
            </div>

            <div className = 'third-row'>
              <TeamBlurb
                darkMode = {darkMode}
                teamName = 'robocup'
                selectedTeam = {selectedTeam}
                about = 'Text about RoboCup goes here.'
                slides = {[]}
                showSlides = {showSlides}
                milestones = {[]}
              />
            </div>

            <div className='second-row h-spacer'></div>
            <div className='m-spacer'></div>

            <div className = 'second-row'>
              <TeamButton
                  teamName = 'golf'
                  teamTitle = 'GOLF CART'
                  selectedTeam = {selectedTeam}
                  toggleBlurb = {toggleBlurb}
              />
            </div>

            <div className = 'third-row'>
              <TeamBlurb
                darkMode = {darkMode}
                teamName = 'golf'
                selectedTeam = {selectedTeam}
                about = 'Text about Autonomous Golf Cart goes here.'
                slides = {[]}
                showSlides = {showSlides}
                milestones = {[]}
              />
            </div>

            <div className='second-row h-spacer'></div>
            <div className='m-spacer'></div>

            <div className = 'second-row'>
              <TeamButton
                  teamName = 'exoskeleton'
                  teamTitle = 'EXOSKELETON'
                  selectedTeam = {selectedTeam}
                  toggleBlurb = {toggleBlurb}
              />
            </div>

            <div className = 'third-row'>
              <TeamBlurb
                darkMode = {darkMode}
                teamName = 'exoskeleton'
                selectedTeam = {selectedTeam}
                about = 'Text about Exoskeleton goes here.'
                slides = {[]}
                showSlides = {showSlides}
                milestones = {[]}
              />
            </div>

            <div className='second-row break'></div>
            <div className='third-row v-spacer'></div>
            <div className='m-spacer'></div>

            <div className = 'third-row'>
              <TeamButton
                  teamName = 'rover'
                  teamTitle = 'ROVER'
                  selectedTeam = {selectedTeam}
                  toggleBlurb = {toggleBlurb}
              />
            </div>

            <div className = 'fourth-row'>
              <TeamBlurb
                darkMode = {darkMode}
                teamName = 'rover'
                selectedTeam = {selectedTeam}
                about = 'Text about Rover goes here.'
                slides = {[]}
                showSlides = {showSlides}
                milestones = {[]}
              />
            </div>

            <div className='fourth-row v-spacer'></div>
            <div className='m-spacer'></div>

          </div>

        </section>
      </div>
    </>
  );
}

export default Projects;