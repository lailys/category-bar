import React, { Component } from "react"
import Arrow from "./arrow"
import Category from "./category"
import styled from "styled-components"

class Categories extends Component {
  state = {
    index: 0,
  }
  scrollLeft = e => {
    console.log("mmmm", this.state.index)
    if (this.state.index > 0) {
      this.setState(prevState => ({
        index: prevState.index - 1,
      }))
    }
  }
  scrollRight = e => {
    console.log("mmmm", this.state.index)
    if (this.state.index < categories.length - 6) {
      this.setState(prevState => ({
        index: prevState.index + 1,
      }))
    }
  }
  render() {
    console.log(this.myRef, ">>>.......")
    return (
      <Scroller ref={this.myRef}>
        {categories
          .slice(this.state.index, this.state.index + 6)
          .map((cat, i) => (
            <Category category={cat} key={i} />
          ))}
        <Arrow sign={arrow[0]} scroll={this.scrollLeft} />
        <Arrow sign={arrow[1]} scroll={this.scrollRight} />
      </Scroller>
    )
  }
}

const arrow = [
  ["<", 16.7],
  [">", 80.3],
]
const categories = [
  "Vlog",
  "Interview/Q&A",
  "Event",
  "Tutorial/How To",
  "Product Review",
  "Testimonial",
  "Animation",
  "Live Streaming",
  "Brand Film",
  "Product Review",
]
const Scroller = styled.div`
  background: yellow;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  width: auto;
  height: 10vh;
`
export default Categories
