
import lighthouse from '@lighthouse-web3/sdk'

function MaterialUpload() {

  const progressCallback = (progressData) => {
    let percentageDone =
      100 - (progressData?.total / progressData?.uploaded)?.toFixed(2)
    console.log(percentageDone)
  }

  const uploadFile = async(file) =>{

    const output = await lighthouse.upload(file, "API_KEY", false, null, progressCallback)
    console.log('File Status:', output)


      console.log('Visit at https://gateway.lighthouse.storage/ipfs/' + output.data.Hash)
  }

  return (
    <div className="MaterialUpload">
      <input onChange={e=>uploadFile(e.target.files)} type="file" />
    </div>
  )
}

export default MaterialUpload