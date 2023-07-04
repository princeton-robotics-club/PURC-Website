import React from 'react';
import '../Generic.css';
import './Join.css';

function Join(props) {

  const {
    // eslint-disable-next-line
    darkMode
  } = props;

  return (
    <>
      <div className='body-bg'>
        <div className='join-bg-img'/>
        <div className='article-centered'>
          <div className={'title-blob' + (darkMode ? ' title-blob-dark' : ' title-blob-light')}>JOIN</div>
        </div>
      </div>
    </>
  );
}

export default Join;