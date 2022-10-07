
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
      'This personal web portfolio. Developed as my first contact with React (Front-end) and Node.js (Back-end).',
    stack: ['React', 'HTML5', 'CSS3', 'Nodejs'],
    sourceCode: 'https://github.com/yujisoyama/webportfolio',
    livePreview: 'https://webportfolio-react.web.app/',
  },
  {
    name: 'Ultra Tic-Tac-Toe',
    description:
      'Bored of the conventional tic-tac-toe? With different rules and techniques, the Ultra Tic-Tac-Toe makes the strategies of the traditional game more interesting and thinkable.',
    stack: ['React', 'HTML5', 'CSS3'],
    sourceCode: 'https://github.com/yujisoyama/ultratictactoe',
    livePreview: 'https://ultratictactoe.web.app/',
  },
  {
    name: 'Find your duo',
    description:
      'Project developed during the NLW eSports week of Rocketseat. The application aims to connect people looking for new friends to play games together.',
    stack: ['React', 'ReactNative', 'TypeScript', 'Nodejs' , 'Prisma', 'Expo'],
    sourceCode: 'https://github.com/yujisoyama/findyourduo',
    livePreview: '',
  },
  {
    name: 'Wheather.NET',
    description:
      'Desktop Application developed in C# to show the weather conditions based on coordinates in your local area. It consumes a public API from OpenWheather.org',
    stack: ['.NET', 'UWP', 'XAML'],
    sourceCode: 'https://github.com/yujisoyama/wheatherapp-csharp',
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
  'TypeScript',
  'Node.js',
  'React',
  'ReactNative',
  'PostgreSQL',
  'API REST',
  'Postman',
  'Java',
  'Python',
  'DevOps',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'asdasd',
}

export { header, projects, skills, contact, formations, experiences }
