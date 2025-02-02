import Hero from "./Componenets/Hero"
import Intro from "./Componenets/Intro"
import About from "./pages/About"
import Navbar from "./Componenets/Navbar"

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footers from "./Componenets/Footers"
import Resume from "./pages/Resume"

function App() {
  

  return (
    <>
    <BrowserRouter>
 <Navbar/>
 <main>
  <Routes>
    <Route path="/" element={<Hero/>}/>
    <Route path="/about" element={<About/>}/>
  <Route path="/resume" element={<Resume/>}/>
  </Routes>
 </main>
 <Footers/>
 

 </BrowserRouter>
    </>
  )
}

export default App
