// import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Contact from "./Routes/ContactUs";
import FAQs from "./Routes/FAQs";
import Service from "./Routes/Service";
import Properties from "./Routes/Properties";
import AboutUs from "./Routes/AboutUs";
// import Home from "./Home"

const App = () => {
  return (
    <>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/service" element={<Service/>} />
        <Route path="/Properties" element={<Properties/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/faq" element={<FAQs/>}/>
       </Routes>
    </>
  )
}

export default App