// import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./Routes/About";
import Contact from "./Routes/Contact";
import FAQs from "./Routes/FAQs";
import Service from "./Routes/Service";
// import Home from "./Home"

const App = () => {
  return (
    <>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/service" element={<Service/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/faq" element={<FAQs/>}/>
       </Routes>
    </>
  )
}

export default App