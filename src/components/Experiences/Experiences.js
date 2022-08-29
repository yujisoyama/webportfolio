import uniqid from 'uniqid'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { experiences } from '../../portfolio'
import './Experiences.css'
import fenrir from './img/fenrir.png'
import siemens from './img/siemens.png'
import alstom from './img/alstom.png'

const Experiences = () => {
  if (!experiences.length) return null

  return (
    <section id='experiences' className='section experiences'>
      <h2 className='section__title'>Experiences</h2>
        <div className='experience_current'>
          <div className='alstom'>
            <img className='logo_alstom' src={alstom} alt=''/>
          </div>
          <div className='description'>
            <p>
              I work as an IT systems integrator and configurator, using Alstom&apos;s softwares, from its architecture to supervision and data acquisition in the metro-railway signaling sector.
            </p>
            <p>
              Constant use of SQL, C#, Batch Script and VB languages for <span style={{color: "#d44e65"}}>database manipulation</span> and configuration in SQL Server and process automation.
            </p>
            <p>
              Environmentalization with the <span style={{color: "#d44e65"}}>DevOps</span> culture.
            </p>
            <p>
              Contact with: <span style={{color: "#d44e65"}}>SQL Server</span>, <span style={{color: "#d44e65"}}>.NET</span>, <span style={{color: "#d44e65"}}>OOP</span>, <span style={{color: "#d44e65"}}>DevOps</span>, <span style={{color: "#d44e65"}}>CI/CD</span>, <span style={{color: "#d44e65"}}>XML</span>, <span style={{color: "#d44e65"}}>VBA</span> and <span style={{color: "#d44e65"}}>Batch Script</span>   
            </p>
          </div>
          <div className='icon'>
            <a href='https://www.linkedin.com/company/alstom/' target='_blank' rel='noopener noreferrer' aria-label='linkedin' className='link link--icon'><LinkedInIcon /></a>
          </div>
        </div>
        <div className='experience'>
          <div className='siemens'>
            <img className='logo_siemens' src={siemens} alt=''/>
          </div>
          <div className='description'>
            <p>
              Advised on the development of electrical panels and their auxiliaries, responsible for the automation and protection of substations.
            </p>
            <p>
              <span style={{color: "#d44e65"}}>Developed in VBA</span> language an interface tool between Excel and AutoCAD to optimize and automate processes.
            </p>
            <p>
              Worked on commissioning activities in the field of projects and automation systems for substations.
            </p>
            <p>
              Responsible for the development of monitoring, supervision, control and data acquisition <span style={{color: "#d44e65"}}>(SCADA) software</span> for the implemented systems.
            </p>
            <p>
              Contact with: <span style={{color: "#d44e65"}}>Git</span>, <span style={{color: "#d44e65"}}>SQL Server</span>, <span style={{color: "#d44e65"}}>VBA</span> and <span style={{color: "#d44e65"}}>AutoCAD</span> 
            </p>
          </div>
          <div className='icon'>
            <a href='https://www.linkedin.com/company/siemens/' target='_blank' rel='noopener noreferrer' aria-label='linkedin' className='link link--icon'><LinkedInIcon /></a>
          </div>
        </div>
        <div className='experience'>
          <div className='fenrir'>
            <img className='logo_fenrir' src={fenrir} alt=''/>
          </div>
          <div className='description'>
            <p>
              One of the <span style={{color: "#d44e65"}}>co-founders of the Project FENRIR</span>, as a member of Electronics and Data sub-team, I was responsible for conducting researchs and tests for solutions to electric motor drives for an automotive prototype to the Shell Eco-Marathon competition.
            </p>
            <p>
              I worked as a <span style={{color: "#d44e65"}}>mobile application developer</span> using Android Studio and the Flutter framework.
            </p>
            <p>
              Contact with: <span style={{color: "#d44e65"}}>Git</span>, <span style={{color: "#d44e65"}}>C</span>, <span style={{color: "#d44e65"}}>Flutter</span> and <span style={{color: "#d44e65"}}>Android Studio</span> 
            </p>
          </div>
          <div className='icon'>
            <a href='https://www.linkedin.com/company/fenrir-feg/' target='_blank' rel='noopener noreferrer' aria-label='linkedin' className='link link--icon'><LinkedInIcon /></a>
          </div>
        </div>
    </section>
  )
}
export default Experiences
