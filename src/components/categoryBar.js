// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const CategoryBar = ({ children }) => {
  return <Header> {children} </Header>
}

CategoryBar.propTypes = {
  siteTitle: PropTypes.string,
}

CategoryBar.defaultProps = {
  siteTitle: ``,
}
const Header = styled.header`
  background: #131414;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  // top: 10vh;
  // left: calc((100vw - 600px) / 2);
  overflow-y: hidden;
  overflow-x: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
  width: 600px;
  height: 8vh;
  & :-webkit-scrollbar {
    display: none;
  }
`

export default CategoryBar
