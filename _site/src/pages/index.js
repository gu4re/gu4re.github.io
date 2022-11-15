import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const samplePageLinks = [
  {
    text: "Page 2",
    url: "page-2",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
  { text: "TypeScript", url: "using-typescript" },
  { text: "Server Side Rendering", url: "using-ssr" },
  { text: "Deferred Static Generation", url: "using-dsg" },
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>

    <div class="wrapper">
      <div class="typing-demo">
        <p>Welcome to my <b>Repo!</b></p>
      </div>
    </div>

  </Layout>

)

// Please press <b>Enter</b> to continue...

document.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    window.location.href = "https://gu4re.github.io/page-2/"
  }
})



// si se presiona intro entonces
// window.location.href = "http://example.com/new_url";

export const Head = () => <Seo title="Home" />

export default IndexPage
