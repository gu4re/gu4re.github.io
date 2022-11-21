import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div class="btn1"><Link to="/index.js">_____</Link></div>

  </Layout>

)



// Please press <b>Enter</b> to continue...
// LO MEJOR ES PONER LA MANZANA COMO FOTO CUSTOM, LUEGO UN TREE Y LISTO Y QUE PINCHE

/*document.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    window.location.href = "https://gu4re.github.io/page-2/"
  }
})*/



// si se presiona intro entonces
// window.location.href = "http://example.com/new_url";

export const Head = () => <Seo title="Home" />

export default IndexPage
