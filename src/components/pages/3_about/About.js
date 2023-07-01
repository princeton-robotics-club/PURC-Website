import React from 'react';
import '../Generic.css';

function About(props) {

  const {
    darkMode
  } = props;

  return (
    <>
      <div className='body-bg'>
        <div className='about-bg-img'/>
        <div className='article-centered'>
          <div className={'title-blob' + (darkMode ? ' title-blob-dark' : ' title-blob-light')}> ABOUT US </div>
        </div>
      </div>
    </>
  );
}

export default About;