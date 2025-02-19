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
    link: 'https://www.linkedin.com/company/4all-tecnologia/',
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
    link: 'https://www.linkedin.com/company/agenciamolla/',
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
    link: 'https://www.linkedin.com/company/alstom/',
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
    link: 'https://www.linkedin.com/company/siemens/',
  },
  {
    title: 'FENRIR',
    img: fenrir,
    imgStyle: 'w-50 h-40 my-5',
    paragraphs: [
      'As one of the co-founders of the project and a member of the *Electronics and *Data subteam, I was responsible for researching and testing solutions for electric motor drives in an automotive prototype for the Shell Eco-Marathon competition.',
      'Worked as a *Full *Stack *Developer, using React and Node.js to build an application for speed monitoring and time control of the automotive prototype.',
    ],
    link: 'linkedin.com/company/fenrir-feg/',
  },
];

export const PROJECTS = [
  {
    title: 'Ultra Tic-Tac-Toe',
    description:
      'Bored of the conventional tic-tac-toe? With different rules and techniques, the Ultra Tic-Tac-Toe makes the strategies of the traditional game more interesting and thinkable.',
    technologies: ['React', 'HTML', 'CSS3'],
    repositoryLink: 'https://github.com/yujisoyama/ultratictactoe',
    projectLink: 'https://ultratictactoe.web.app/',
  },
  {
    title: 'Find your duo',
    description:
      'Full Stack project developed during the NLW eSports week of Rocketseat. The application aims to connect people looking for new friends to play games together.',
    technologies: [
      'React',
      'ReactNative',
      'Vite',
      'Typescript',
      'Nodejs',
      'Prisma',
      'Expo',
    ],
    repositoryLink: 'https://github.com/yujisoyama/findyourduo',
  },
  {
    title: 'Wheather.NET',
    description:
      'Desktop app developed in C# to show the weather conditions based on coordinates in your local area. It consumes a public API from OpenWheather.org.',
    technologies: ['.NET', 'UWP', 'XAML'],
    repositoryLink: 'https://github.com/yujisoyama/wheatherapp-csharp',
  },
  {
    title: 'Coworking Book',
    description:
      'Full Stack project to develop a platform to simplify the booking for desks and meeting rooms in coworking spaces.',
    technologies: [
      'React',
      'TailwindCSS',
      'Nodejs',
      'TypeORM',
      'Postgres',
      'Docker',
      'Typescript',
      'AWS',
    ],
    repositoryLink: 'https://github.com/yujisoyama/coworkingbooking',
  },
  {
    title: 'World Cup Guesser',
    description:
      'Full stack project developed during the NLW Copa week of Rocketseat. The application aims to connect people by creating groups, join groups and make guesses about FIFA World Cup Matches.',
    technologies: [
      'React',
      'ReactNative',
      'Vite',
      'Typescript',
      'Nodejs',
      'Prisma',
      'Expo',
    ],
    repositoryLink: 'https://github.com/yujisoyama/worldcup_guesser',
  },
  {
    title: 'Movie Catalog MKS',
    description:
      'Backend and dockerized application, whose objective is to relate users and films through a catalog of films that is fed by the users themselves.',
    technologies: [
      'NestJS',
      'TypeORM',
      'Postgres',
      'Swagger',
      'Docker',
      'Redis',
      'Typescript',
      'AWS',
    ],
    repositoryLink: 'https://github.com/yujisoyama/movie-catalog-MKS',
  },
  {
    title: 'Easy Transactions NG',
    description:
      'Fullstack, dockerized web application, whose objective is to enable NG users to be able to perform internal transfers between themselves.',
    technologies: [
      'React',
      'Nodejs',
      'TypeORM',
      'Tailwind',
      'Docker',
      'Typescript',
    ],
    repositoryLink: 'https://github.com/yujisoyama/easy-transactions-NG',
  },
];

export const SKILLS = [
  'React',
  'ReactNative',
  'Nodejs',
  'Nest',
  'Golang',
  'Typescript',
  'Tailwind',
  'gRPC',
  'API REST',
  'AWS',
  'Docker',
  'Vite',
  'SQL',
  'VBA',
  'C',
];
