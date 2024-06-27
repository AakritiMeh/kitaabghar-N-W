import fileUploadlogo from "../assets/images/fileUploadLogo.png"
const FileUpload = () => {
  return (
    <div className="FileUploadComponent">
        <div className="FileUploadText">Upload Your files Here</div>
        <div className="FileUploadImage">
            <img src={fileUploadlogo} alt="upload file"></img>
        </div>
    </div>
  )
}

export default FileUpload