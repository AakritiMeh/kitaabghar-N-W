import "../styles/LandingPage.css"
const tagline="KitaabGhar: Hear, Learn, Own - Affordable Knowledge for All with AI-powered Animation"

const WelcomeBox = () => {
  return (
    <div className="LandingMain">
        <div className="LandingContent">
            <div className="LandingHeading">WELCOME TO KITAABGHAR</div>
            <div className="Landingdesc">{tagline}</div>
        </div>
    </div>
  )
}



export default WelcomeBox