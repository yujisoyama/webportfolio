import uniqid from 'uniqid'
import './FormationContainer.css'

const FormationContainer = ({ formation }) => (
  <div className='formation'>
    <div className='university'>
        <img className='logo' src={formation.logo} alt=''/>
    </div>
    <div className='description'>
      <p className='formation__description'>{formation.description}</p>
    </div>
  </div>
)

export default FormationContainer
