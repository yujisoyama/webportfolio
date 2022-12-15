import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './About.css'
import pdf from '../../doc/cv.pdf'
import img from '../../img/profile.png'

const About = () => {

  return (
    <div className='about center'>
      <div className='border'>
        <img className='avatar' src={img} alt="avatar" />
      </div>
      <h1 className='about_greetings'>
        Hi, I am <span className='about__name'>Fabio Yuji Soyama👋</span>
      </h1>
      <h2 className='about__role'>
        Novice Software Developer
      </h2>
      <p className='about__desc'>
        Graduated in Electrical Engineering, started my professional career as Systems Analyst, focused on SCADA (Supervisory Control and Data Acquisition) for railway systems. In the last years, I had contact with several technologies about database management and programming languages, and currently I am a Junior Full Stack Developer specialized in TypeScript  with ReactJS, NestJS and SQL Databases.
      </p>
      <div className='about__contact'>
        <a href={pdf} target='_blank' rel='noopener noreferrer'>
          <span type='button' className='btn btn--outline'>
            Resume
          </span>
        </a>
      </div>
    </div>
  )
}

export default About
