import React from 'react';
import '../Generic.css';
import './Home.css';

// <div className='home-bg-img'/>

function Home(props) {

  const {
    // eslint-disable-next-line
    darkMode
  } = props;

  return (
    <div className='body-bg'>
      <section className='article-centered'>
        <div className={'title-blob' + (darkMode ? ' title-blob-dark' : ' title-blob-light')}> HOME </div>
      </section>
    </div>
  );
}

export default Home;