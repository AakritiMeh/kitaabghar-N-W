import PropTypes from 'prop-types';

const Button = ({ImageSource,ButtonName}) => {

    return <div>
            <div>
            <img src={ImageSource} alt={ButtonName}></img>
            </div>
            <div>{ButtonName}</div>
        </div>
  
}
Button.propTypes = {
    ImageSource: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]).isRequired,
    ButtonName: PropTypes.string.isRequired
  }

export default Button