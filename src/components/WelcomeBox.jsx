import PropTypes from 'prop-types';
//const tagline="KitaabGhar: Hear, Learn, Own - Affordable Knowledge for All with AI-powered Animation"

const WelcomeBox = ({Content}) => {
  return (
    <div>{Content}</div>
  )
}

WelcomeBox.propTypes={
    Content:PropTypes.string.isRequired
}

export default WelcomeBox
