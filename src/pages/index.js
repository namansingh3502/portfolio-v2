import * as React from "react"
import {Helmet} from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";

import Profile from "../components/profile";
import AboutMe from "../components/aboutme";
import Backpack from "../components/backpack";

AOS.init();

// markup
const IndexPage = () => {

  return (
    <>
      <Helmet>
        <html lang='en' />
        <title>Naman Singh</title>
        <meta name='description' content="Naman Singh's Portfolio"  />
      </Helmet>
      <main>
        <div className="container mx-auto px-2">
          <Profile/>
          <AboutMe/>
          <Backpack/>
        </div>

      </main>
    </>
  )
}

export default IndexPage
