// Note: Gallery cannot handle motion/video files!

import Droid1 from '../../../images/projects/droid/droid-1.jpg';
import Droid2 from '../../../images/projects/droid/droid-2.jpg';
import Droid3 from '../../../images/projects/droid/droid-3.jpg';
import Droid4 from '../../../images/projects/droid/droid-4.jpg';
import Droid5 from '../../../images/projects/droid/droid-construction.png';
import Droid6 from '../../../images/projects/droid/droid-robot-construction.jpg';
import Droid7 from '../../../images/projects/droid/droid-team.png';
// import Droid8 from '../../../images/projects/droid/droid-robot-demo.mov';
import Droid9 from '../../../images/projects/droid/droid-11.jpg';
import Droid10 from '../../../images/projects/droid/droid-session.jpg';
import Droid12 from '../../../images/projects/droid/droid-12.jpeg';
import Droid13 from '../../../images/projects/droid/droid-13.jpeg';
import Droid14 from '../../../images/projects/droid/droid-14.jpeg';
import Droid15 from '../../../images/projects/droid/droid-15.jpeg';

import Drone1 from '../../../images/projects/drone/drone-1.jpg';
import Drone2 from '../../../images/projects/drone/drone-2.jpg';
import Drone3 from '../../../images/projects/drone/drone-3.jpg';
import Drone4 from '../../../images/projects/drone/drone-4.jpeg';
import Drone5 from '../../../images/projects/drone/drone-5.jpeg';
import Drone6 from '../../../images/projects/drone/drone-6.jpeg';

import PacBot1 from '../../../images/projects/pacbot/pacbot-1.jpg';
import PacBot2 from '../../../images/projects/pacbot/pacbot-2.jpg';
import PacBot3 from '../../../images/projects/pacbot/pacbot-3.jpg';
import PacBot4 from '../../../images/projects/pacbot/pacbot-4.jpg';

import Rover1 from '../../../images/projects/rover/rover-1.jpg';

import Exoskeleton1 from '../../../images/projects/exoskeleton/exoskeleton-1.jpeg';

import Golf1 from '../../../images/projects/golf/golf-1.jpeg';
import Golf2 from '../../../images/projects/golf/golf-2.jpeg';
import Golf3 from '../../../images/projects/golf/golf-3.jpeg';
import Golf4 from '../../../images/projects/golf/golf-4.JPG';
import Golf5 from '../../../images/projects/golf/golf-5.JPG';

//import Tinker1 from '../../../images/projects/tinker/tinker-1.jpg';
//import Tinker2 from '../../../images/projects/tinker/tinker-2.jpg';
//import Tinker3 from '../../../images/projects/tinker/tinker-3.jpg';
//import Tinker4 from '../../../images/projects/tinker/tinker-4.jpg';
import Tinker5 from '../../../images/projects/tinker/tinker-5.jpg';

import WallE1 from '../../../images/projects/wall-e/walle-1.jpg';
import WallE2 from '../../../images/projects/wall-e/walle-2.jpg';
import WallE3 from '../../../images/projects/wall-e/walle-3.jpg';
import WallE4 from '../../../images/projects/wall-e/walle-4.jpg';

//import General1 from '../../../images/general/general-1.jpg';
//import General2 from '../../../images/general/general-2.jpg';
//import General3 from '../../../images/general/general-3.jpg';
import General4 from '../../../images/general/general-4.jpg';
import General5 from '../../../images/general/general-5.jpg';
import General6 from '../../../images/general/general-6.jpg';
import General7 from '../../../images/general/general-7.jpg';
//import General8 from '../../../images/general/general-8.jpg';
import General9 from '../../../images/general/general-9.jpg';
import General10 from '../../../images/general/general-10.jpg';
//import General11 from '../../../images/general/general-11.jpg';
import General12 from '../../../images/general/general-12.jpg';
import General13 from '../../../images/general/general-13.jpg';

