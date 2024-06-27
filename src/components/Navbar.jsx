// import PropTypes from "prop-types"
import ConnectWallet from "./ConnectWallet"
const Navbar = () => {
  return (
    <div className="NavbarMain">
        <div className="logo">Logo</div>
        <div className="aboutUs">About Us</div>
        <div className="PdfToVideo">Pdf To Video</div>
        <div className="connectWalletButton"><ConnectWallet /></div>
    </div>
  )
}

export default Navbar