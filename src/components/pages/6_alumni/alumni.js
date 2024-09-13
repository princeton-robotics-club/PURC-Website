import React, { useState } from 'react';
import Arthurts from '../../../images/about/arthurts.jpg';
import Cg6149 from '../../../images/about/cg6149.png';
import Df1314 from '../../../images/about/df1314.jpg';
import Ernestm from '../../../images/about/ernestm.jpg';
import Ih2422 from '../../../images/about/ih2422.jpg';
import Jt1065 from '../../../images/about/jt1065.jpg';
import Jt7347 from '../../../images/about/jt7347.jpg';
import Kphan from '../../../images/about/kphan.jpg';
import Ms8364 from '../../../images/about/ms8364.jpg';
import Wh9128 from '../../../images/about/wh9128.jpg';

import Card from '../../card/Card';
import FaceCard from '../../face_card/FaceCard';
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
                  className={'search ' + (darkMode ? 'search-dark' : 'search-light')}
                  placeholder="Type a name to search ... "
                  onSubmit={(e) => e.preventDefault()}
                />
              </div>
            </div>
            <div className="centered-container">
              <FaceCard darkMode={darkMode} name="Ian Henriques" subtext={["Co-President '24"]} image={Ih2422} />
              <FaceCard darkMode={darkMode} name="Ernest McCarter" subtext={["Co-President '24"]} image={Ernestm} />
              <FaceCard darkMode={darkMode} name="Jack Toubes" subtext={["Officer '24"]} image={Jt1065} />
              <FaceCard darkMode={darkMode} name="Kevin Phan" subtext={['Golf Cart SW Lead']} image={Kphan} />
              <FaceCard darkMode={darkMode} name="David Fu" subtext={['Rover Team Lead']} image={Df1314} />
              <FaceCard darkMode={darkMode} name="Mariko Storey" subtext={['Rover Team Lead']} image={Ms8364} />
              <FaceCard darkMode={darkMode} name="William Huang" subtext={['Rover Team Lead']} image={Wh9128} />
              <FaceCard darkMode={darkMode} name="Jimmy Tran" subtext={['Drone Team Lead']} image={Jt7347} />
              <FaceCard darkMode={darkMode} name="Arti Schmidt" subtext={['Drone SW Lead']} image={Arthurts} />
              <FaceCard darkMode={darkMode} name="Chris Ganter" subtext={['Officer']} image={Cg6149} />
            </div>
          </Card>
          <Card
            darkMode={darkMode}
            pathString="/about#alumni"
            className={'text-box text-box-padded-not-below' + (darkMode ? ' text-box-dark' : ' text-box-light')}>
            <div className="centered-heading">
              Former Club Members
              <div className="input-container">
                <input
                  className={'search ' + (darkMode ? 'search-dark' : 'search-light')}
                  placeholder="Type a name to search ... "
                  onSubmit={handleSearch}
                />
              </div>
            </div>
            <div className="centered-container">
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
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
