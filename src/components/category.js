import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Category = ({ category }) => {
  return (
    <CategoryLink>
      <StyledLink to="/category/">{category}</StyledLink>
    </CategoryLink>
  )
}
const CategoryLink = styled.div`
  background: #131414;
  margin: 0;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  // border-right: solid 0.1vh rgba(250, 235, 215, 0.884);
  text-decoration: none;
  width: auto;
  // min-width: 100px;
  height: 8vh;
`
const StyledLink = styled(props => <Link {...props} />)`
  font-family: "Roboto", sans-serif;
  // background: yellow;
  font-size: 70%;
  font-weight: 900;
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  min-width: 100px;
  &:hover {
    color: #fc32fc;
  }
`

export default Category
