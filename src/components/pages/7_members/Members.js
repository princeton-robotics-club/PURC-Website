import React from 'react';
import Card from '../../card/Card';
import '../Generic.css';

function Members(props) {
  const {
    // eslint-disable-next-line
    darkMode,
  } = props;

  return (
    <>
      <div className="body-bg">
        <div className="join-bg-img" />
        <section className="article-centered">
          <div className={'title-blob' + (darkMode ? ' title-blob-dark' : ' title-blob-light')}>
            Robotic Club Members of 23/24
          </div>
          <Card
            darkMode={darkMode}
            pathString="/about#alumni"
            className={'text-box text-box-padded-not-below' + (darkMode ? ' text-box-dark' : ' text-box-light')}>
            <div className="centered-heading">ROBOTICS CLUB MEMBERS</div>
            <div className="centered-container"></div>
          </Card>
        </section>
      </div>
    </>
  );
}

export default Members;
