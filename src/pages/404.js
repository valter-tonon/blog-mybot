import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Nada aqui</h1>
    <p>Ops...Parece que não há nada aqui</p>
  </Layout>
)

export default NotFoundPage
