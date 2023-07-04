import React from 'react';
import '../Generic.css';
import './About.css';
import FaceCard from '../../face_card/FaceCard';
import Card from '../../card/Card';

function About(props) {

  const {
    darkMode
  } = props;

  return (
    <>
      <div className='body-bg'>
      <div className={'about-bg-img' + (darkMode ? ' about-bg-img-dark' : ' about-bg-img-light')}/>
        <div className='article-centered'>
          <div className={'title-blob' + (darkMode ? ' title-blob-dark' : ' title-blob-light')}> ABOUT US </div>
          <Card pathString = '/about#leaders'
                className={'text-box text-box-padded-not-below' + (darkMode ? ' text-box-dark' : ' text-box-light')}> 
            <div className='centered-heading'> 
              CLUB LEADERS
            </div>
            <div className='centered-container'>
              <FaceCard
                darkMode = {darkMode}
                name = 'First Last'
                subtext = {['Role 1', 'Role 2']}
              />
              <FaceCard
                darkMode = {darkMode}
                name = 'First Last'
                subtext = {['Role 1', 'Role 2']}
              />
              <FaceCard
                darkMode = {darkMode}
                name = 'First Last'
                subtext = {['Role 1', 'Role 2']}
              />
              <FaceCard
                darkMode = {darkMode}
                name = 'First Last'
                subtext = {['Role 1', 'Role 2']}
              />
              <FaceCard
                darkMode = {darkMode}
                name = 'First Last'
                subtext = {['Role 1', 'Role 2']}
              />
              <FaceCard
                darkMode = {darkMode}
                name = 'First Last'
                subtext = {['Role 1', 'Role 2']}
              />
              <FaceCard
                darkMode = {darkMode}
                name = 'First Last'
                subtext = {['Role 1', 'Role 2']}
              />
              <FaceCard
                darkMode = {darkMode}
                name = 'First Last'
                subtext = {['Role 1', 'Role 2']}
              />
              <FaceCard
                darkMode = {darkMode}
                name = 'First Last'
                subtext = {['Role 1', 'Role 2']}
              />
            </div> 
          </Card>

          <Card pathString = '/about#members'
                className={'text-box text-box-padded' + (darkMode ? ' text-box-dark' : ' text-box-light')}> 
            <div className='centered-heading'> 
              TEAM MEMBERS
            </div>
          </Card>

          <Card pathString = '/about#faculty'
                className={'text-box text-box-padded-not-below' + (darkMode ? ' text-box-dark' : ' text-box-light')}> 
            <div className='centered-heading'> 
              FACULTY ADVISERS
            </div>
            <div className='centered-container'>
              <FaceCard
                  darkMode = {darkMode}
                  name = 'First Last'
                  subtext = {['Role 1', 'Role 2']}
              />
              <FaceCard
                darkMode = {darkMode}
                name = 'First Last'
                subtext = {['Role 1', 'Role 2']}
              />
              <FaceCard
                darkMode = {darkMode}
                name = 'First Last'
                subtext = {['Role 1', 'Role 2']}
              />
              <FaceCard
                darkMode = {darkMode}
                name = 'First Last'
                subtext = {['Role 1', 'Role 2']}
              />
            </div> 
          </Card>
        </div>
      </div>
    </>
  );
}

export default About;