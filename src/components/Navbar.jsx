
import "../styles/Navbar.css"
import ConnectWallet from "./ConnectWallet"
import Button from "./Button"

const Navbar = () => {  
  return (
    <div className="NavbarMain">
        <div className="logo"> <Button ButtonName="logo" /> </div>
        <div className="Buttons">
          <div className="aboutUs"><Button ButtonName="About us" /></div>
          <div className="PdfToVideo"><Button ButtonName="Pdf to Video" /></div>
          <div className="connectWalletButton"><ConnectWallet /></div>
        </div>
    </div>
  )
}

export default Navbar