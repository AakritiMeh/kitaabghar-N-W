import { useState } from "react";
import axios from "axios";
import upload from "../assets/upladFile.png";
import hand from "../assets/HandToRight.png";
import "../styles/FileUploadToAI.css";
// import output_re from "../../ai/output.mp4"
import PropTypes from 'prop-types';

function UploadFile({ onFileSelect }) {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
 
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
      setError("");
      onFileSelect(selectedFile);
    } else {
      setFile(null);
      setError("Please upload a .pdf file.");
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

const FileUploadToAi = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);
  // const [videoPath, setVideoPath] = useState(null);
  const handleFileSelect = (file) => {
    setSelectedFile(file);
  };

  const handleSubmit = async () => {
    if (!selectedFile) {
      alert("Please upload a file first.");
      return;
    }

    setIsLoading(true);
    setVideoUrl(null);

    const formData = new FormData();
    formData.append('file', selectedFile);
    try {
        const videoPath= "/home/aakriti/Documents/PROJECTS/kitaabghar/ai/output.mp4";
        setVideoUrl(`http://localhost:3000/video?path=${encodeURIComponent(videoPath)}`);
        const response = await axios.post("http://localhost:3000/upload", selectedFile, {
        headers: {},
      });

      if (response.status === 200) {
        alert("File processed successfully!");
      } 
      else {
        alert("Error processing file.");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Error uploading file.");
    } finally{
      setIsLoading(false);
    }

    
  };

  const handleDownload = () => {
    if (videoUrl) {
      window.open(videoUrl, '_blank');
    }
  };

  // const videoPath1 = "/home/aakriti/Documents/PROJECTS/kitaabghar/ai/output_reencoded.mp4"
  // // setVideoUrl(`http://localhost:3000/video?path=${encodeURIComponent(videoPath1)}`);
  // const videoURLis=`http://localhost:3000/video?path=${encodeURIComponent(videoPath1)}`
  return (
    <div className="FileUploadToAIMain">
      <div><UploadFile onFileSelect={handleFileSelect} /></div>
      <button onClick={handleSubmit} disabled={isLoading}>
      {isLoading ? "Processing..." : "Convert to Video"} <img src={hand} alt="Hand icon" />
      </button>
      {isLoading ? 
        <div>Loading...</div> :
        
          <div>
            <video controls width="400">
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <button onClick={handleDownload}>Download Video</button>
          </div>
        
      }

      {/* <video controls width="500">
      <source src={output_re} type="video/mp4"></source>

      </video> */}
      
      
    </div>
  );
};

UploadFile.propTypes = {
  onFileSelect: PropTypes.func.isRequired,
};

export default FileUploadToAi;
