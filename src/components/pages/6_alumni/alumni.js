import React, { useState } from 'react';
import Card from '../../card/Card';
import NameCard from '../../name-card/NameCard';
import '../Generic.css';
import './alumni.css';

import { alumniData } from './data';
function Alumni(props) {
  const {
    // eslint-disable-next-line
    darkMode,
  } = props;

  const years = [2017, 2018, 2019, 2020, 2021, 2022, 2023];

  const [selectYear, setSelectYear] = useState(2022);

  const [alumni, setAlumni] = useState(alumniData);

  return (
    <>
      <div className="body-bg">
        <div className="join-bg-img" />
        <section className="article-centered">
          <div className={'title-blob' + (darkMode ? ' title-blob-dark' : ' title-blob-light')}>PURC ALUMNI </div>
          <Card
            darkMode={darkMode}
            className={
              'text-box text-box-padded text-box-padded-extra' + (darkMode ? ' text-box-dark' : ' text-box-light')
            }></Card>
          <Card
            darkMode={darkMode}
            pathString="/about#alumni"
            className={'text-box text-box-padded-not-below' + (darkMode ? ' text-box-dark' : ' text-box-light')}>
            <div className="centered-heading">Former Club Admins</div>
            <div className="centered-container"></div>
          </Card>
          <Card
            darkMode={darkMode}
            pathString="/about#alumni"
            className={'text-box text-box-padded-not-below' + (darkMode ? ' text-box-dark' : ' text-box-light')}>
            <div className="centered-heading">Former Club Members</div>
            <div className="centered-container">
              <div
                style={{
                  display: 'flex',
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 8,
                  paddingBottom: 16,
                }}>
                {years.map((year) => {
                  return (
                    <button
                      style={{
                        paddingBlock: 8,
                        paddingInline: 30,
                        borderRadius: 5,
                        outline: 'none',
                        backgroundColor: darkMode ? '#222' : '#bbb',
                        color: darkMode ? '#bbb' : '#222',
                        cursor: 'pointer',
                        fontSize: 18,
                        fontFamily: 'Poppins',
                      }}
                      onClick={() => setSelectYear(year)}
                      key={year}
                      className={`year-button ${selectYear === year ? 'active' : ''} ${
                        darkMode ? 'year-button-dark' : 'year-button-light'
                      }`}>
                      {year}
                    </button>
                  );
                })}
              </div>
              {alumni
                .filter((alumunus) => alumunus.years.includes(selectYear))
                .map((alumnus, index) => {
                  return <NameCard name={alumnus.name} subtext={alumnus.roles} key={`alumus-${index}`} />;
                })}
            </div>
          </Card>
        </section>
      </div>
    </>
  );
}

export default Alumni;
