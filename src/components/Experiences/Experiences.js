import LinkedInIcon from '@material-ui/icons/LinkedIn'
import './Experiences.css'
import fenrir from './img/fenrir.png'
import siemens from './img/siemens.png'
import alstom from './img/alstom.png'
import molla from './img/molla.png'

const Experiences = () => {
  return (
    <section id='experiences' className='section experiences'>
      <h2 className='section__title'>Experiences</h2>
      <div className='experience_current'>
        <div className='molla'>
          <img className='logo_molla' src={molla} alt='' />
        </div>
        <div className='description_experiences'>
          <p>
            I work as a Full Stack TypeScript Jr. Developer to make <span style={{ color: "#d44e65" }}>dockerized</span> applications focused on Trade Marketing postals.
          </p>
          <p>
            Development in <span style={{ color: "#d44e65" }}>React</span>, <span style={{ color: "#d44e65" }}>Hooks</span>, <span style={{ color: "#d44e65" }}>Context API</span> and <span style={{ color: "#d44e65" }}>Tailwind CSS</span> for Front-End and Axios for consume API's
          </p>
          <p>
            Development in <span style={{ color: "#d44e65" }}>NestJS</span> for server-side for API RESTful applications in JSON, using <span style={{ color: "#d44e65" }}>TypeORM</span> for <span style={{ color: "#d44e65" }}>Postgres</span> database integration.
          </p>
          <p>
            Contact with: <span style={{ color: "#d44e65" }}>NestJS</span>, <span style={{ color: "#d44e65" }}>TypeORM</span>, <span style={{ color: "#d44e65" }}>Docker</span>, <span style={{ color: "#d44e65" }}>PostgreSQL</span>, <span style={{ color: "#d44e65" }}>ReactJS</span>, <span style={{ color: "#d44e65" }}>Tailwind CSS</span>, <span style={{ color: "#d44e65" }}>Material UI</span>, <span style={{ color: "#d44e65" }}>NodeJS</span>, <span style={{ color: "#d44e65" }}>Swagger</span>, <span style={{ color: "#d44e65" }}>AWS</span>.
          </p>
        </div>
        <div className='icon'>
          <a href='https://br.linkedin.com/company/ag%C3%AAncia-molla' target='_blank' rel='noopener noreferrer' aria-label='linkedin' className='link link--icon'><LinkedInIcon /></a>
        </div>
      </div>
      <div className='experience_current'>
        <div className='alstom'>
          <img className='logo_alstom' src={alstom} alt='' />
        </div>
        <div className='description_experiences'>
          <p>
            I work as an IT systems integrator and configurator, using Alstom&apos;s softwares, from its architecture to supervision and data acquisition in the metro-railway signaling sector.
          </p>
          <p>
            Constant use of SQL, C#, Batch Script and VB languages for <span style={{ color: "#d44e65" }}>database manipulation</span> and configuration in SQL Server and process automation.
          </p>
          <p>
            Environmentalization with the <span style={{ color: "#d44e65" }}>DevOps</span> culture.
          </p>
          <p>
            Contact with: <span style={{ color: "#d44e65" }}>SQL Server</span>, <span style={{ color: "#d44e65" }}>.NET</span>, <span style={{ color: "#d44e65" }}>OOP</span>, <span style={{ color: "#d44e65" }}>DevOps</span>, <span style={{ color: "#d44e65" }}>CI/CD</span>, <span style={{ color: "#d44e65" }}>XML</span>, <span style={{ color: "#d44e65" }}>VBA</span> and <span style={{ color: "#d44e65" }}>Batch Script</span>
          </p>
        </div>
        <div className='icon'>
          <a href='https://www.linkedin.com/company/alstom/' target='_blank' rel='noopener noreferrer' aria-label='linkedin' className='link link--icon'><LinkedInIcon /></a>
        </div>
      </div>
      <div className='experience'>
        <div className='siemens'>
          <img className='logo_siemens' src={siemens} alt='' />
        </div>
        <div className='description_experiences'>
          <p>
            Advised on the development of electrical panels and their auxiliaries, responsible for the automation and protection of substations.
          </p>
          <p>
            <span style={{ color: "#d44e65" }}>Developed in VBA</span> language an interface tool between Excel and AutoCAD to optimize and automate processes.
          </p>
          <p>
            Worked on commissioning activities in the field of projects and automation systems for substations.
          </p>
          <p>
            Responsible for the development of monitoring, supervision, control and data acquisition <span style={{ color: "#d44e65" }}>(SCADA) software</span> for the implemented systems.
          </p>
          <p>
            Contact with: <span style={{ color: "#d44e65" }}>Git</span>, <span style={{ color: "#d44e65" }}>SQL Server</span>, <span style={{ color: "#d44e65" }}>VBA</span> and <span style={{ color: "#d44e65" }}>AutoCAD</span>
          </p>
        </div>
        <div className='icon'>
          <a href='https://www.linkedin.com/company/siemens/' target='_blank' rel='noopener noreferrer' aria-label='linkedin' className='link link--icon'><LinkedInIcon /></a>
        </div>
      </div>
      <div className='experience'>
        <div className='fenrir'>
          <img className='logo_fenrir' src={fenrir} alt='' />
        </div>
        <div className='description_experiences'>
          <p>
            One of the <span style={{ color: "#d44e65" }}>co-founders of the Project FENRIR</span>, as a member of Electronics and Data sub-team, I was responsible for conducting researchs and tests for solutions to electric motor drives for an automotive prototype to the Shell Eco-Marathon competition.
          </p>
          <p>
            I worked as a <span style={{ color: "#d44e65" }}>Full Stack application developer</span> using React and Node for speed monitoring and time control of the automotive prototype.
          </p>
          <p>
            Contact with: <span style={{ color: "#d44e65" }}>Git</span>, <span style={{ color: "#d44e65" }}>React</span>, <span style={{ color: "#d44e65" }}>Node</span> and <span style={{ color: "#d44e65" }}>MySQL</span>
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
