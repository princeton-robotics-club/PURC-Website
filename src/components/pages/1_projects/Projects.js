import { React, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../Generic.css';
import './Projects.css';

import TeamBlurb from '../../team/TeamBlurb';
import TeamButton from '../../team/TeamButton';

import droid1 from '../../../images/projects/droid/droid-1.jpg';
import droid2 from '../../../images/projects/droid/droid-2.jpg';
import droid3 from '../../../images/projects/droid/droid-3.jpg';
import droid4 from '../../../images/projects/droid/droid-4.jpg';

import pacbot1 from '../../../images/projects/pacbot/pacbot-1.jpg';
import pacbot2 from '../../../images/projects/pacbot/pacbot-2.jpg';
import pacbot3 from '../../../images/projects/pacbot/pacbot-3.jpg';
import pacbot4 from '../../../images/projects/pacbot/pacbot-4.mov';

import drone1 from '../../../images/projects/drone/drone-1.jpg';
import drone2 from '../../../images/projects/drone/drone-2.jpg';
import drone3 from '../../../images/projects/drone/drone-3.jpg';

import tinker1 from '../../../images/projects/tinker/CD_Player_Teardown.jpg';
import tinker2 from '../../../images/projects/tinker/Macintosh_Floppy_Drive.jpg';
import tinker3 from '../../../images/projects/tinker/Macintosh_and_boombox.jpg';

function Projects(props) {
  const { darkMode } = props;

  const [selectedTeam, setSelectedTeam] = useState('');
  const HEADER_OFFSET = 200;

  function toggleBlurb(teamName) {
    let i;
    let allVideos = document.getElementsByTagName('video');

    for (i = 0; i < allVideos.length; i++) {
      allVideos[i].pause();
    }

    if (teamName === selectedTeam) {
      setSelectedTeam('');
    } else {
      showSlides(teamName, 1);

      if (
        selectedTeam !== '' &&
        document.getElementById(selectedTeam + '-text').getBoundingClientRect().top <
          document.getElementById(teamName + '-text').getBoundingClientRect().top
      ) {
        window.scrollTo({ top: 0 });
        window.scrollTo({
          top:
            -document.getElementById(selectedTeam + '-blurb').getBoundingClientRect().height +
            document.getElementById(teamName + '-text').getBoundingClientRect().top +
            window.scrollY -
            HEADER_OFFSET,
          behavior: 'smooth',
        });
      } else {
        window.scrollTo({
          top: document.getElementById(teamName + '-text').getBoundingClientRect().top + window.scrollY - HEADER_OFFSET,
          behavior: 'smooth',
        });
      }

      setSelectedTeam(teamName);
    }
  }

  function showSlides(teamName, n) {
    let i;
    let slideIndex = n;
    let slides = document.getElementsByClassName(teamName + '-carousel');
    let dots = document.getElementsByClassName(teamName + '-dot');
    let allVideos = document.getElementsByTagName('video');

    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }

    for (i = 0; i < allVideos.length; i++) {
      allVideos[i].pause();
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' ' + teamName + '-dot-active', '');
    }

    if (slides.length > 0) {
      slides[slideIndex - 1].style.display = 'block';
    }
    if (dots.length > 0) {
      dots[slideIndex - 1].className += ' ' + teamName + '-dot-active';
    }
  }

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      let teamName = location.hash.substring(1);
      console.log(teamName);
      toggleBlurb(teamName);
      document.querySelector(location.hash)?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location.hash]);

  return (
    <>
      <div className="body-bg">
        <div className="projects-bg-img" />
        <section className="article-centered">
          <div className="first-row v-spacer"></div>
          <div className="m-spacer"></div>

          <div className="page-title" style={{ color: darkMode ? 'white' : 'black' }}>
            {' '}
            MEET OUR TEAMS{' '}
          </div>

          <div className="first-row v-spacer"></div>
          <div className="m-spacer"></div>

          <div className="team-wrap">
            <div className="first-row">
              <TeamButton teamName="droid" teamTitle="DROID" selectedTeam={selectedTeam} toggleBlurb={toggleBlurb} />
            </div>

            <div className="second-row">
              <TeamBlurb
                darkMode={darkMode}
                teamName="droid"
                teamTitle="DROID"
                selectedTeam={selectedTeam}
                about="The BB-8 Droid Team is building a life-size, fully-functional, spherical BB-8 Droid based on the <i>Star Wars</i> movies. Our project is using a framework established by the BB-8 Builders Club with our own authentic add-on of computer vision to allow the droid to avoid obstacles, as well as respond to various hand gestures and embody the character’s spirit of adventure and companionship! Our end goal is to create a finalized droid that we can use for community outreach, such as trips to children's hospitals and <i>Star Wars</i> conventions."
                slides={[
                  [droid1, 'h', 'BB-8 Team Mechanical & Electrical Sub-Teams'],
                  [droid2, 'h', 'In-Progress BB-8 Body Circuit'],
                  [droid3, 'h', 'Electrical Team Researching Electrical Component Substitutions'],
                  [droid4, 'h', '3D-Printing Rib for the BB-8 Outer Frame'],
                ]}
                showSlides={showSlides}
                milestones={[
                  [
                    '2022-09-01',
                    's',
                    'Mechanical team completed the outer frame and began printing the inner sub-assembly, while our electrical team completed the body circuit.',
                  ],
                  [
                    '2023-03-01',
                    's',
                    'Mechanical team mostly completed the inner chassis structure. The electrical team programmed and tested various components within the body circuit.',
                  ],
                  [
                    '2023-11-30',
                    's',
                    "Mechanical Team finished assembling the base of the drive system within the droid, including the flywheel system for rotational movement, center-axis system for linear movement, and mounts for all of the various electrical components. Electrical Team created custom PCBs for the remote control and for the circuit within the droid's body that receives and processes all of the commands from the remote control. Electrical Team also began wiring up the electrical components on the droid.",
                  ],
                  [
                    '2024-4-01',
                    's',
                    'We fully assembled the BB-8 body and connected it to the dome with a magnetic locking system that makes the dome appear as if it is floating! By the end of the semester, we got the BB-8 to the point where it is fully operational and can roll around in accordance with commands sent from a remote control. In the future, we are looking into implementing distance sensors and CV for autonomous functioning. ',
                  ],
                  [
                    '2024-9-01',
                    's',
                    'The BB-8 Droid team will be spending this year with a particular focus on making our BB-8 autonomous. This includes CV for image recognition and distance sensors for obstacle avoidance. Electrical Team will be scoping out new sensors to achieve these tasks while software will develop the main infrastructure for BB-8s ability to roll around a space without colliding with obstacles and being able to recognize objects!',
                  ],
                ]}
                sponsors={''}
              />
            </div>

            <div className="first-row h-spacer"></div>
            <div className="m-spacer"></div>

            <div className="first-row">
              <TeamButton teamName="pacbot" teamTitle="PAC-BOT" selectedTeam={selectedTeam} toggleBlurb={toggleBlurb} />
            </div>

            <div className="second-row">
              <TeamBlurb
                darkMode={darkMode}
                teamName="pacbot"
                teamTitle="PACBOT"
                selectedTeam={selectedTeam}
                about="The Pacbot Competition is a fun, real-life robotics version of the popular Pacman arcade game. The robot, roughly the size of your palm, navigates through an intricate maze to collect as many pellets as it can for a high score, all the while escaping the clutches of four simulated, scary ghosts."
                slides={[
                  [pacbot1, 'h', 'Our Pacbot victory photo this past year, tying for first place with UIUC'],
                  [
                    pacbot2,
                    'h',
                    'Two identical Pacbots our team designed from scratch during the 2022-23 academic year',
                  ],
                  [pacbot3, 'v', 'A cool photo of our team posing on a bridge overlooking Harvard University'],
                  [pacbot4, 'v', ''],
                ]}
                showSlides={showSlides}
                milestones={[
                  ['2022-09-01', 's', 'Sensor selection and electrical design for our 2023 robot'],
                  [
                    '2023-04-01',
                    's',
                    'Firmware and software teams worked in parallel to get the robot to make intelligent decisions (competition in April)',
                  ],
                  [
                    '2023-04-29',
                    'd',
                    'Our team competed in the 2023 PacBot Competiton at Harvard University and obtained the highest score!',
                  ],
                  ['2023-08-01', 's', 'Re-designed the Pacbot game engine to address some shortcomings from last year'],
                  ['2023-11-30', 's', ' Starting work on our 2024 Pacbot!'],
                ]}
                sponsors={''}
              />
            </div>

            <div className="first-row h-spacer"></div>
            <div className="m-spacer"></div>

            <div className="first-row">
              <TeamButton teamName="drone" teamTitle="DRONE" selectedTeam={selectedTeam} toggleBlurb={toggleBlurb} />
            </div>

            <div className="second-row">
              <TeamBlurb
                darkMode={darkMode}
                teamName="drone"
                teamTitle="DRONE"
                selectedTeam={selectedTeam}
                about={`Our Drone Team is focused on exploring and adapting drone technology 
                  to numerous applications. We have two main projects this year. 
                  Our first involves developing a tail-sitter drone that takes off
                   vertically and flips over in-flight to transform into a flying wing.
                    Our second project builds an autonomous drone charging station. 
                    Both projects involve experimental development of autonomy, computer vision, 
                    controls, and electrical/mechanical systems design.`}
                // "Our Drone Team is focused on exploring and adapting drone technology to numerous applications. Our main project involves developing a modular autonomous quadcopter platform that can be fitted with different hardware and software in various scenarios. Currently, we are working on computer vision-based gesture recognition and control, which entails having the drone ‘see’ hand gestures from a person through a camera, recognize what that gesture is, and execute a command accordingly!"
                slides={[
                  [drone1, 'v', 'Drone Team Meeting'],
                  [drone2, 'v', 'Gesture Drone'],
                  [drone3, 'h', 'Gesture Drone Sensor Array'],
                ]}
                showSlides={showSlides}
                milestones={[
                  [
                    '2022-09-01',
                    's',
                    'Built base drone hardware for manual flight, and adapted sensor array to establish position-hold through optical flow and LIDAR sensors.',
                  ],
                  [
                    '2023-03-01',
                    's',
                    'Finished writing code for basic computer vision (CV)-based gesture control, and successfully completed preliminary vision-based flight tests.',
                  ],
                  [
                    '2023-11-30',
                    's',
                    'Exploring more CV applications such as localization, path planning, and collision avoidance, while improving safety of gesture control.',
                  ],
                  [
                    '2024-09-01',
                    's',
                    'Develop electrical and mechanical systems for tail-sitter and drone charging station. Begin work on flight controls and autonomy, and complete first flight demos. ',
                  ],
                  [
                    '2025-04-01',
                    's',
                    'Tune flight controls and iterate improvements upon rounds of autonomous flight. Create intuitive user interface for controls.',
                  ],
                ]}
                sponsors={''}
              />
            </div>

            <div className="first-row break"></div>
            <div className="second-row v-spacer"></div>
            <div className="m-spacer"></div>

            <div className="second-row">
              <TeamButton
                teamName="robocup"
                teamTitle="ROBOCUP"
                selectedTeam={selectedTeam}
                toggleBlurb={toggleBlurb}
              />
            </div>

            <div className="third-row">
              <TeamBlurb
                darkMode={darkMode}
                teamName="robocup"
                teamTitle="ROBOCUP"
                selectedTeam={selectedTeam}
                about="Starting in Fall 2024, our Robocup Team will build a complete set of robots to take part in the Robocup SSL Challenge. We are looking for motivated members to help make this project a reality!"
                slides={[]}
                showSlides={showSlides}
                milestones={[]}
                sponsors={''}
              />
            </div>

            <div className="second-row h-spacer"></div>
            <div className="m-spacer"></div>

            <div className="second-row">
              <TeamButton teamName="golf" teamTitle="GOLF CART" selectedTeam={selectedTeam} toggleBlurb={toggleBlurb} />
            </div>
            <div className="third-row">
              <TeamBlurb
                darkMode={darkMode}
                teamName="golf"
                teamTitle="GOLF CART"
                selectedTeam={selectedTeam}
                about="Our Autonomous Golf Cart Team aims to combine sustainability with automation by building a solar-powered self-driving golf cart. With support from the High Meadows Environmental Institute and NVIDIA, this newly-established team is a great opportunity for members to build unprecedented technology with cutting-edge components."
                slides={[]}
                showSlides={showSlides}
                milestones={[]}
                sponsors={'High Meadows Institute; NVIDIA'}
              />
            </div>

            <div className="second-row h-spacer"></div>
            <div className="m-spacer"></div>

            <div className="second-row">
              <TeamButton
                teamName="exoskeleton"
                teamTitle="EXOSKELETON"
                selectedTeam={selectedTeam}
                toggleBlurb={toggleBlurb}
              />
            </div>

            <div className="third-row">
              <TeamBlurb
                darkMode={darkMode}
                teamName="exoskeleton"
                teamTitle="EXOSKELETON"
                selectedTeam={selectedTeam}
                about="Moving onto our second year of the Exoskeleton Team, we are continuing on our progress from last year. We are in the process of building an Iron-Man esque full-body robotic exoskeleton with an EEG brain interface movement system, to help with adapting to user movements and non-touch control systems. We are looking for motivated members to help make this project a reality!"
                slides={[]}
                showSlides={showSlides}
                milestones={[
                  ['2023-09-01', 's', 'Exoskeleton team begins.'],
                  [
                    '2024-04-01',
                    's',
                    'Proof of Concept EEG single-node interface succeeds. Design of Upper Body Frame is Completed. ',
                  ],
                  [
                    '2024-07-01',
                    's',
                    'Arm is Constructed and Wired to be connected with proof of concept brain interface.',
                  ],
                  [
                    '2024-09-01',
                    's',
                    'Expected to continue upper body construction, move on to developing multi-node brain interface for more motor movement.',
                  ],
                ]}
                sponsors={''}
              />
            </div>

            <div className="second-row break"></div>
            <div className="third-row v-spacer"></div>
            <div className="m-spacer"></div>

            {/* third starts here */}
            {/* wall-e */}
            <div className="third-row">
              <TeamButton teamName="wall-e" teamTitle="WALL-E" selectedTeam={selectedTeam} toggleBlurb={toggleBlurb} />
            </div>

            <div className="fourth-row">
              <TeamBlurb
                darkMode={darkMode}
                teamName="wall-e"
                teamTitle="WALL-E"
                selectedTeam={selectedTeam}
                about="Starting in Fall 2024, our WALL-E Team will focus on creating a lovable, waste-collecting roverbot capable of retracting into a box, autonomously picking up trash, avoiding obstacles, and more. We are looking for motivated members to help make this project a reality!"
                slides={[]}
                showSlides={showSlides}
                milestones={[]}
                sponsors={''}
              />
            </div>

            <div className="third-row h-spacer"></div>
            <div className="m-spacer"></div>
            {/* bionics */}

            <div className="third-row">
              <TeamButton
                teamName="bionics"
                teamTitle="BIONICS"
                selectedTeam={selectedTeam}
                toggleBlurb={toggleBlurb}
              />
            </div>

            <div className="fourth-row">
              <TeamBlurb
                darkMode={darkMode}
                teamName="bionics"
                teamTitle="BIONICS"
                selectedTeam={selectedTeam}
                about={`<p>The Princeton Bionics Team is developing a state-of-the-art myoelectric
                  prosthetic hand designed to restore natural movement and functionality for users. 
                  Our project builds upon established myoelectric technology, with our unique enhancement
                   of machine learning integration to allow the prosthetic to adapt to the user’s muscle signals 
                   more accurately over time, providing a highly personalized and intuitive experience.<p>
                  <p>
                  Our goal is to create biomedical devices that improve lives and serve as a tool for community
                   outreach, demonstrating the potential of bionics at rehabilitation centers, children's hospitals, 
                   and educational events.</p>`}
                // about="Starting in Fall 2024, our Bionics Team will focus on creating a myoelectric prosthetic arm (and potentially other prosthetics in the future!), to assist and enhance the lives of those with disabilities. We are looking for motivated members to help make this project a reality!"
                slides={[]}
                showSlides={showSlides}
                milestones={[
                  [
                    '2024-09-01',
                    's',
                    'Begin designing and prototyping the myoelectric prosthetic hand, focusing on EMG signal acquisition, sensor placement, and basic motor control.',
                  ],
                  [
                    '2025-04-01',
                    's',
                    'Complete integration of machine learning algorithms for adaptive muscle signal processing, finalize the prosthetic hand design, and prepare for functional testing and community outreach events. ',
                  ],
                  [
                    '2025-07-01',
                    's',
                    'Start drafting plans for the next project—a prosthetic heart—by researching cardiac biomechanics, exploring potential materials, and developing preliminary design concepts.',
                  ],
                  [
                    '2025-09-01',
                    's',
                    'Initiate the development of the prosthetic heart, building on the knowledge and experience gained from the prosthetic hand project, with a focus on initial prototyping and feasibility studies.',
                  ],
                ]}
                sponsors={''}
              />
            </div>

            <div className="third-row h-spacer"></div>
            <div className="m-spacer"></div>
            {/* tinker */}

            <div className="third-row">
              <TeamButton teamName="tinker" teamTitle="TINKER" selectedTeam={selectedTeam} toggleBlurb={toggleBlurb} />
            </div>

            <div className="fourth-row">
              <TeamBlurb
                darkMode={darkMode}
                teamName="tinker"
                teamTitle="TINKER"
                selectedTeam={selectedTeam}
                about={`<p>The Tinker team will be working on fixing different types of devices that 
                  are broken! Think iPods, Laptops, Wii consoles!! Members can feel free to 
                  bring in old devices that don't work anymore and put themselves up for 
                  the task of trying to fix them!</p>
                  
                  <p>Our primary goal is to teach students the basics of electrical and mechanical systems.
                  Through a series of hands-on projects, students will cultivate their troubleshooting 
                  and problem-solving practical skills that can be applied to fix virtually anything 
                  in their daily lives. </p>
                  `}
                slides={[
                  [tinker1, 'h', 'DC Player Repair/Teardown'],
                  [tinker2, 'v', 'Macintosh Floppy Drive'],
                  [tinker3, 'h', 'Macintosh and Boombox'],
                ]}
                showSlides={showSlides}
                milestones={[]}
                sponsors={''}
              />
            </div>

            {/* <div className="third-row break"></div>
            <div className="fourth-row v-spacer"></div>
            <div className="m-spacer"></div> */}

            {/* fourth starts here */}
            {/* wall-e */}

            {/* <div className="fourth-row h-spacer"></div>
            <div className="m-spacer"></div> */}
            {/* Rover */}
            {/* 
            <div className="fourth-row">
              <TeamButton
                teamName="rover"
                teamTitle="ROVER*"
                archived
                selectedTeam={selectedTeam}
                toggleBlurb={toggleBlurb}
              />
            </div>

            <div className="fifth-row">
              <TeamBlurb
                darkMode={darkMode}
                teamName="rover"
                teamTitle="ROVER (Archived)"
                selectedTeam={selectedTeam}
                about='The Rover Team was founded in the Summer of 2023. Our mission is to design and build an autonomous rover capable of exploring a Mars-like environment. Our rover will exhibit four distinct competencies: (1) computer vision algorithms for object avoidance and extreme terrain navigation, (2) object retrieval and delivery mechanisms to support mission objectives, (3) remote-controlled robotic arm that can perform complex maintenance operations on an equipment system, and (4) science system to collect samples and detect signs of life. We intend to compete in the <a href="https://urc.marssociety.org/home">University Rover Challenge</a>, hosted annually in May in Utah. <p>* Rover is becoming its own club starting Fall 2024. </p>'
                slides={[
                  [rover1, 'v', 'Chassis team debating various design constraints'],
                  [rover2, 'h', 'Rover Team Officers and Sub-Team Leads'],
                ]}
                showSlides={showSlides}
                milestones={[
                  ['2023-09-01', 'm', 'First ever meeting! We recruited 61 new team members across five sub-teams.'],
                  [
                    '2023-12-01',
                    'm',
                    'We will submit the Preliminary Design Report with designs and project information to the Rover Challenge.',
                  ],
                  [
                    '2024-03-01',
                    'm',
                    'We will submit a System Acceptance Report with video demonstration of the constructed rover to the Rover Challenge.',
                  ],
                  ['2024-05-01', 'm', 'Final Round Competition in Utah!'],
                ]}
                sponsors={
                  'If you are interested in donating to and sponsoring the Princeton Rover Team, please contact treasurer Brandon Cheng, at <a href = "mailto: brandon.cheng@princeton.edu">brandon.cheng@princeton.edu</a>.'
                }
              />
            </div> */}
            <div className="fourth-row break"></div>
            <div className="fifth-row v-spacer"></div>
            <div className="m-spacer"></div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Projects;
