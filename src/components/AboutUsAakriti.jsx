import "../styles/AboutUsAakriti.css"
import Aakriti from "../assets/images/Aakriti.jpeg"
const description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit porta elit, non maximus enim bibendum non. Fusce sollicitudin sapien justo, ac ultricies lacus tempor vel. Cras sagittis scelerisque vehicula. Quisque ut laoreet odio, sit amet hendrerit lorem. Cras luctus, nisi vitae ornare hendrerit, nibh lectus efficitur risus, in semper est nulla quis augue.";
const AboutUsBoxAakriti = () => {
  return (
    <div className="AboutUsBoxAakriti">
        <div className="ImageSection">
            <img src={Aakriti} alt="Aakriti Mehrotra"  height="200" width="150"></img>
        </div>
        <div className="textSection">
            <div className="title">Aakriti Mehrotra</div>
            <div className="description">{description}</div>
        </div>
    </div>
  )
}




export default AboutUsBoxAakriti