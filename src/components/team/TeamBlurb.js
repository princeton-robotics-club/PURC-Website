import React from 'react';
import './TeamBlurb.css';

function TeamBlurb(props) {

  const {
    darkMode,
    teamName,
    selectedTeam,
    about,
    slides,
    showSlides,
    milestones
  } = props;

  const img_ext = ['jpg', 'png', 'jpeg', 'svg']
  const video_ext = ['mov', 'mp3', 'mp4']

  function generateCarousel() {
    let i
    let carousel = []

    for (i = 0; i < slides.length; i++) {
        let content
        let url = slides[i][0]
        let orientation = slides[i][1]

        if (img_ext.includes(url.split('.').pop().toLowerCase())) {
          if (orientation === 'h') {
            content = React.createElement('img', {src: url, alt: '', style: {height: 'auto', width: '100%'}})
          } else if (orientation === 'v') {
            content = React.createElement('img', {src: url, alt: '', style: {height: '100%', width: 'auto'}})
          } else {
            content = React.createElement('div', {style: {textAlign: 'center', height: '100%', width: '100%', color: 'red', backgroundColor: 'gray'}}, 'ERROR: Unspecified orientation')
          }
        }
        else if (video_ext.includes(url.split('.').pop().toLowerCase())) {
          if (orientation === 'h') {
            content = React.createElement('video', {src: url, controls: true, style: {height: 'auto', width: '100%'}})
          } else if (orientation === 'v') {
            content = React.createElement('video', {src: url, controls: true, style: {height: '100%', width: 'auto'}})
          } else {
            content = React.createElement('div', {style: {textAlign: 'center', height: '100%', width: '100%', color: 'red', backgroundColor: 'gray'}}, 'ERROR: Unspecified orientation')
          }
        }
        else {
          content = React.createElement('div', {style: {textAlign: 'center', height: '100%', width: '100%', color: 'red', backgroundColor: 'gray'}}, 'ERROR: Unrecognized file extension')
        }
        
        carousel.push(React.createElement('div', {className: teamName + '-carousel blurb-carousel'}, content))
    }

    return carousel
  }

  function generateDots() {
    let i
    let dots = []

    for (i = 0; i < slides.length; i++) {
        let slide = i + 1
        dots.push(React.createElement('span', {class: teamName + '-dot blurb-dot', onClick: () => showSlides(teamName, slide)}))
    }

    return dots
  }

  function generateTimeline() {
    let i
    let sorted_milestones = []
    let timeline = []

    sorted_milestones = milestones

    for (i = 0; i < sorted_milestones.length; i++) {
        sorted_milestones[i][0] = new Date(sorted_milestones[i][0])
    }

    sorted_milestones = sorted_milestones.sort(function(a, b){return a[0] - b[0]})

    for (i = 0; i < sorted_milestones.length; i++) {
        let month = sorted_milestones[i][0].toLocaleString('default', {month: 'short'})
        let day = sorted_milestones[i][0].getDate()
        let year = sorted_milestones[i][0].getFullYear()
        
        let title = React.createElement('h2', {}, month + ' ' + day + ', ' + year)
        let text = React.createElement('p', {}, sorted_milestones[i][1])

        let content = React.createElement('div', {class: 'content'}, title, text)
        timeline.push(React.createElement('div', {class: 'container'}, content))
    }

    return timeline
  }

  return (
    <div id={teamName + '-blurb'} className={teamName + '-blurb team-blurb'} style={{display: selectedTeam === teamName ? 'flex' : 'none', backgroundColor: darkMode ? 'black' : 'white'}}>
        <div className='divider'></div>

        <div className='blurb-title' style={{color: darkMode ? 'white' : 'black', display: slides.length > 0 ? 'block' : 'none'}}>
            GALLERY
        </div>

        <div className='divider'></div>

        {generateCarousel()}

        <div className='divider'></div>

        {generateDots()}

        <div className='section'></div>

        <div className='blurb-title' style={{color: darkMode ? 'white' : 'black'}}>
            ABOUT
        </div>

        <div className='divider'></div>
            
        <div className='blurb-text' style={{color: darkMode ? 'white' : 'black'}}>
            {about}
        </div>

        <div className='section'></div>

        <div className='blurb-title' style={{color: darkMode ? 'white' : 'black'}}>
            TIMELINE
        </div>

        <div className='divider'></div>

          <div class="timeline">
              {generateTimeline()}
          </div>

        <div className='divider'></div>
              
    </div>
  );
}

export default TeamBlurb;