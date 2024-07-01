
import AboutUsBoxAakriti from "../components/AboutUsAakriti"
import AboutUsBox from "../components/AboutUsBox"
import AboutUsBoxAnsh from "../components/AboutUsAnsh";
import "../styles/AboutUsPage.css"
const AboutUsPage = () => {
  const description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit porta elit, non maximus enim bibendum non. Fusce sollicitudin sapien justo, ac ultricies lacus tempor vel. Cras sagittis scelerisque vehicula. Quisque ut laoreet odio, sit amet hendrerit lorem. Cras luctus, nisi vitae ornare hendrerit, nibh lectus efficitur risus, in semper est nulla quis augue. Curabitur nec pharetra dui. Curabitur aliquam velit ac nulla elementum vulputate. Vestibulum sed neque sed diam bibendum auctor. Duis mollis diam magna, sit amet porta dolor mattis a. Etiam eget eros sit amet dui elementum mattis condimentum vel mi.";
  return (
    <div>
      <div className="heading">About Us</div>
        <AboutUsBox Title="What We Do?" Description={description}></AboutUsBox>
        <AboutUsBox Title="Why We Do?" Description={description}></AboutUsBox>
        <div className="People">
            <div className="WhoWeAreHeading">Who We Are</div>
            <div className="PeopleContainer">
            <AboutUsBoxAakriti></AboutUsBoxAakriti>
            <AboutUsBoxAnsh></AboutUsBoxAnsh>
            </div>
        </div>
    </div>
  )
}

export default AboutUsPage