import React from "react"
import { createGlobalStyle } from "styled-components"
import Layout from "../components/layout"
import Categories from "../components/categories"

const IndexPage = () => (
  <Layout>
    <GlobalStyle />
    <Categories categories={categories} />
  </Layout>
)
const categories = [
  "Vlog",
  "Interview",
  "Event",
  "Tutorial",
  "Product Review",
  "Testimonial",
  "Animation",
  "Live Streaming",
  "Brand Film",
  "Product Review",
]
const GlobalStyle = createGlobalStyle`
  body,html {
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;    width: 100vw;
    height: 100vh;
    & ::-webkit-scrollbar {
      display: none;
    }
    }
    * ::-webkit-scrollbar {
      display: none;
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
