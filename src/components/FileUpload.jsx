import fileUploadlogo from "../assets/images/fileUploadLogo.png"
import PropTypes from 'prop-types';
const FileUpload = ({onFileSelect}) => {
    const handleClick = () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.onchange = (e) => {
          onFileSelect(e.target.files);
        };
        input.click();
      };
  return (
    <div className="FileUploadComponent" onClick={handleClick} >
        
        <div className="FileUploadText">Upload Your files Here</div>
        <div className="FileUploadImage">
            <img src={fileUploadlogo} alt="upload file" width="40" height="40"></img>
        </div>
        
    </div>
  )
}

FileUpload.propTypes = {
    onFileSelect: PropTypes.func.isRequired
  }

export default FileUpload