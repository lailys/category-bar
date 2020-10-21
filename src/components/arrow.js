import React from "react"
import styled from "styled-components"

const Arrow = ({ sign, scroll }) => {
  console.log(sign, "sig")
  return (
    <Button sign={sign[1]} onClick={e => scroll(e)}>
      {sign[0]}
    </Button>
  )
}

const Button = styled.button`
  background: #131414;
  color: #fc32fc;
  font-size: 130%;
  font-weight: bold;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${props => props.sign}vw;
  border: none;
  width: 4vw;
  height: 10vh;
`

export default Arrow
