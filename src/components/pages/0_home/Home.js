import React, {useEffect} from 'react';
import '../Generic.css';
import './Home.css';
import { Link } from 'react-router-dom';
import Card from '../../card/Card';

function Home(props) {

  const {
    darkMode
  } = props;

  const HERO_WORDS = ['design', 'build', 'wire', 'code', 'test']
  let wordIndex = 0
  let letterIndex = HERO_WORDS[0].length - 1
  let textTimer = 0
  let forward = false
  let showBar = true

  useEffect(() => {
    const wordTimer = setInterval(() => {editWord()}, 75);
    const barTimer = setInterval(() => {editBar()}, 500);
    
    return () => {
      clearInterval(wordTimer)
      clearInterval(barTimer)
    }
  });

  function editWord() {
    document.getElementById('hero-word').innerHTML = HERO_WORDS[wordIndex].substring(0, letterIndex + 1)

    if (letterIndex >= HERO_WORDS[wordIndex].length - 1 && textTimer < 50) {
      textTimer += 1

    } else {
      if (forward) {
        letterIndex += 1

        if (letterIndex >= HERO_WORDS[wordIndex].length - 1) {
          forward = false
        }

      } else {
        letterIndex -= 1

        if (letterIndex <= -2){
          forward = true
          textTimer = 0
          letterIndex = 0
          wordIndex += 1

          if (wordIndex >= HERO_WORDS.length){
            wordIndex = 0
          }
        }

      }
    }
  }

  function editBar() {
    if (showBar) {
      document.getElementById('hero-bar').style.color = 'rgb(231, 117, 0)'
    } else {
      document.getElementById('hero-bar').style.color = 'rgba(0, 0, 0, 0)'
    }

    showBar = !showBar
  }

  return (
    <div className='body-bg'>
      <div className='home-container'>
        <div className='hero-container'>
          <div className='hero-img'>
              <div id='hero-img-6' className='hero-img-content'></div>
              <div id='hero-img-5' className='hero-img-content'></div>
              <div id='hero-img-4' className='hero-img-content'></div>
              <div id='hero-img-3' className='hero-img-content'></div>
              <div id='hero-img-2' className='hero-img-content'></div>
              <div id='hero-img-1' className='hero-img-content'></div>
          </div>

          <div className='hero-no-img'>
            <div className='hero-logo'></div>
              <div className='hero-text'>
                <span id='hero-word' className='hero-word'>{HERO_WORDS[0]}</span>
                <span id='hero-bar' className='hero-bar'>|</span>
                the&nbsp;&nbsp;future
              </div>
            <div className='hero-subtext'>princeton university robotics club</div>
          </div>
        </div>

        <div className='post-hero-container'>
          <section className='article-centered-home'>
              <Card darkMode = {darkMode}
                  className={'first-box-margin text-box text-box-padded' + (darkMode ? ' text-box-dark' : ' text-box-light')}>
                  
                  <div className='centered-heading'> 
                  THE FUTURE...
                  </div>
                  
                  ...Is a world where humans and fully autonomous,
                  intelligent machines work together to solve problems
                  and save lives. Our robots roll, ride, flex, and fly into
                  that future.

                  <br></br>
                  <br></br>

                  We accept members of all backgrounds and experience
                  levels because we want to offer all Princeton students
                  a fair opportunity to achieve Robotics mastery. <Link to='/join' className={'link'+(darkMode ? ' link-orange' : ' link-coral')}>Join</Link> us
                  for invitations to weekly meetings, trainings, and events
                  that let you put the <span className='link link-blue'>I</span> in ROBOT<span className='link link-blue'>I</span>CS and empower you to fill <span 
                  className='link link-blue'>UR</span> place in P<span className='link link-blue'>UR</span>C.

              </Card>

          </section>
        </div>

    </div>
  </div>
  );
}

export default Home;