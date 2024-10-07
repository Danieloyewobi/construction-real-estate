// import React from 'react'

import Body from "./component/Body"
import Card from "./component/Card"
// import Cardtwo from "./component/Cardtwo"
import Footer from "./component/Footer"
import Nav from "./component/Nav"
import Servicecard from "./component/Servicecard"
import TestimonialPage from "./component/TestimonialCard"

function Home() {
  return (
    <>
      <Nav/>
      <Body/>
      {/* <Cardtwo/> */}
      <Card/>
      <Servicecard/>
      <TestimonialPage/>
      <Footer/>
    </>
  )
}

export default Home