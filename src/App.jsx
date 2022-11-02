import React from "react"
import Navbar from './components/Navabar.jsx'
import Hero from './components/Hero.jsx'
import './App.css'
// import ScrollDown from "./components/Scrolldown.jsx"

function App() {

  return (
    <div className="App">
      <div className="spacer layer-1"></div>
      <Navbar />
      <Hero />
    </div>
  )
}

export default App
