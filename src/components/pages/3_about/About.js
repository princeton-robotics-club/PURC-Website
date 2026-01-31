import React from "react";
import Card from "../../card/Card";
import FaceCard from "../../face_card/FaceCard";
import "../Generic.css";
import "./About.css";

import ac1180 from "../../../images/about/ac1180.jpg";
import Glaser from "../../../images/about/alex-glaser.jpg";
import as3115 from "../../../images/about/as3115.jpg";
import August from "../../../images/about/august.jpg";
import Aw3592 from "../../../images/about/aw3592.jpeg";
import Ck4287 from "../../../images/about/ck4287.jpg";
import Dd6849 from "../../../images/about/dd6849.jpg";
import es5889 from "../../../images/about/es5889.jpg";
import Gn7269 from "../../../images/about/gn7269.jpg";
import hb7778 from "../../../images/about/hb7778.jpg";
import jm7828 from "../../../images/about/jm7828.jpg";
import Js4346 from "../../../images/about/js4346.jpg";
import Lyon from "../../../images/about/lyon.png";
import Majumdar from "../../../images/about/majumdar.jpg";
import mm5764 from "../../../images/about/mm5764.jpg";
import my9689 from "../../../images/about/my9689.jpg";
import ns4593 from "../../../images/about/ns4593.jpg";
import rk3979 from "../../../images/about/rk3979.jpg";
import Sg8409 from "../../../images/about/sg8409.jpg";
import Sr6770 from "../../../images/about/sr6770.jpg";
import Vv5226 from "../../../images/about/vv5226.jpg";
import wm2964 from "../../../images/about/wm2964.jpg";
import Za3545 from "../../../images/about/za3545.jpg";
import Zk9002 from "../../../images/about/zk9002.jpg";
import Jh5647 from "../../../images/about/Jh5647.png";
import Dk6149 from "../../../images/about/dk6149.jpeg";
import Qh9879 from "../../../images/about/qh9879.jpg";
import schan from "../../../images/about/schan.jpeg";
import mthanh from "../../../images/about/mthanh.jpeg";
import gkopf from "../../../images/about/gkopf.png";
import kharting from "../../../images/about/kharting.jpeg";
import mlloyd from "../../../images/about/mlloyd.jpeg";
import bjulian from "../../../images/about/bjulian.jpeg";
import jrivera from "../../../images/about/jrivera.jpeg";
import ngardiyehewa from "../../../images/about/ngardiyehewa.png";
import csaran from "../../../images/about/csaran.jpg";
import cli from "../../../images/about/cli.png";
import tsadowy from "../../../images/about/tsadowy.png";
import jmendes from "../../../images/about/jmendes.jpeg";
import hsoto from "../../../images/about/hsoto.jpg";
import ereinfurt from "../../../images/about/ereinfurt.JPG";
import gmyslo from "../../../images/about/gmyslo.png";
import TommyPhan from "../../../images/about/tommyphan.jpg";
import SarahHu from "../../../images/about/sarahhu.png";
import AllysonWalsh from "../../../images/about/allysonwalsh.jpg";
import AnnaXie from "../../../images/about/annaxie.jpg";
import ChinmayiRamasubramanian from "../../../images/about/chinmayiramasubramanian.jpg";

