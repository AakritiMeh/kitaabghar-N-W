// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css"
// import Navbar from './components/Navbar'
import AboutUsPage from './pages/AboutUsPage'
import LandingPage from "./pages/LandingPage"
import FileUploadToAi from "./pages/FileUploadToAi"
import MaterialUpload from "./pages/MaterialUpload"
import Navbar from "./components/Navbar"

function App() {
  

  return (
    <>
    <Navbar />
      <LandingPage />
      <FileUploadToAi />
      <AboutUsPage />
      <MaterialUpload />
   
    </>
  )
}

export default App
