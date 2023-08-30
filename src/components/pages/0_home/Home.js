import React, {useState, useEffect} from 'react';
import '../Generic.css';
import './Home.css';

// <div className='home-bg-img'/>

function Home(props) {

  const {
    // eslint-disable-next-line
    darkMode
  } = props;

  const HERO_WORDS = ['design', 'build', 'wire', 'code', 'test']
  const HERO_SLIDES = ['pacbot-2.jpg', 'droid-1.jpg']
  let wordIndex = 0
  let letterIndex = HERO_WORDS[0].length - 1
  let textTimer = 0
  let forward = false
  let showBar = true
  let slideIndex = 0

  useEffect(() => {
    const wordTimer = setInterval(() => {editWord()}, 75);
    const barTimer = setInterval(() => {editBar()}, 500);
    const slideTimer = setInterval(() => {showSlides()}, 500);
    
    return () => {
      clearInterval(wordTimer)
      clearInterval(barTimer)
      clearInterval(slideTimer)
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
      document.getElementById('hero-bar').style.color = 'rgb(231, 117, 0)';
    } else {
      document.getElementById('hero-bar').style.color = 'rgba(0, 0, 0, 0)';
    }

    showBar = !showBar
  }

  function showSlides() {
    document.getElementById('hero-img').style.backgroundImage = 'url(../../../images/home/drone-1.jpg);'
    //document.getElementById('hero-img').style.backgroundImage = `linear-gradient(rgba(231, 117, 0, 0.6),  rgba(3, 162, 220, 0.6), rgba(3, 162, 220, 0.6)), url(../../../images/home/${HERO_SLIDES[slideIndex]});`
    slideIndex += 1

    if (slideIndex >= HERO_SLIDES.length){
      slideIndex = 0
    }
  }

  return (
    <div className='body-bg'>
      <div id='hero-img' className='hero-img'>
        <div className='hero-logo'></div>
        <div className='hero-text'>
          <span id='hero-word' className='hero-word'>{HERO_WORDS[0]}</span>
          <span id='hero-bar' className='hero-bar'>|</span>
          the&nbsp;&nbsp;future
        </div>
        <div className='hero-subtext'>princeton university robotics club</div>
      </div>
    </div>
  );
}

export default Home;