function About(props) {
  const { darkMode } = props;
  return (
    <>
      <div className="body-bg">
        <div
          className={
            "about-bg-img" +
            (darkMode ? " about-bg-img-dark" : " about-bg-img-light")
          }
        />
        <section className="article-centered">
          <div
            className={
              "title-blob" +
              (darkMode ? " title-blob-dark" : " title-blob-light")
            }
          >
            {" "}
            ABOUT US{" "}
          </div>

          {/* Admins Card */}
          <Card
            darkMode={darkMode}
            pathString="/about#officers"
            className={
              "text-box text-box-padded-not-below" +
              (darkMode ? " text-box-dark" : " text-box-light")
            }
          >
            <div className="centered-heading">CLUB OFFICERS</div>
            <div className="centered-container">

              <FaceCard
                darkMode={darkMode}
                name="Julian Mendes"
                subtext={["Co-President"]}
                gradYear="Class of 2028"
                major="Mechanical & Aerospace Engineering"
                image={jmendes}
              />
              <FaceCard
                darkMode={darkMode}
                name="Maxwell Lloyd"
                subtext={["Co-President"]}
                gradYear="Class of 2027"
                major="Computer Science"
                image={mlloyd}
              />
              <FaceCard
                darkMode={darkMode}
                name="Britzeyla Julian"
                subtext={["Co-President"]}
                gradYear="Class of 2028"
                major="Civil & Environmental Engineering"
                image={bjulian}
              />
              <FaceCard
                darkMode={darkMode}
                name="Stephen Gilton"
                subtext={["Treasurer"]}
                gradYear="Class of 2027"
                major="Computer Science"
                image={Sg8409}
              />
              <FaceCard
                darkMode={darkMode}
                name="Eric Zhang"
                subtext={["Treasurer in training"]}
                gradYear="Class of 2029"
                major="BSE Undeclared"
              />
              <FaceCard
                darkMode={darkMode}
                name="Anna Xie"
                subtext={["Business Team Lead"]}
                gradYear="Class of 2029"
                major="BSE Undeclared"
                image={AnnaXie}
              />
              <FaceCard
                darkMode={darkMode}
                name="Chinmaya Saran"
                subtext={["DEI Lead"]}
                gradYear="Class of 2028"
                major="Computer Science"
                image={csaran}
              />
              {/* <FaceCard
                darkMode={darkMode}
                name="Vacant"
                subtext={["Design Lead"]}
              /> */}
              <FaceCard
                darkMode={darkMode}
                name="Aidan Ward"
                subtext={["Training Lead"]}
                gradYear="Class of 2026"
                major="Computer Science"
                image={Aw3592}
              />
              <FaceCard
                darkMode={darkMode}
                name="Caden Kang"
                subtext={["Media Lead"]}
                gradYear="Class of 2027"
                major="Computer Science"
                image={Ck4287}
              />
              <FaceCard
                darkMode={darkMode}
                name="Jessica Hou"
                subtext={["Web Development Lead"]}
                gradYear="Class of 2028"
                major="Electrical & Computer Engineering"
                image={Jh5647}
              />
              <FaceCard
                darkMode={darkMode}
                name="Dini Nathyaa Kathriarachchi"
                subtext={["Social Lead"]}
                gradYear="Class of 2027"
                major="Mechanical & Aerospace Engineering"
                image={Dk6149}
              />
              <FaceCard
                darkMode={darkMode}
                name="Zachary Andrews"
                subtext={["School Outreach Co-Lead"]}
                gradYear="Class of 2027"
                major="Mechanical & Aerospace Engineering"
                image={Za3545}
              />
              <FaceCard
                darkMode={darkMode}
                name="Eden Reinfurt"
                subtext={["School Outreach Co-Lead"]}
                gradYear="Class of 2028"
                major="Physics"
                image={ereinfurt}
              />
              <FaceCard
                darkMode={darkMode}
                name="Ella Simmons"
                subtext={["School Outreach Co-Lead (FIRST@Princeton)"]}
                gradYear="Class of 2027"
                major="Mechanical & Aerospace Engineering"
                image={es5889}
              />
              <FaceCard
                darkMode={darkMode}
                name="Nadula Gardiyehewa"
                subtext={["Administrative Officer"]}
                gradYear="Class of 2028"
                major="Computer Science"
                image={ngardiyehewa}
              />
              <FaceCard
                darkMode={darkMode}
                name="Quentin James Hicks III"
                subtext={["Administrative Officer"]}
                gradYear="Class of 2028"
                major="Operations Research & Financial Engineering"
                image={Qh9879}
              />
              <FaceCard
                darkMode={darkMode}
                name="Jerry Rivera"
                subtext={["Administrative Officer"]}
                gradYear="Class of 2027"
                major="Electrical & Computer Engineering"
                image={jrivera}
              />
              <FaceCard
                darkMode={darkMode}
                name="George Kopf"
                subtext={["Administrative Officer"]}
                gradYear="Class of 2027"
                major="Electrical & Computer Engineering"
                image={gkopf}
              />
              <FaceCard
                darkMode={darkMode}
                name="Minh Thanh Nguyen"
                subtext={["Administrative Officer"]}
                gradYear="Class of 2027"
                major="Mechanical & Aerospace Engineering"
                image={mthanh}
              />
              <FaceCard
                darkMode={darkMode}
                name="Skyler Chan"
                subtext={["Administrative Officer"]}
                gradYear="Class of 2028"
                major="Electrical & Computer Engineering"
                image={schan}
              />
              <FaceCard
                darkMode={darkMode}
                name="Youssef Ali"
                subtext={["Administrative Officer"]}
                gradYear="Class of 2027"
                major="Electrical & Computer Engineering"
              />
              <FaceCard
                darkMode={darkMode}
                name="Tommy Phan"
                subtext={["Administrative Officer"]}
                gradYear="Class of 2029"
                major="AB Undeclared"
                image={TommyPhan}
              />
              <FaceCard
                darkMode={darkMode}
                name="Sarah Hu"
                subtext={["Administrative Officer"]}
                gradYear="Class of 2029"
                major="Mechanical & Aerospace Engineering"
                image={SarahHu}
              />
              <FaceCard
                darkMode={darkMode}
                name="Chinmayi Ramasubramanian"
                subtext={["Administrative Officer"]}
                gradYear="Class of 2028"
                major="Computer Science"
                image={ChinmayiRamasubramanian}
              />
            </div>
          </Card>

          {/* 
          
          ****Subteam Leads Card 
          
          */}
          <Card
            darkMode={darkMode}
            pathString="/about#leads"
            className={
              "text-box text-box-padded-not-below" +
              (darkMode ? " text-box-dark" : " text-box-light")
            }
          >
            <div className="centered-heading">SUBTEAM LEADS</div>
            <div className="centered-container">
              {/* DRONE (VTOL) */}
              <FaceCard
                darkMode={darkMode}
                name="Vasumathi Venkat"
                subtext={["Drone VTOL SW Lead"]}
                gradYear="Class of 2026"
                major="Electrical & Computer Engineering"
                image={Vv5226}
              />
              <FaceCard
                darkMode={darkMode}
                name="Hennessy Soto"
                subtext={["Drone VTOL HW Lead"]}
                gradYear="Class of 2027"
                major="Mechanical & Aerospace Engineering"
                image={hsoto}
              />

              {/* DRONE (Hoverloon) */}
              <FaceCard
                darkMode={darkMode}
                name="Skyler Chan"
                subtext={["Drone Hoverloon Project Lead"]}
                gradYear="Class of 2028"
                major="Electrical & Computer Engineering"
                image={schan}
              />
              <FaceCard
                darkMode={darkMode}
                name="Chinmayi Ramasubramanian"
                subtext={["Drone Hoverloon Software Lead"]}
                gradYear="Class of 2028"
                major="Computer Science"
                image={ChinmayiRamasubramanian}
              />
              <FaceCard
                darkMode={darkMode}
                name="Luke Ting"
                subtext={["Drone Hoverloon Autonomy Lead"]}
                gradYear="Class of 2028"
                major="Electrical & Computer Engineering"
              />
              <FaceCard
                darkMode={darkMode}
                name="Anthony Shen"
                subtext={["Drone Hoverloon Propulsion Lead"]}
                gradYear="Class of 2028"
                major="Chemical & Biological Engineering"
              />
              <FaceCard
                darkMode={darkMode}
                name="Allyson Walsh"
                subtext={["Drone Hoverloon Materials Lead"]}
                gradYear="Class of 2027"
                major="Mechanical & Aerospace Engineering"
                image={AllysonWalsh}
              />
              <FaceCard
                darkMode={darkMode}
                name="Dini Nathyaa Kathriarachchi"
                subtext={["Drone Hoverloon Power Systems Lead"]}
                gradYear="Class of 2027"
                major="Mechanical & Aerospace Engineering"
                image={Dk6149}
              />

              {/* DROID */}
              <FaceCard
                darkMode={darkMode}
                name="Sarah Rinzan"
                subtext={["Droid Electrical Lead"]}
                gradYear="Class of 2027"
                major="Electrical & Computer Engineering"
                image={Sr6770}
              />
              <FaceCard
                darkMode={darkMode}
                name="Zachary Andrews"
                subtext={["Droid Mechanical Lead"]}
                gradYear="Class of 2027"
                major="Mechanical & Aerospace Engineering"
                image={Za3545}
              />
              <FaceCard
                darkMode={darkMode}
                name="Aidan Ward"
                subtext={["Droid Software Co-Lead"]}
                gradYear="Class of 2026"
                major="Computer Science"
                image={Aw3592}
              />
              <FaceCard
                darkMode={darkMode}
                name="Jenna Mullin"
                subtext={["Droid Software Co-Lead"]}
                gradYear="Class of 2027"
                major="Computer Science"
                image={jm7828}
              />

              {/* WALL-E */}
              <FaceCard
                darkMode={darkMode}
                name="Maxwell Lloyd"
                subtext={["WALL-E Electrical Co-Lead"]}
                gradYear="Class of 2027"
                major="Computer Science"
                image={mlloyd}
              />
              <FaceCard
                darkMode={darkMode}
                name="Cheryl Li"
                subtext={["WALL-E Electrical Co-Lead"]}
                gradYear="Class of 2027"
                major="Electrical & Computer Engineering"
                image={cli}
              />
              <FaceCard
                darkMode={darkMode}
                name="Ella Simmons"
                subtext={["WALL-E Integration Lead"]}
                gradYear="Class of 2027"
                major="Mechanical & Aerospace Engineering"
                image={es5889}
              />
              <FaceCard
                darkMode={darkMode}
                name="Zachary Andrews"
                subtext={["WALL-E Mechanical Co-Lead"]}
                gradYear="Class of 2027"
                major="Mechanical & Aerospace Engineering"
                image={Za3545}
              />
              <FaceCard
                darkMode={darkMode}
                name="Wilson Moyer"
                subtext={["WALL-E Mechanical Co-Lead"]}
                gradYear="Class of 2027"
                major="Mechanical & Aerospace Engineering"
                image={wm2964}
              />

              {/* PACBOT */}
              <FaceCard
                darkMode={darkMode}
                name="Divija Durga"
                subtext={["Pacbot Hardware Co-Lead"]}
                gradYear="Class of 2027"
                major="Electrical & Computer Engineering"
                image={Dd6849}
              />
              <FaceCard
                darkMode={darkMode}
                name="Rayyan Nasser"
                subtext={["Pacbot Hardware Co-Lead"]}
                gradYear="Class of 2026"
                major="Mechanical & Aerospace Engineering"
              />
              <FaceCard
                darkMode={darkMode}
                name="Tomasz Sadowy"
                subtext={["Pacbot Software Lead"]}
                gradYear="Class of 2027"
                major="Computer Science"
                image={tsadowy}
              />

              {/* GOLF CART */}
              <FaceCard
                darkMode={darkMode}
                name="Nadula Gardiyehewa"
                subtext={["Golf Cart Hardware Co-Lead"]}
                gradYear="Class of 2028"
                major="Computer Science"
                image={ngardiyehewa}
              />
              <FaceCard
                darkMode={darkMode}
                name="Gabriella Myslo"
                subtext={["Golf Cart Hardware Co-Lead"]}
                gradYear="Class of 2026"
                major="Electrical & Computer Engineering"
                image={gmyslo}
              />
              <FaceCard
                darkMode={darkMode}
                name="Chinmaya Saran"
                subtext={["Golf Cart Software Lead"]}
                gradYear="Class of 2028"
                major="Computer Science"
                image={csaran}
              />

              {/* BIONICS */}
              <FaceCard
                darkMode={darkMode}
                name="Anherutowa Calvo"
                subtext={["Bionics Biomedical Lead"]}
                gradYear="Class of 2027"
                major="Chemical & Biological Engineering"
                image={ac1180}
              />
              <FaceCard
                darkMode={darkMode}
                name="Nathaniel Scott"
                subtext={["Bionics Electrical Lead"]}
                gradYear="Class of 2027"
                major="Electrical & Computer Engineering"
                image={ns4593}
              />
              <FaceCard
                darkMode={darkMode}
                name="Arjun Shetty"
                subtext={["Bionics Mechanical Lead"]}
                gradYear="Class of 2027"
                major="Mechanical & Aerospace Engineering"
                image={as3115}
              />
              <FaceCard
                darkMode={darkMode}
                name="Miyu Yamane"
                subtext={["Bionics Software Lead"]}
                gradYear="Class of 2027"
                major="Computer Science"
                image={my9689}
              />
              <FaceCard
                darkMode={darkMode}
                name="Kai Harting"
                subtext={["Bionics Outreach Lead"]}
                gradYear="Class of 2028"
                major="Chemical & Biological Engineering"
                image={kharting}
              />

              {/* TINKER */}
              <FaceCard
                darkMode={darkMode}
                name="Henry Baquerizo"
                subtext={["Tinker Electronics Lead"]}
                gradYear="Class of 2026"
                major="Electrical & Computer Engineering"
                image={hb7778}
              />
              <FaceCard
                darkMode={darkMode}
                name="Rafael Knispel-Heyworth"
                subtext={["Tinker Manufacturing Lead"]}
                gradYear="Class of 2026"
                major="Mechanical & Aerospace Engineering"
                image={rk3979}
              />

              {/* HEXAPOD */}
              {/* <FaceCard
                darkMode={darkMode}
                name="Vacant"
                subtext={["Hexapod Electrical Lead"]}
              /> */}
              <FaceCard
                darkMode={darkMode}
                name="Minh Thanh Nguyen"
                subtext={["Hexapod Mechanical Lead"]}
                gradYear="Class of 2027"
                major="Mechanical & Aerospace Engineering"
                image={mthanh}
              />
              <FaceCard
                darkMode={darkMode}
                name="Stephen Gilton"
                subtext={["Hexapod Software Lead"]}
                gradYear="Class of 2027"
                major="Computer Science"
                image={Sg8409}
              />

              {/* <hr className="divider" /> */}
            </div>
          </Card>

          {/* Faculty advisors */}
          <Card
            darkMode={darkMode}
            pathString="/about#faculty"
            className={
              "text-box text-box-padded-not-below" +
              (darkMode ? " text-box-dark" : " text-box-light")
            }
          >
            <div className="centered-heading">FACULTY ADVISERS</div>
            <div className="centered-container">
              <FaceCard
                darkMode={darkMode}
                name="Prof. August"
                subtext={["ECE"]}
                disableOverlay={true}
                image={August}
              />
              <FaceCard
                darkMode={darkMode}
                name="Prof. Lyon"
                subtext={["ECE"]}
                disableOverlay={true}
                image={Lyon}
              />
              <FaceCard
                darkMode={darkMode}
                name="Prof. Majumdar"
                subtext={["MAE"]}
                disableOverlay={true}
                image={Majumdar}
              />
              <FaceCard
                darkMode={darkMode}
                name="Prof. Glaser"
                subtext={["MAE"]}
                disableOverlay={true}
                image={Glaser}
              />
            </div>
          </Card>
        </section>
      </div>
    </>
  );
}

