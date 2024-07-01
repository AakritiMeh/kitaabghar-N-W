import "../styles/AboutUsAnsh.css"

import Ansh from "../assets/AnshImg.jpeg"
const description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit porta elit, non maximus enim bibendum non. Fusce sollicitudin sapien justo, ac ultricies lacus tempor vel. Cras sagittis scelerisque vehicula. Quisque ut laoreet odio, sit amet hendrerit lorem. Cras luctus, nisi vitae ornare hendrerit, nibh lectus efficitur risus, in semper est nulla quis augue.";
const AboutUsBoxAnsh = () => {
  return (
    <div className="AboutUsBoxAnsh">

        <div className="textSection">
            <div className="title">Ansh Sharma</div>
            <div className="description">{description}</div>
        </div>
        <div className="ImageSection">
            <img src={Ansh} alt="Ansh" height="200" width="150"></img>
        </div>
    </div>
  )
}




export default AboutUsBoxAnsh