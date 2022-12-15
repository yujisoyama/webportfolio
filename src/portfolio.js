
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
      'Full Stack project developed during the NLW eSports week of Rocketseat. The application aims to connect people looking for new friends to play games together.',
    stack: ['React', 'ReactNative', 'Vite', 'TypeScript', 'Nodejs' , 'Prisma', 'Expo'],
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
    name: 'Coworking Book',
    description:
      'Full Stack project to develop a platform to simplify the booking for desks and meeting rooms in coworking spaces',
    stack: ['React', 'TailwindCSS', 'Nodejs', 'TypeORM', 'Postgres', 'Docker', 'Typescript', 'AWS'],
    sourceCode: 'https://github.com/yujisoyama/coworkingbook',
    livePreview: 'http://15.228.154.83:5137/',
  },
  {
    name: 'World Cup Guesser',
    description:
      'Full stack project developed during the NLW Copa week of Rocketseat. The application aims to connect people by creating groups, join groups and make guesses about FIFA World Cup Matches.',
    stack: ['React', 'ReactNative', 'Vite', 'TypeScript', 'Nodejs' , 'Prisma', 'Expo'],
    sourceCode: 'https://github.com/yujisoyama/worldcup_guesser',
    livePreview: '',
  },
  {
    name: 'Movie Catalog MKS',
    description:
      'Backend application, dockerized, whose objective is to relate users and films through a catalog of films that is fed by the users themselves.',
    stack: ['NestJS', 'TypeORM', 'Postgres', 'Swagger', 'Docker', 'Redis', 'TypeScript', 'AWS'],
    sourceCode: 'https://github.com/yujisoyama/movie-catalog-MKS',
    livePreview: 'http://15.228.154.83:3000/',
  },
  {
    name: 'Easy Transactions NG',
    description:
      'Fullstack, dockerized web application, whose objective is to enable NG users to be able to perform internal transfers between themselves.',
    stack: ['React', 'Node', 'TypeORM', 'Tailwind', 'Docker', 'TypeScript'],
    sourceCode: 'https://github.com/yujisoyama/easy-transactions-NG',
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
  'React',
  'Node.js',
  'TypeScript',
  'PostgreSQL',
  'ReactNative',
  'Docker',
  'NestJS',
  'Swagger',
  'Material UI',
  'Tailwind',
  'AWS',
  'HTML5',
  'CSS3',
  'JavaScript',
  'API REST',
  'DevOps',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'asdasd',
}

export { header, projects, skills, contact, formations, experiences }