// const Divider = () => {
//   return <div className="divider"></div>;
// };
export default About;

/*

***** old 2023-2024

*

*/

// import React from 'react';
// import Card from '../../card/Card';
// import FaceCard from '../../face_card/FaceCard';
// import '../Generic.css';
// import './About.css';

// import Ab0824 from '../../../images/about/ab0824.jpg';
// import Glaser from '../../../images/about/alex-glaser.jpg';
// import An4978 from '../../../images/about/an4978.jpg';
// import Arthurts from '../../../images/about/arthurts.jpg';
// import August from '../../../images/about/august.jpg';
// import Aw3592 from '../../../images/about/aw3592.jpeg';
// import Cg6149 from '../../../images/about/cg6149.png';
// import Ck4287 from '../../../images/about/ck4287.jpg';
// import Dc2326 from '../../../images/about/dc2326.jpg';
// import Dc4266 from '../../../images/about/dc4266.jpg';
// import Dd6849 from '../../../images/about/dd6849.jpg';
// import Df1314 from '../../../images/about/df1314.jpg';
// import Edchen from '../../../images/about/edchen.jpg';
// import Ernestm from '../../../images/about/ernestm.jpg';
// import Fh9696 from '../../../images/about/fh9696.jpg';
// import Gn7269 from '../../../images/about/gn7269.jpg';
// import Ih2422 from '../../../images/about/ih2422.jpg';
// import Js4346 from '../../../images/about/js4346.jpg';
// import Jt1065 from '../../../images/about/jt1065.jpg';
// import Jt7347 from '../../../images/about/jt7347.jpg';
// import Kphan from '../../../images/about/kphan.jpg';
// import Lyon from '../../../images/about/lyon.png';
// import Majumdar from '../../../images/about/majumdar.jpg';
// import Mh6419 from '../../../images/about/mh6419.jpg';
// import mm5764 from '../../../images/about/mm5764.jpg';
// import Ms8364 from '../../../images/about/ms8364.jpg';
// import Sg8409 from '../../../images/about/sg8409.jpg';
// import Sr6770 from '../../../images/about/sr6770.jpg';
// import Th5879 from '../../../images/about/th5879.jpg';
// import Vv5226 from '../../../images/about/vv5226.jpg';
// import Wh9128 from '../../../images/about/wh9128.jpg';
// import Za3545 from '../../../images/about/za3545.jpg';
// import Zk9002 from '../../../images/about/zk9002.jpg';

