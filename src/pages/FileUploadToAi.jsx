// FileUploadToAi.jsx
import lighthouse from '@lighthouse-web3/sdk'
import FileUpload from '../components/FileUpload'

function FileUploadToAi() {
  const uploadFile = async(files) => {
    if (files && files.length > 0) {
      const file = files[0];
      const output = await lighthouse.upload(file, import.meta.env.VITE_LIGHTHOUSE_API_DOCUMENT_STORAGE, false, null)
      console.log('File Status:', output)
      console.log('Visit at https://gateway.lighthouse.storage/ipfs/' + output.data.Hash)
    }
  }

  return (
    <div className="FileUpload">
      <FileUpload onFileSelect={uploadFile} />
    </div>
  )
}

export default FileUploadToAi