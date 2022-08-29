import uniqid from 'uniqid'
import { formations } from '../../portfolio'
import './Formations.css'
import unesp from './img/unesplogo.png'
import hakuoh from './img/hakuohlogo.png'

const Formations = () => {
  if (!formations.length) return null

  return (
    <section id='formations' className='section formations'>
      <h2 className='section__title'>Formation</h2>
        <div className='formation'>
          <div className='unesp'>
            <img className='logo_unesp' src={unesp} alt=''/>
          </div>
          <div className='description'>
            <p>
              Bachelor degree in <span style={{color: "#d44e65"}}>Electrical Engineering</span> on <span style={{color: "#d44e65"}}>São Paulo State University</span> (UNESP - Campus Guaratinguetá), Brazil. Graduated in 2021.
            </p>
          </div>
        </div>
        <div className='formation'>
          <div className='hakuoh'>
            <img className='logo_hakuoh' src={hakuoh} alt=''/>
          </div>
          <div className='description'>
            <p>
              Exchange program in <span style={{color: "#d44e65"}}>Hakuoh University, Japan</span>. In 2018, I had the opportunity to study abroad for 1 year about language, intercultural and intersocial lifestyle. 
            </p>
          </div>
        </div>
    </section>
  )
}
export default Formations