// function About(props) {
//   const { darkMode } = props;
//   return (
//     <>
//       <div className="body-bg">
//         <div className={'about-bg-img' + (darkMode ? ' about-bg-img-dark' : ' about-bg-img-light')} />
//         <section className="article-centered">
//           <div className={'title-blob' + (darkMode ? ' title-blob-dark' : ' title-blob-light')}> ABOUT US </div>
//           <Card
//             darkMode={darkMode}
//             pathString="/about#officers"
//             className={'text-box text-box-padded-not-below' + (darkMode ? ' text-box-dark' : ' text-box-light')}>
//             <div className="centered-heading">CLUB OFFICERS</div>
//             <div className="centered-container">
//               <FaceCard
//                 darkMode={darkMode}
//                 name="Alecia Barbieri"
//                 subtext={['Co-President', 'Droid Team Lead', 'Media Lead']}
//                 image={Ab0824}
//               />
//               <FaceCard
//                 darkMode={darkMode}
//                 name="Ian Henriques"
//                 subtext={['Co-President', 'Pacbot SW Lead', 'Media Lead']}
//                 image={Ih2422}
//               />
//               <FaceCard
//                 darkMode={darkMode}
//                 name="Ernest McCarter"
//                 subtext={['Co-President', 'Pacbot SW Lead']}
//                 image={Ernestm}
//               />
//               <FaceCard
//                 darkMode={darkMode}
//                 name="Andy Nguyen"
//                 subtext={['Treasurer', 'Pacbot SW Lead']}
//                 image={An4978}
//               />

