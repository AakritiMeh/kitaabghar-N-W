
import AboutUsBoxPeople from "../components/AboutUsBoxPeople"
import AboutUsBox from "../components/AboutUsBox"
const AboutUsPage = () => {
  return (
    <div>
        <AboutUsBox Title="What We Do?" Description=""></AboutUsBox>
        <AboutUsBox Title="Why We Do?" Description=""></AboutUsBox>
        <div>
            <div>Who We Are</div>
            <AboutUsBoxPeople></AboutUsBoxPeople>
            <AboutUsBoxPeople></AboutUsBoxPeople>
        </div>
    </div>
  )
}

export default AboutUsPage