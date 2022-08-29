import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './About.css'
import pdf from '../../doc/cv.pdf'
import img from '../../img/profile.png'

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <div className='about center'>
      <div className='border'>
        <img className='avatar' src={img} alt="avatar" />
      </div>
      {name && (
        <h1 className='about_greetings'>
          Hi, I am <span className='about__name'>{name}👋</span>
        </h1>
      )}

      {role && <h2 className='about__role'>{role}</h2>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {resume && (
          <a href={pdf} target='_blank' rel='noopener noreferrer'>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
