import PropTypes from 'prop-types';
import "../styles/Button.css"
const Button = ({ButtonName}) => {

    return <div className='Buttonmain'>

            <div className='buttontext'>{ButtonName}</div>
        </div>
  
}
Button.propTypes = {

    ButtonName: PropTypes.string.isRequired
  }

export default Button