const images = [
  /*****
   * General Team Images
   *
   */
  {
    src: General4, 
    tags: [
      { value: 'General', title: 'General' },
    ],
  },
  {
    src: General5, 
    tags: [
      { value: 'General', title: 'General' },
    ],
  },
  {
    src: General6, 
    tags: [
      { value: 'General', title: 'General' },
    ],
  },
  {
    src: General7, 
    tags: [
      { value: 'General', title: 'General' },
    ],
  },
  {
    src: General9, 
    tags: [
      { value: 'General', title: 'General' },
    ],
  },
  {
    src: General10, 
    tags: [
      { value: 'General', title: 'General' },
    ],
  },
  {
    src: General12, 
    tags: [
      { value: 'General', title: 'General' },
    ],
  },
  {
    src: General13, 
    tags: [
      { value: 'General', title: 'General' },
    ],
  },
  /*****
   * Droid Team Images
   *
   */
  {
    src: Droid1,
    // width: 'auto !important',
    // height: '400px !important',
    tags: [{ value: 'Droid Team' }],
    // caption: 'Work Session with the Droid Team ',
    title: 'Slide title',
    description: 'Slide description',
  },
  {
    src: Droid2,
    // width: 320,
    // height: 212,
    tags: [
      { value: '#Droid', title: 'Droid' },
      { value: 'Boards', title: 'Boards' },
    ],
    alt: 'Droid components',
  },
  {
    src: Droid3,
    // width: 320,
    // height: 212,
    tags: [
      { value: '#Droid', title: 'Droid' },
      // { value: '#', title: 'Boards' },
    ],
    alt: 'Droid components',
  },
  {
    src: Droid4,
    // width: 320,
    // height: 212,
  },
  {
    src: Droid5,
    tags: [
      // { value: '#Droid', title: 'Droid' },
      // { value: '#', title: 'Boards' },
    ],
    alt: 'Droid robot',
  },
  {
    src: Droid6,
    tags: [
      // { value: '#Droid', title: 'Droid' },
      // { value: '#', title: 'Boards' },
    ],
    alt: 'Droid Robot under construction',
  },
  {
    src: Droid7,
    tags: [
      // { value: '#Droid', title: 'Droid' },
      // { value: '#', title: 'Boards' },
    ],
    alt: 'Droid Team working session',
  },
  // {
  //   src: Droid8,
  //  tags: [
   //    // { value: '#Droid', title: 'Droid' },
    //   // { value: '#', title: 'Boards' },
   //  ],
   //  alt: 'Droid Robot Demo',
  // },
  {
    src: Droid9,
    tags: [
      // { value: '#Droid', title: 'Droid' },
      // { value: '#', title: 'Boards' },
    ],
    alt: 'BB8-Droid',
  },
  {
    src: Droid10,
    tags: [
      // { value: '#Droid', title: 'Droid' },
      // { value: '#', title: 'Boards' },
    ],
    alt: 'Droid Team - working session',
  },
  {
    src: Droid12,
    tags: [
      // { value: '#Droid', title: 'Droid' },
      // { value: '#', title: 'Boards' },
    ],
    alt: 'Droid Team - working session',
  },
  {
    src: Droid13,
    tags: [
      // { value: '#Droid', title: 'Droid' },
      // { value: '#', title: 'Boards' },
    ],
    alt: 'Droid Team - working session',
  },
  {
    src: Droid14,
    tags: [
      // { value: '#Droid', title: 'Droid' },
      // { value: '#', title: 'Boards' },
    ],
    alt: 'Droid Team - working session',
  },
  {
    src: Droid15,
    tags: [
      // { value: '#Droid', title: 'Droid' },
      // { value: '#', title: 'Boards' },
    ],
    alt: 'Droid Team - working session',
  },
  /*****
   * Drone Team Images
   *
   */
  {
    src: Drone1,
    // width: 320,
    // height: 174,
    caption: 'Drone Team',
    tags: [
      { value: 'Drone', title: 'Drone' },
      { value: 'Team', title: 'Team' },
    ],
  },
  {
    src: Drone2,
    // width: 320,
    // height: 212,
    tags: [
      { value: '#Drone', title: 'Drone' },
      { value: '#Prototype', title: 'Prototype' },
    ],
    alt: 'Drone protoype',
  },
  {
    src: Drone3,
    // width: 320,
    // height: 212,
  },
  {
    src: Drone4,
    // width: 320,
    // height: 212,
    tags: [
      { value: 'Drone', title: 'Drone' },
      { value: 'Prototype', title: 'Prototype' },
    ],
    alt: 'Drone protoype',
  },
  {
    src: Drone5,
    // width: 320,
    // height: 212,
    tags: [
      { value: 'Drone', title: 'Drone' },
      { value: 'Prototype', title: 'Prototype' },
    ],
    alt: 'Drone protoype',
  },
  {
    src: Drone6,
    // width: 320,
    // height: 212,
    tags: [
      { value: 'Drone', title: 'Drone' },
      { value: 'Prototype', title: 'Prototype' },
    ],
    alt: 'Drone protoype',
  },

  /*****
   * PacBot Team Images
   *
   */
  {
    src: PacBot1,
    // width: 320,
    // height: 212,
    tags: [{ value: '#All-time Record', title: '#All-time Record' }],
  },
  {
    src: PacBot2,
    // width: 320,
    // height: 174,
    tags: [
      { value: 'Pacbot', title: 'Pacbot' },
      { value: 'Prototype', title: 'Prototype' },
    ],
    caption: 'Pacbot Protoype',
  },
  {
    src: PacBot3,
    // width: 320,
    // height: 212,
    tags: [],
    alt: 'Pacbot',
  },
  {
    src: PacBot4,
    // width: 320,
    // height: 212,
    tags: [],
    alt: 'Pacbot',
  },
  /*****
   * Rover Team Images
   *
   */
  {
    src: Rover1,
    // width: 320,
    // height: 212,
    tags: [
      { value: 'Rover', title: 'Rover' },
      { value: '#Design', title: 'Design' },
    ],
  },
  //   {
  //     src: Rover2,
  //     // width: 320,
  //     // height: 212,
  //   },
  /*****
   * Exoskeleton Team Images
   *
   */
  {
    src: Exoskeleton1,
    // width: 320,
    // height: 212,
    tags: [
      { value: 'Exoskeleton', title: 'Exoskeleton' },
      { value: '#Design', title: 'Design' },
    ],
  },
  /*****
   * Golf Cart Team Images
   *
   */
  {
    src: Golf1,
    tags: [
      { value: 'Golf Cart', title: 'Golf Cart' },
      { value: '#Design', title: 'Design' },
    ],
  },
  {
    src: Golf2,
    tags: [
      { value: 'Golf Cart', title: 'Golf Cart' },
      { value: '#Design', title: 'Design' },
    ],
  },
  {
    src: Golf3, 
    tags: [
      { value: 'Golf Cart', title: 'Golf Cart' },
      { value: '#Design', title: 'Design' },
    ],
  },
  {
    src: Golf4,
    tags: [
      { value: 'Golf Cart', title: 'Golf Cart' },
      { value: '#Design', title: 'Design' },
    ],
  },
  {
    src: Golf5,
    tags: [
      { value: 'Golf Cart', title: 'Golf Cart' },
      { value: '#Design', title: 'Design' },
    ],
  },
  /*****
   * Wall-E Team Images
   *
   */
  {
    src: WallE1,
    // width: 320,
    // height: 174,
    tags: [
      { value: 'Wall-E', title: 'Wall-E' },
    ],
    caption: 'Wall-E',
  },
  {
    src: WallE2,
    // width: 320,
    // height: 174,
    tags: [
      { value: 'Wall-E', title: 'Wall-E' },
    ],
    caption: 'Wall-E',
  },
  {
    src: WallE3,
    // width: 320,
    // height: 174,
    tags: [
      { value: 'Wall-E', title: 'Wall-E' },
    ],
    caption: 'Wall-E',
  },
  {
    src: WallE4,
    // width: 320,
    // height: 174,
    tags: [
      { value: 'Wall-E', title: 'Wall-E' },
    ],
    caption: 'Wall-E',
  },
  /*****
   * Tinker Team Images
   *
   */
  {
    src: Tinker5,
    // width: 320,
    // height: 174,
    tags: [
      { value: 'Tinker', title: 'Tinker' },
    ],
    caption: 'Tinker',
  },
];

export { images };
