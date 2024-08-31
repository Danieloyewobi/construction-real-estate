// import React from 'react'

import Body from "./component/Body"
import Bottomcard from "./component/Bottomcard"
import Cardtwo from "./component/Cardtwo"
import Footer from "./component/Footer"
import Nav from "./component/Nav"
import Servicecard from "./component/Servicecard"

function Home() {
  return (
    <>
      <Nav/>
      <Body/>
      <Cardtwo/>
      <Servicecard/>
      <Bottomcard/>
      <Footer/>
    </>
  )
}

export default Home