import React from "react"
import styled from "styled-components"

const Arrow = ({ sign, scroll, index, total }) => {
  return (
    <Button sign={sign[1]} onClick={e => scroll(e)} index={index} total={total}>
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
  opacity: ${props => {
    console.log(props.sign, props.index, "props.sign, props.index")
    if (props.sign === 16.7 && props.index === 0) {
      return 0
    }
    if (props.sign === 80.3 && props.index === props.total - 7) {
      return 0
    }
    return 1
  }};
  left: ${props => props.sign}vw;
  border: none;
  width: 4vw;
  height: 10vh;
`

export default Arrow
