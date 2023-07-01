import React from 'react';
import '../Generic.css';

function Projects(props) {

  const {
    darkMode
  } = props;

  return (
    <>
      <div className='body-bg'>
        <div className='projects-bg-img'/>
        <div className='article-centered'>
          <div className={'title-blob' + (darkMode ? ' title-blob-dark' : ' title-blob-light')}> PROJECTS </div>
        </div>
      </div>
    </>
  );
}

export default Projects;