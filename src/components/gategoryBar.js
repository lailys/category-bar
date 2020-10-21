// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const GategoryBar = ({ children }) => {
  return <Header>{children}</Header>
}

GategoryBar.propTypes = {
  siteTitle: PropTypes.string,
}

GategoryBar.defaultProps = {
  siteTitle: ``,
}
const Header = styled.header`
  background: #131414;
  // background: yellow;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 16.7vw;
  overflow-y: hidden;
  overflow-x: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
  width: 66.8vw;
  height: 10vh;
  & :-webkit-scrollbar {
    display: none;
  }
`

export default GategoryBar
