import unesp from '../assets/unesplogo.png';
import hakuoh from '../assets/hakuohlogo.png';
import fourAll from '../assets/4alllogo.jpg';
import molla from '../assets/molla.png';
import alstom from '../assets/alstomlogo.png';
import siemens from '../assets/siemens.png';
import fenrir from '../assets/fenrir.png';

export const NAV_SECTIONS = [
  'formations',
  'experiences',
  'projects',
  'skills',
  'contact',
];

export const FORMATIONS = [
  {
    title: 'UNESP',
    img: unesp,
    imgStyle: 'w-50 h-20',
    description:
      'Bachelor degree in *Electrical *Engineering on *São *Paulo *State *University (UNESP - Campus Guaratinguetá), Brazil. Graduated in 2021.',
  },
  {
    title: 'HAKUOH',
    img: hakuoh,
    imgStyle: 'w-35 h-40',
    description:
      'Exchange program in *Hakuoh *University, *Japan. In 2018, I had the opportunity to study abroad for 1 year about language, intercultural and intersocial lifestyle.',
  },
];

export const EXPERIENCES = [
  {
    title: '4all',
    img: fourAll,
    imgStyle: 'w-40 h-40 rounded-full mb-5',
    paragraphs: [
      `Performance as a *Mid-Level *Full *Stack *Developer, working as part of an agile development team focused on enhancing the user's online shopping experience (food, tickets, e-shop, etc.) through a digital marketplace.`,
      'Main clients I have interacted with: major spanish football clubs, including *Atlético *de *Madrid and *Espanyol *de *Barcelona.',
      'I work on developing new features and maintaining the digital product. Constantly handle *integrations with external services and *payment *gateways, as well as contribute to building the entire *architecture.',
    ],
  },
  {
    title: 'Agência Molla',
    img: molla,
    imgStyle: 'w-40 h-30',
    paragraphs: [
      'I work as a *Full *Stack *TypeScript *Jr. *Developer to make *dockerized applications focused on Trade Marketing portals.',
      `Development in *React, Hooks, Context API and *Tailwind CSS for Front-End and Axios for consume API's`,
      'Development in *NestJS for server-side for API RESTful applications in JSON, using *TypeORM for Postgres database integration.',
    ],
  },
  {
    title: 'ALSTOM',
    img: alstom,
    imgStyle: 'w-50 h-12 my-10',
    paragraphs: [
      'Worked as a *system *integrator and *configurator in IT, utilizing Alstom’s product softwares, from *architecture to data acquisition and supervision, in the railway signaling sector for projects such as *ROCA *Line *(Buenos Aires), *Line *2 of Santiago *(Chile), and *São *Paulo *Metro.',
      'Developed user *interfaces for the control, supervision, and operation of metro-rail transportation for end customers.',
      'Extensive use of *SQL, *C#, *Batch *Script, and *VB for database manipulation and configuration in *SQL *Server, as well as process automation.',
      'Familiar with *DevOps culture.',
    ],
  },
  {
    title: 'SIEMENS',
    img: siemens,
    imgStyle: 'w-50 h-20 my-5',
    paragraphs: [
      'Worked on field *commissioning activities for *electrical *panels and *automation systems in railway power supply substations for *CPTM *Lines 9, 10, and 11.',
      'Responsible for developing monitoring, supervision, control, and data acquisition *(SCADA) *software for the implemented systems.',
      `Interacted with client requirements regarding SCADA *user *interface systems and conducted training sessions for end-user operators to ensure proper system operation at CPTM's control center.`,
      'Prepared and reviewed projects and documentation using AutoCAD.',
      'Developed a *VBA-based tool to create an interface between *Excel and *AutoCAD, optimizing and automating internal processes',
    ],
  },
  {
    title: 'FENRIR',
    img: fenrir,
    imgStyle: 'w-50 h-40 my-5',
    paragraphs: [
      'As one of the co-founders of the project and a member of the *Electronics and *Data subteam, I was responsible for researching and testing solutions for electric motor drives in an automotive prototype for the Shell Eco-Marathon competition.',
      'Worked as a *Full *Stack *Developer, using React and Node.js to build an application for speed monitoring and time control of the automotive prototype.',
    ],
  },
];
