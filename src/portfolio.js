
const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '',
  title: 'My Web Portfolio',
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
    company: '',
    description: '',
    technologies: '',
  },
  {
    company: '',
    description: '',
    technologies: '',
  }
]

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Web Portfolio',
    description:
      'This personal web portfolio. Developed as my first contact with React (Front-end) and Node.js (Back-end)',
    stack: ['React', 'HTML5', 'CSS3', 'Node.js'],
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
  'HTML5',
  'CSS3',
  'JavaScript',
  'Node.js',
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

export { header, projects, skills, contact, formations, experiences }
