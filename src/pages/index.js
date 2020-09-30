import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import bannerimage from "../static/images/banner.svg"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="home-wrapper">
      <div className="banner-section" style={{ background: "rgb(84 136 85)" }}>
        <div className="container">
          <div class="banner-text">
            <p>
              Ultimate
              <br />
              Digital
              <br />
              Experiences
            </p>
            <div class="banner-sub-text">
              <p>
                to acquire, retain, and
                <br />
                delight your clients
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="section-2">
          <h1 style={{ textAlign: "center" }}>MIDS – THE DIFFERENTIATOR</h1>

          <div class="section2_content_wrapper">
            <p style={{ textAlign: "center" }}>
              In the vast shining sector of information technology, MIDS have
              been preferred choice for our clients for development in Web,
              Enterprise and Mobile Domain and also ones who are looking for
              Software Testing Solutions and Agile Developments. We offer our
              clients a wide range of end-to-end development and testing
              solutions in mobile, web and enterprise domain. MIDS is a group of
              top-notch individuals committed to go the extra miles to ensure
              high productivity.
            </p>
            <p style={{ textAlign: "center" }}>
              Our aim is to provide cutting-edge solutions that provide you
              value for your money. We deliver a complete end to end solution,
              starting from conceptualization to deployment, quality assurance
              and maintenance.
            </p>
          </div>
        </div>
      </div>


      <div className="expended-container section3">

      </div>
    </div>
  </Layout>
)

export default IndexPage
