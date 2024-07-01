import { useState } from "react";
import upload from "../assets/upladFile.png"
import hand from "../assets/HandToRight.png"
import "../styles/FileUploadToAI.css"
function UploadFile(){

  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
      setError("");
    } else {
      setFile(null);
      
      alert("Please upload a .pdf file.");
    }
  };


  const handleDivClick = () => {
    document.getElementById("fileUpload").click();
  };
  return (
  <div className="FileUploadMain" onClick={handleDivClick}>
      
        <div className="FUTAtext">Upload Your files Here</div>

        <div>        
            <img src={upload} alt="Upload icon" /> 
        </div>

      <input
          id="fileUpload"
          type="file"
          accept="application/pdf"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
      {file && <div>File: {file.name}</div>}
      {error && <div className="error">{error}</div>}

  </div>
  );
}


const FileUploadToAi=()=>{
  return (
    <div className="FileUploadToAIMain">
      <div><UploadFile /></div>
      <button>Convert to Video <img src={hand}></img></button>
    </div>
  )
}

export default FileUploadToAi