import React from 'react';
import Card from '../../card/Card';
import FaceCard from '../../face_card/FaceCard';
import '../Generic.css';
import './About.css';

import Ab0824 from '../../../images/about/ab0824.jpg';
import Glaser from '../../../images/about/alex-glaser.jpg';
import An4978 from '../../../images/about/an4978.jpg';
import Arthurts from '../../../images/about/arthurts.jpg';
import August from '../../../images/about/august.jpg';
import Aw3592 from '../../../images/about/aw3592.jpeg';
import Cg6149 from '../../../images/about/cg6149.png';
import Ck4287 from '../../../images/about/ck4287.jpg';
import Dc2326 from '../../../images/about/dc2326.jpg';
import Dc4266 from '../../../images/about/dc4266.jpg';
import Dd6849 from '../../../images/about/dd6849.jpg';
import Df1314 from '../../../images/about/df1314.jpg';
import Edchen from '../../../images/about/edchen.jpg';
import Ernestm from '../../../images/about/ernestm.jpg';
import Fh9696 from '../../../images/about/fh9696.jpg';
import Gn7269 from '../../../images/about/gn7269.jpg';
import Ih2422 from '../../../images/about/ih2422.jpg';
import Js4346 from '../../../images/about/js4346.jpg';
import Jt1065 from '../../../images/about/jt1065.jpg';
import Jt7347 from '../../../images/about/jt7347.jpg';
import Kphan from '../../../images/about/kphan.jpg';
import Lyon from '../../../images/about/lyon.png';
import Majumdar from '../../../images/about/majumdar.jpg';
import Mh6419 from '../../../images/about/mh6419.jpg';
import mm5764 from '../../../images/about/mm5764.jpg';
import Ms8364 from '../../../images/about/ms8364.jpg';
import Sg8409 from '../../../images/about/sg8409.jpg';
import Sr6770 from '../../../images/about/sr6770.jpg';
import Th5879 from '../../../images/about/th5879.jpg';
import Vv5226 from '../../../images/about/vv5226.jpg';
import Wh9128 from '../../../images/about/wh9128.jpg';
import Za3545 from '../../../images/about/za3545.jpg';
import Zk9002 from '../../../images/about/zk9002.jpg';