//               <FaceCard
//                 darkMode={darkMode}
//                 name="Maria Heffernen"
//                 subtext={['Officer', 'Training Lead']}
//                 image={Mh6419}
//               />
//               <FaceCard
//                 darkMode={darkMode}
//                 name="Freddy Hernandez"
//                 subtext={['Officer', 'Outreach Lead', 'Media Lead']}
//                 image={Fh9696}
//               />

//               <FaceCard darkMode={darkMode} name="Jack Toubes" subtext={['Officer', 'Pacbot HW Lead']} image={Jt1065} />
//               <FaceCard darkMode={darkMode} name="Glen Nfor" subtext={['Officer', 'Web Development']} image={Gn7269} />
//               <FaceCard
//                 darkMode={darkMode}
//                 name="Mahir Majid"
//                 subtext={['Officer', 'Web Development']}
//                 image={mm5764}
//               />
//               <FaceCard darkMode={darkMode} name="Aidan Ward" subtext={['Officer', 'Training Lead']} image={Aw3592} />
//               <FaceCard darkMode={darkMode} name="Caden Kang" subtext={['Officer', 'Media Lead']} image={Ck4287} />
//               <FaceCard
//                 darkMode={darkMode}
//                 name="Zachary Andrews"
//                 subtext={['Officer', 'School Outreach']}
//                 image={Za3545}
//               />
//               <FaceCard darkMode={darkMode} name="Divija Durga" subtext={['Officer', 'Exo HW Lead']} image={Dd6849} />
//               <FaceCard
//                 darkMode={darkMode}
//                 name="Tate Hutchins"
//                 subtext={['Officer', 'Business Team']}
//                 image={Th5879}
//               />
//               <FaceCard darkMode={darkMode} name="Sarah R" subtext={['Officer']} image={Sr6770} />
//               <FaceCard darkMode={darkMode} name="Chris Ganter" subtext={['Officer']} image={Cg6149} />
//               <FaceCard
//                 darkMode={darkMode}
//                 name="Vasumathi Venkat"
//                 subtext={['Officer', 'Social Chair']}
//                 image={Vv5226}
//               />
//               <FaceCard darkMode={darkMode} name="Stephen Gilton" subtext={['Officer']} image={Sg8409} />
//               <FaceCard darkMode={darkMode} name="Zara Kamga" subtext={['Officer', 'Social Chair']} image={Zk9002} />
//               {false && (
//                 <FaceCard
//                   darkMode={darkMode}
//                   name="Jenna Mullins"
//                   subtext={['Officer', 'Social Chair']}
//                   image={Gn7269}
//                 />
//               )}
//             </div>
//           </Card>

