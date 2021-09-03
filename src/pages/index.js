import * as React from "react"
import {Helmet} from "react-helmet";

import Profile from "../components/profile";

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
          <Profile/>

        </div>

      </main>
    </>
  )
}

export default IndexPage
