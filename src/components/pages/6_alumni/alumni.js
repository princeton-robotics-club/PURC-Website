import React, { useRef, useState } from 'react';
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

  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef(null);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase().trim();
    setSearchQuery(query);

    if (query === '') {
      setAlumni(alumniData);
      return;
    }

    const filtered = alumniData.filter(
      (alumnus) =>
        alumnus.name.toLowerCase().includes(query) ||
        (alumnus.roles && alumnus.roles.some((role) => role.toLowerCase().includes(query)))
    );
    setAlumni(filtered);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setAlumni(alumniData);
    if (searchInputRef.current) {
      searchInputRef.current.value = '';
      searchInputRef.current.focus();
    }
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
                  onChange={handleSearch}
                  value={searchQuery}
                />
              </div>
            </div>
            <div className="centered-container">
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  alignItems: 'center',
                  paddingBottom: 30,
                }}>
                <label
                  htmlFor="year-select"
                  style={{
                    marginBottom: '10px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    color: darkMode ? '#f0f0f0' : '#333',
                  }}>
                  Select Year:
                </label>
                <select
                  id="year-select"
                  value={selectYear}
                  onChange={(e) => setSelectYear(Number(e.target.value))}
                  className={`year-select ${darkMode ? 'year-select-dark' : 'year-select-light'}`}
                  style={{
                    padding: '10px 15px',
                    borderRadius: '8px',
                    fontSize: '16px',
                    width: '200px',
                    cursor: 'pointer',
                    outline: 'none',
                    border: darkMode ? '1px solid #555' : '1px solid #ddd',
                    backgroundColor: darkMode ? 'rgba(40, 40, 40, 0.8)' : 'rgba(250, 250, 250, 0.8)',
                    color: darkMode ? '#f0f0f0' : '#333',
                    fontFamily: 'Poppins',
                  }}>
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                  gap: '20px',
                  justifyContent: 'center',
                  width: '100%',
                  padding: '0 10px',
                }}>
                {alumni
                  .filter((alumunus) => alumunus.years.includes(selectYear))
                  .map((alumnus, index) => {
                    return (
                      <NameCard
                        name={alumnus.name}
                        subtext={alumnus.roles}
                        darkMode={darkMode}
                        key={`alumus-${index}`}
                      />
                    );
                  })}
              </div>
            </div>
          </Card>
        </section>
      </div>
    </>
  );
}

export default Alumni;
