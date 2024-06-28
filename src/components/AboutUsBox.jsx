
import PropTypes from "prop-types";
const AboutUsBox = ({Title,Description}) => {
  return (
    <div className="AboutUsBoxMain">
        <div className="title">{Title}</div>
        <div className="description">{Description}</div>
    </div>
  )
}


AboutUsBox.propTypes={
    Title:PropTypes.string.isRequired,
    Description:PropTypes.string.isRequired
}

export default AboutUsBox