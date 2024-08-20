import React, { useState } from 'react';
import Card from '../../card/Card';
import FaceCard from '../../face_card/FaceCard';
import '../Generic.css';
import './Members.css';

import Ab0824 from '../../../images/about/ab0824.jpg';
import An4978 from '../../../images/about/an4978.jpg';
import Aw3592 from '../../../images/about/aw3592.jpeg';
import Cg6149 from '../../../images/about/cg6149.png';
import Ck4287 from '../../../images/about/ck4287.jpg';
import Dd6849 from '../../../images/about/dd6849.jpg';
import Ernestm from '../../../images/about/ernestm.jpg';
import ey3875 from '../../../images/about/ey3875.jpeg';
import Fh9696 from '../../../images/about/fh9696.jpg';
import Gn7269 from '../../../images/about/gn7269.jpg';
import Ih2422 from '../../../images/about/ih2422.jpg';
import Jt1065 from '../../../images/about/jt1065.jpg';
import Mh6419 from '../../../images/about/mh6419.jpg';
import mm5764 from '../../../images/about/mm5764.jpg';
import Sg8409 from '../../../images/about/sg8409.jpg';
import Sr6770 from '../../../images/about/sr6770.jpg';
import Th5879 from '../../../images/about/th5879.jpg';
import Vv5226 from '../../../images/about/vv5226.jpg';
import Za3545 from '../../../images/about/za3545.jpg';
import Zk9002 from '../../../images/about/zk9002.jpg';

function Members(props) {
  const {
    // eslint-disable-next-line
    darkMode,
  } = props;

  const [searchQuery, setSearchQuery] = useState('');

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
            <div className="centered-heading">
              ROBOTICS CLUB MEMBERS
              <div className="input-container">
                <input
                  className="search"
                  placeholder="Type a name to search ... "
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onSubmit={(e) => e.preventDefault()}
                />
              </div>
            </div>

            <div className="centered-container">
              <FaceCard darkMode={darkMode} name="Alecia Barbieri" subtext={['Droid Team']} image={Ab0824} />
              <FaceCard darkMode={darkMode} name="Ian Henriques" subtext={['Pacbot Team']} image={Ih2422} />
              <FaceCard
                darkMode={darkMode}
                name="Ernest McCarter"
                subtext={['Pacbot Team', 'Drone Team']}
                image={Ernestm}
              />
              <FaceCard darkMode={darkMode} name="Andy Nguyen" subtext={['Pacbot Team']} image={An4978} />
              <FaceCard darkMode={darkMode} name="Stephen Gilton" subtext={['Droid Team']} image={Sg8409} />

              <FaceCard darkMode={darkMode} name="Aidan Ward" subtext={[' Pacbot Team']} image={Aw3592} />
              <FaceCard darkMode={darkMode} name="Caden Kang" subtext={['Drone Team']} image={Ck4287} />
              <FaceCard darkMode={darkMode} name="Chris Ganter" subtext={['Rover Team']} image={Cg6149} />
              <FaceCard darkMode={darkMode} name="Divija Durga" subtext={['Droid Team']} image={Dd6849} />
              <FaceCard darkMode={darkMode} name="Emily Yang " subtext={['FIRST Outreach Lead']} image={ey3875} />
              <FaceCard
                darkMode={darkMode}
                name="Freddy Hernandez"
                subtext={['Outreach & Media Lead']}
                image={Fh9696}
              />
              <FaceCard darkMode={darkMode} name="Glen Nfor" subtext={['Robocup Team', 'Rover Team']} image={Gn7269} />
              <FaceCard darkMode={darkMode} name="Jack Toubes" subtext={['Drone Team', 'Pacbot Team']} image={Jt1065} />
              <FaceCard darkMode={darkMode} name="Jenna Mullins" subtext={['Golf Cart Team']} image={''} />

              <FaceCard darkMode={darkMode} name="Mahir Majid" subtext={['Robocup team']} image={mm5764} />
              <FaceCard darkMode={darkMode} name="Maria Heffernen" subtext={['Drone Team']} image={Mh6419} />
              <FaceCard darkMode={darkMode} name="Miyu Yamane" subtext={['Bionics Team']} image={''} />
              <FaceCard darkMode={darkMode} name="Sarah R" subtext={['Droid Team']} image={Sr6770} />
              <FaceCard darkMode={darkMode} name="Tate Hutchins" subtext={['Business Team Lead']} image={Th5879} />
              <FaceCard
                darkMode={darkMode}
                name="Vasumathi Venkat"
                subtext={['Officer & Social Chair']}
                image={Vv5226}
              />
              <FaceCard
                darkMode={darkMode}
                name="Zachary Andrews"
                subtext={['Officer & Outreach Lead']}
                image={Za3545}
              />
              <FaceCard darkMode={darkMode} name="Zara Kamga" subtext={['DEI Officer ']} image={Zk9002} />
            </div>
          </Card>
        </section>
      </div>
    </>
  );
}

export default Members;
