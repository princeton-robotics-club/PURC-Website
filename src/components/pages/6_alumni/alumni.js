import React, { useState } from 'react';
import Card from '../../card/Card';
import NameCard from '../../name-card/NameCard';
import '../Generic.css';
import './alumni.css';

import Ab0824 from '../../../images/about/ab0824.jpg';
import An4978 from '../../../images/about/an4978.jpg';
import Ernestm from '../../../images/about/ernestm.jpg';
import Ih2422 from '../../../images/about/ih2422.jpg';
import FaceCard from '../../face_card/FaceCard';
import { alumniData } from './data';
function Alumni(props) {
  const {
    // eslint-disable-next-line
    darkMode,
  } = props;

  const years = [2017, 2018, 2019, 2020, 2021, 2022, 2023];

  const [selectYear, setSelectYear] = useState(2022);

  const [alumni, setAlumni] = useState(alumniData);

  const handleSearch = (e) => {
    const query = e.target.value;
    const filtered = alumniData.filter((alumnus) => alumnus.name.toLowerCase().includes(query.toLowerCase()));
    setAlumni(filtered);
  };

  return (
    <>
      <div className="body-bg">
        <div className="join-bg-img" />
        <section className="article-centered">
          <div className={'title-blob' + (darkMode ? ' title-blob-dark' : ' title-blob-light')}>PURC ALUMNI </div>
          <Card
            darkMode={darkMode}
            pathString="/about#alumni"
            className={'text-box text-box-padded-not-below' + (darkMode ? ' text-box-dark' : ' text-box-light')}>
            <div className="centered-heading">
              Former Club Admins
              <div className="input-container">
                <input
                  className="search"
                  placeholder="Type a name to search ... "
                  onSubmit={(e) => e.preventDefault()}
                />
              </div>
            </div>
            <div className="centered-container">
              <FaceCard
                darkMode={darkMode}
                name="Alecia Barbieri"
                subtext={['Co-President & Media Lead']}
                image={Ab0824}
              />
              <FaceCard darkMode={darkMode} name="Ian Henriques" subtext={['Co-President']} image={Ih2422} />
              <FaceCard darkMode={darkMode} name="Ernest McCarter" subtext={['Co-President']} image={Ernestm} />
              <FaceCard darkMode={darkMode} name="Andy Nguyen" subtext={['Treasurer']} image={An4978} />
            </div>
          </Card>
          <Card
            darkMode={darkMode}
            pathString="/about#alumni"
            className={'text-box text-box-padded-not-below' + (darkMode ? ' text-box-dark' : ' text-box-light')}>
            <div className="centered-heading">
              Former Club Members
              <div className="input-container">
                <input className="search" placeholder="Type a name to search ... " onSubmit={handleSearch} />
              </div>
            </div>
            <div className="centered-container">
              <div
                style={{
                  display: 'flex',
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 8,
                  paddingBottom: 40,
                }}>
                {years.map((year) => {
                  return (
                    <button
                      style={{
                        paddingBlock: 8,
                        paddingInline: 30,
                        borderRadius: 5,
                        outline: 'none',
                        backgroundColor: 'transparent',
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