function About(props) {
  const { darkMode } = props;
  return (
    <>
      <div className="body-bg">
        <div className={'about-bg-img' + (darkMode ? ' about-bg-img-dark' : ' about-bg-img-light')} />
        <section className="article-centered">
          <div className={'title-blob' + (darkMode ? ' title-blob-dark' : ' title-blob-light')}> ABOUT US </div>
          <Card
            darkMode={darkMode}
            pathString="/about#officers"
            className={'text-box text-box-padded-not-below' + (darkMode ? ' text-box-dark' : ' text-box-light')}>
            <div className="centered-heading">CLUB OFFICERS</div>
            <div className="centered-container">
              <FaceCard
                darkMode={darkMode}
                name="Alecia Barbieri"
                subtext={['Co-President', 'Droid Team Lead', 'Media Lead']}
                image={Ab0824}
              />
              <FaceCard
                darkMode={darkMode}
                name="Ian Henriques"
                subtext={['Co-President', 'Pacbot SW Lead', 'Media Lead']}
                image={Ih2422}
              />
              <FaceCard
                darkMode={darkMode}
                name="Ernest McCarter"
                subtext={['Co-President', 'Pacbot SW Lead']}
                image={Ernestm}
              />
              <FaceCard
                darkMode={darkMode}
                name="Andy Nguyen"
                subtext={['Treasurer', 'Pacbot SW Lead']}
                image={An4978}
              />

              <FaceCard
                darkMode={darkMode}
                name="Maria Heffernen"
                subtext={['Officer', 'Training Lead']}
                image={Mh6419}
              />
              <FaceCard
                darkMode={darkMode}
                name="Freddy Hernandez"
                subtext={['Officer', 'Outreach Lead', 'Media Lead']}
                image={Fh9696}
              />

              <FaceCard darkMode={darkMode} name="Jack Toubes" subtext={['Officer', 'Pacbot HW Lead']} image={Jt1065} />
              <FaceCard darkMode={darkMode} name="Glen Nfor" subtext={['Officer', 'Web Development']} image={Gn7269} />
              <FaceCard
                darkMode={darkMode}
                name="Mahir Majid"
                subtext={['Officer', 'Web Development']}
                image={mm5764}
              />
              <FaceCard darkMode={darkMode} name="Aidan Ward" subtext={['Officer', 'Training Lead']} image={Aw3592} />
              <FaceCard darkMode={darkMode} name="Caden Kang" subtext={['Officer', 'Media Lead']} image={Ck4287} />
              <FaceCard
                darkMode={darkMode}
                name="Zachary Andrews"
                subtext={['Officer', 'School Outreach']}
                image={Za3545}
              />
              <FaceCard darkMode={darkMode} name="Divija Durga" subtext={['Officer', 'Exo HW Lead']} image={Dd6849} />
              <FaceCard
                darkMode={darkMode}
                name="Tate Hutchins"
                subtext={['Officer', 'Business Team']}
                image={Th5879}
              />
              <FaceCard darkMode={darkMode} name="Sarah R" subtext={['Officer']} image={Sr6770} />
              <FaceCard darkMode={darkMode} name="Chris Ganter" subtext={['Officer']} image={Cg6149} />
              <FaceCard
                darkMode={darkMode}
                name="Vasumathi Venkat"
                subtext={['Officer', 'Social Chair']}
                image={Vv5226}
              />
              <FaceCard darkMode={darkMode} name="Stephen Gilton" subtext={['Officer']} image={Sg8409} />
              <FaceCard darkMode={darkMode} name="Zara Kamga" subtext={['Officer', 'Social Chair']} image={Zk9002} />
              {false && (
                <FaceCard
                  darkMode={darkMode}
                  name="Jenna Mullins"
                  subtext={['Officer', 'Social Chair']}
                  image={Gn7269}
                />
              )}
            </div>
          </Card>

          <Card
            darkMode={darkMode}
            pathString="/about#leads"
            className={'text-box text-box-padded-not-below' + (darkMode ? ' text-box-dark' : ' text-box-light')}>
            <div className="centered-heading">SUBTEAM LEADS</div>
            <div className="centered-container">
              <FaceCard darkMode={darkMode} name="David Chang" subtext={['Droid Mech Lead']} image={Dc4266} />
              <FaceCard darkMode={darkMode} name="Eric Chen" subtext={['Drone HW Lead']} image={Edchen} />
              <FaceCard darkMode={darkMode} name="Dak Cheng" subtext={['Golf Cart HW Lead']} image={Dc2326} />
              <FaceCard darkMode={darkMode} name="David Fu" subtext={['Rover Team Lead']} image={Df1314} />
              <FaceCard darkMode={darkMode} name="William Huang" subtext={['Rover Team Lead']} image={Wh9128} />

              <FaceCard darkMode={darkMode} name="Kevin Phan" subtext={['Golf Cart SW Lead']} image={Kphan} />
              <FaceCard darkMode={darkMode} name="Joshua Soberano" subtext={['Exo Team Lead']} image={Js4346} />
              <FaceCard darkMode={darkMode} name="Jimmy Tran" subtext={['Drone Lead']} image={Jt7347} />
              <FaceCard darkMode={darkMode} name="Arti Schmidt" subtext={['Drone SW Lead']} image={Arthurts} />
              <FaceCard darkMode={darkMode} name="Mariko Storey" subtext={['Rover Team Lead']} image={Ms8364} />
            </div>
          </Card>

          {false && (
            <Card
              darkMode={darkMode}
              pathString="/about#members"
              className={'text-box text-box-padded' + (darkMode ? ' text-box-dark' : ' text-box-light')}>
              <div className="centered-heading">TEAM MEMBERS</div>
            </Card>
          )}

          <Card
            darkMode={darkMode}
            pathString="/about#faculty"
            className={'text-box text-box-padded-not-below' + (darkMode ? ' text-box-dark' : ' text-box-light')}>
            <div className="centered-heading">FACULTY ADVISERS</div>
            <div className="centered-container">
              <FaceCard darkMode={darkMode} name="Prof. August" subtext={['ECE']} image={August} />
              <FaceCard darkMode={darkMode} name="Prof. Lyon" subtext={['ECE']} image={Lyon} />
              <FaceCard darkMode={darkMode} name="Prof. Majumdar" subtext={['MAE']} image={Majumdar} />
              <FaceCard darkMode={darkMode} name="Prof. Glaser" subtext={['MAE']} image={Glaser} />
            </div>
          </Card>
        </section>
      </div>
    </>
  );
}

export default About;
