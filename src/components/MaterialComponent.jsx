import PropTypes from 'prop-types';
const MaterialComponent = ({ImageSource,MaterialName}) => {
  return (
    <div>
        <div>
        <img src={ImageSource} alt={MaterialName}></img>
        </div>
        <div>{MaterialName}</div>
    </div>
  )
}

MaterialComponent.propTypes = {
    ImageSource: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]).isRequired,
    MaterialName: PropTypes.string.isRequired
  }

export default MaterialComponent