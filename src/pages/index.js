import React from "react"
// import { Link } from "gatsby"
import { createGlobalStyle } from "styled-components"
import Layout from "../components/layout"
import Categories from "../components/categories"
// import Image from "../components/image"
// import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <GlobalStyle />
    <Categories />
  </Layout>
)
const GlobalStyle = createGlobalStyle`
  body,html {
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;    width: 100vw;
    height: 100vh;
    }
    button:active:focus,
    button:focus {
    outline: 0 !important;
    outline-offset: 0 !important;
    background-image: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
  }
  input:focus,
  textarea:focus,
  div:focus,
  select:focus {
    outline: none;
  }
`
export default IndexPage
