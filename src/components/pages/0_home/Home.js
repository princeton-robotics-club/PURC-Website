import React from 'react';
import '../Generic.css';
import './Home.css';

// <div className='home-bg-img'/>

function Home(props) {

  const {
    // eslint-disable-next-line
    darkMode
  } = props;

  const HERO_WORDS = ['design', 'build', 'wire', 'code', 'test']

  return (
    <div className='body-bg'>
     <div className='hero-img'>
      <div className='hero-logo'></div>
      <div className='hero-text'><b>{} the future </b></div>
     </div>
    </div>
  );
}

export default Home;