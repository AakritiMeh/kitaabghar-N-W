
import lighthouse from '@lighthouse-web3/sdk'
import axios from "axios";
import { useState } from 'react';
import "../styles/MaterialUpload.css"
function MaterialUpload() {

  let fileLink;
  const [walletId, setWalletId] = useState('');
  const [fileName, setFileName] = useState('');

  const uploadFile = async(file) =>{

    const output = await lighthouse.upload(file, import.meta.env.VITE_LIGHTHOUSE_API_DOCUMENT_STORAGE, false, null)
    console.log('File Status:', output);
    fileLink='Visit at https://gateway.lighthouse.storage/ipfs/' + output.data.Hash;
    console.log(fileLink);

    const response =await axios.post('http://localhost:8080/uploaded-files', {
      walletId,
      fileName,
      fileLink
    });

    if (response.status == 200) {
      console.log('File added successfully!');
    } else {
      console.log("file not added");
    }
  
  }  

  return (
    <div className="MaterialUploadMain">
      <h1>Upload your materials here</h1>
      <div className='MaterialUpload'>
        <div className='textinput'>
          <input
            type="text"
            placeholder="Wallet ID"
            value={walletId}
            onChange={(e) => setWalletId(e.target.value)}
          />
        </div>
        <div className='textinput'>
          <input
            type="text"
            placeholder="File Name"
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
          />
        </div>
        <div className='fileInput'>
          <input onChange={e=>uploadFile(e.target.files)} type="file" />
        </div>
      </div>
      <div>

      </div>

    </div>
  )
}

export default MaterialUpload