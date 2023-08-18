import React from 'react';
import './TeamBlurb.css';

function TeamBlurb(props) {

  const {
    darkMode,
    teamName,
    selectedTeam,
    about,
    numSlides,
    showSlides,
    checkpoints
  } = props;

  function generateSlides() {
    let i
    let slides = []

    for (i = 0; i < numSlides; i++) {
        slides.push(React.createElement('div', {className: teamName + '-' + (i + 1) + ' ' + teamName + '-carousel blurb-carousel'}))
    }

    return slides
  }

  function generateDots() {
    let i
    let dots = []

    for (i = 0; i < numSlides; i++) {
        let slide = i + 1
        dots.push(React.createElement('span', {class: teamName + '-dot blurb-dot', onClick: () => showSlides(teamName, slide)}))
    }

    return dots
  }

  function generateTimeline() {
    let i
    let sorted_checkpoints = []
    let timeline = []

    sorted_checkpoints = checkpoints

    for (i = 0; i < sorted_checkpoints.length; i++) {
        sorted_checkpoints[i][0] = new Date(sorted_checkpoints[i][0])
    }

    sorted_checkpoints = sorted_checkpoints.sort(function(a, b){return a[0] - b[0]})

    for (i = 0; i < sorted_checkpoints.length; i++) {
        let month = sorted_checkpoints[i][0].toLocaleString('default', {month: 'short'})
        let day = sorted_checkpoints[i][0].getDate()
        let year = sorted_checkpoints[i][0].getFullYear()
        
        let title = React.createElement('h2', {}, month + ' ' + day + ', ' + year)
        let text = React.createElement('p', {}, sorted_checkpoints[i][1])

        let content = React.createElement('div', {class: 'content'}, title, text)
        timeline.push(React.createElement('div', {class: 'container'}, content))
    }

    return timeline
  }

  return (
    <div id={teamName + '-blurb'} className={teamName + '-blurb team-blurb'} style={{display: selectedTeam === teamName ? 'flex' : 'none', backgroundColor: darkMode ? 'black' : 'white'}}>
        <div className='divider'></div>

        <div className='blurb-title' style={{color: darkMode ? 'white' : 'black', display: numSlides > 0 ? 'block' : 'none'}}>
            GALLERY
        </div>

        <div className='divider'></div>

        {generateSlides()}

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

                <div class="timeline">
                <div className="container">
                <div className="content">
                <h2>2017</h2>
                <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
                </div>
              </div>
              
              <div class="container">
                <div class="content">
                  <h2>2016</h2>
                  <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
                </div>
              </div>
              <div class="container">
                <div class="content">
                  <h2>2015</h2>
                  <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
                </div>
              </div>
              <div class="container">
                <div class="content">
                  <h2>2012</h2>
                  <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
                </div>
              </div>
              <div class="container">
                <div class="content">
                  <h2>2011</h2>
                  <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
                </div>
              </div>
              <div class="container">
                <div class="content">
                  <h2>2007</h2>
                  <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
                </div>
              </div>
            </div>



        <div className='divider'></div>
              
    </div>
  );
}

export default TeamBlurb;