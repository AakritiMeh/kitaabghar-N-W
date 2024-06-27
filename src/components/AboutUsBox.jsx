import PropTypes from 'prop-types';
const AboutUsBox = ({ImageSource,Title,Description}) => {
  return (
    <div>
        <div className="ImageSection">
            <img src={ImageSource} alt={Title}></img>
        </div>
        <div className="textSection">
            <div className="title">{Title}</div>
            <div className="description">{Description}</div>
        </div>
    </div>
  )
}

AboutUsBox.propTypes={
    Title:PropTypes.string.isRequired,
    Description:PropTypes.string.isRequired,
    ImageSource: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
      ]).isRequired
}


export default AboutUsBox