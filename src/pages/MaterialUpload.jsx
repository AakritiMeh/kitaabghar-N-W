
import lighthouse from '@lighthouse-web3/sdk'
import axios from "axios";
import { useState } from 'react';

function MaterialUpload() {

  let fileLink;
  const [walletId, setWalletId] = useState('');
  const [fileName, setFileName] = useState('');
  const uploadFile = async(file) =>{

    const output = await lighthouse.upload(file, import.meta.env.VITE_LIGHTHOUSE_API_DOCUMENT_STORAGE, false, null)
    console.log('File Status:', output);
    fileLink='Visit at https://gateway.lighthouse.storage/ipfs/' + output.data.Hash;
    console.log(fileLink);

    const response =axios.post('http://localhost:8080/uploaded-files', {
      walletId,
      fileName,
      fileLink
    });

    if (response.status == 200) {
      console.log('File added successfully!');
    } else {
      console.error("file not added");
    }
  
  }


  

  return (
    <div className="MaterialUploadMain">
      <div className='MaterialUpload'>
      <input
        type="text"
        placeholder="Wallet ID"
        value={walletId}
        onChange={(e) => setWalletId(e.target.value)}
      />
      <input
        type="text"
        placeholder="File Name"
        value={fileName}
        onChange={(e) => setFileName(e.target.value)}
      />
        <input onChange={e=>uploadFile(e.target.files)} type="file" />
      </div>
      <div>

      </div>

    </div>
  )
}

export default MaterialUpload