import React from "react"
import Share from "../components/Share"
import Newsletter from "../components/Newsletter"
import About from "../components/About"
import Footer from "../components/Footer"
import Intro from "../components/Intro"
import Logo from "../components/Logo"
import WhatsMissing from "../components/WhatsMissing"
import ViewResults from "../components/ViewResults"
import Layout from "../layouts/layout.js"

const Index = () => (
  <Layout>
    <div className="Content Content--Home Home layout-narrow">
      <Logo />
      <Intro />
      <WhatsMissing />
      {/* <Share /> */}
      <Newsletter />
      {/* <About /> */}
      <Footer />
    </div>
  </Layout>
)

export default Index