//           <Card
//             darkMode={darkMode}
//             pathString="/about#leads"
//             className={'text-box text-box-padded-not-below' + (darkMode ? ' text-box-dark' : ' text-box-light')}>
//             <div className="centered-heading">SUBTEAM LEADS</div>
//             <div className="centered-container">
//               <FaceCard darkMode={darkMode} name="David Chang" subtext={['Droid Mech Lead']} image={Dc4266} />
//               <FaceCard darkMode={darkMode} name="Eric Chen" subtext={['Drone HW Lead']} image={Edchen} />
//               <FaceCard darkMode={darkMode} name="Dak Cheng" subtext={['Golf Cart HW Lead']} image={Dc2326} />
//               <FaceCard darkMode={darkMode} name="David Fu" subtext={['Rover Team Lead']} image={Df1314} />
//               <FaceCard darkMode={darkMode} name="William Huang" subtext={['Rover Team Lead']} image={Wh9128} />

//               <FaceCard darkMode={darkMode} name="Kevin Phan" subtext={['Golf Cart SW Lead']} image={Kphan} />
//               <FaceCard darkMode={darkMode} name="Joshua Soberano" subtext={['Exo Team Lead']} image={Js4346} />
//               <FaceCard darkMode={darkMode} name="Jimmy Tran" subtext={['Drone Lead']} image={Jt7347} />
//               <FaceCard darkMode={darkMode} name="Arti Schmidt" subtext={['Drone SW Lead']} image={Arthurts} />
//               <FaceCard darkMode={darkMode} name="Mariko Storey" subtext={['Rover Team Lead']} image={Ms8364} />
//             </div>
//           </Card>

//           {false && (
//             <Card
//               darkMode={darkMode}
//               pathString="/about#members"
//               className={'text-box text-box-padded' + (darkMode ? ' text-box-dark' : ' text-box-light')}>
//               <div className="centered-heading">TEAM MEMBERS</div>
//             </Card>
//           )}

//           <Card
//             darkMode={darkMode}
//             pathString="/about#faculty"
//             className={'text-box text-box-padded-not-below' + (darkMode ? ' text-box-dark' : ' text-box-light')}>
//             <div className="centered-heading">FACULTY ADVISERS</div>
//             <div className="centered-container">
//               <FaceCard darkMode={darkMode} name="Prof. August" subtext={['ECE']} image={August} />
//               <FaceCard darkMode={darkMode} name="Prof. Lyon" subtext={['ECE']} image={Lyon} />
//               <FaceCard darkMode={darkMode} name="Prof. Majumdar" subtext={['MAE']} image={Majumdar} />
//               <FaceCard darkMode={darkMode} name="Prof. Glaser" subtext={['MAE']} image={Glaser} />
//             </div>
//           </Card>
//         </section>
//       </div>
//     </>
//   );
// }

// export default About;
