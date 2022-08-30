
const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '',
  title: 'My Web Portfolio',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Fabio Yuji Soyama',
  role: 'Novice Software Developer',
  description:
    'Graduated in Electrical Engineering, started my professional career as Systems Analyst, focused on SCADA (Supervisory Control and Data Acquisition) for railway systems. In the last years, I had contact with several technologies about database management and programming languages, and now I am currently looking for new opportunities to start working as a software developer.',
  resume: 'src/doc/cv.pdf',
  social: {

  },
}

const formations = [
  {
    university: 'UNESP',
    logo: 'https://geein.fclar.unesp.br/images/unesp-logo-white.png',
    country: 'Brazil',
    graduate: '2021',
    course: 'Electrical Engineering',
    description: 'Bachelor degree in Electrical Engineering, ',
  },
  {
    university: 'Hakuoh University',
    logo: 'https://upload.wikimedia.org/wikipedia/en/e/e5/HakuohUniversityEmblem.png',
    country: 'Japan',
    graduate: '2019',
    course: 'Language and Intercultural Experience',
    description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
  }
]

const experiences = [
  {
    company: 'asdasda',
    description: 'agsdgdsag',
    technologies: '123131',
  },
  {
    company: 'asdasda',
    description: 'agsdgdsag',
    technologies: '123131',
  }
]

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Web Portfolio',
    description:
      'This personal web portfolio. Developed as my first contact with React (Front-end) and Python (Back-end)',
    stack: ['React', 'HTML5', 'CSS3', 'Python'],
    sourceCode: 'https://github.com/yujisoyama/webportfolio',
    livePreview: 'https://webportfolio-react.web.app/',
  },
  {
    name: 'Comming soon...',
    description:
      '- - - - - - - - - - - - - - -',
    stack: ['-', '-', '-'],
    sourceCode: '',
    livePreview: '',
  },
  {
    name: 'Comming soon...',
    description:
      '- - - - - - - - - - - - - - -',
    stack: ['-', '-', '-'],
    sourceCode: '',
    livePreview: '',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'SQL Server',
  '.NET',
  'Flutter',
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Java',
  'C',
  'C++',
  'Python',
  'Git',
  'DevOps',
  'CI/CD',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'asdasd',
}

export { header, about, projects, skills, contact, formations, experiences }
