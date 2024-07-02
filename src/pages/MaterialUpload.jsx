
import lighthouse from '@lighthouse-web3/sdk'


function MaterialUpload() {


  const uploadFile = async(file) =>{

    const output = await lighthouse.upload(file, import.meta.env.VITE_LIGHTHOUSE_API_DOCUMENT_STORAGE, false, null)
    console.log('File Status:', output)


      console.log('Visit at https://gateway.lighthouse.storage/ipfs/' + output.data.Hash)
  }

  return (
    <div className="MaterialUploadMain">
      <div className='MaterialUpload'>
        <input onChange={e=>uploadFile(e.target.files)} type="file" />
      </div>
      <div>

      </div>

    </div>
  )
}

export default MaterialUpload