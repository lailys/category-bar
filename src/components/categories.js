import React, { PureComponent } from "react"
import Category from "./category"
import styled from "styled-components"
import debounce from "lodash.debounce"

class Categories extends PureComponent {
  constructor() {
    super()
    this.state = {
      items: categories,
      hasOverflow: false,
      buttonLeft: 0,
      buttonRight: 1,
      distance: 0,
    }
    this.scrollBox = null
    this.overflow = this.overflow.bind(this)
    this.debounceOV = debounce(this.overflow, 800)
    this.getScrollPosition = this.getScrollPosition.bind(this)
    this.debounceSP = debounce(this.getScrollPosition, 200)
  }

  componentDidMount() {
    this.overflow()
    this.getScrollPosition()

    this.scrollBox.addEventListener("scroll", this.debounceSP)
  }

  componentWillUnmount() {
    this.scrollBox.removeEventListener("scroll", this.debounceSP)
    this.debounceOV.cancel()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.items.length !== this.state.items.length) {
      this.overflow()
      this.getScrollPosition()
    }
  }

  getScrollPosition() {
    const { scrollLeft, scrollWidth, clientWidth } = this.scrollBox
    this.setState({
      canScrollLeft: scrollLeft > 0,
      canScrollRight: scrollLeft !== scrollWidth - clientWidth,
    })
  }

  overflow() {
    const { scrollWidth, clientWidth } = this.scrollBox
    const hasOverflow = scrollWidth > clientWidth

    this.setState({ hasOverflow })
  }
  scrollLeft() {
    if (this.state.distance <= 120) {
      this.setState({
        buttonLeft: 0,
      })
    }
    if (this.state.distance < 500) {
      this.setState({
        buttonRight: 1,
      })
    }
    if (this.state.distance >= 120) {
      this.setState(prevState => ({
        distance: prevState.distance - 120,
      }))
      this.scrollBox.scrollTo({
        left: this.state.distance - 120,
        behavior: "smooth",
      })
    }
  }
  scrollRight() {
    if (this.state.distance >= 120) {
      this.setState({
        buttonLeft: 1,
      })
    }
    if (this.state.distance >= 500) {
      this.setState({
        buttonRight: 0,
      })
    }

    if (this.state.distance <= 600) {
      this.setState(prevState => ({
        distance: prevState.distance + 120,
      }))
      this.scrollBox.scrollTo({
        left: this.state.distance + 120,
        behavior: "smooth",
      })
    }
  }

  render() {
    return (
      <>
        <Scroller
          ref={node => {
            this.scrollBox = node
          }}
        >
          {this.state.items.map((cat, i) => (
            <Category category={cat} key={i} />
          ))}
        </Scroller>
        <Arrow
          isActive={this.state.buttonLeft}
          sign={arrow[0][1]}
          onClick={() => {
            this.scrollLeft()
          }}
        >
          {arrow[0][0]}
        </Arrow>
        <Arrow
          isActive={this.state.buttonRight}
          sign={arrow[1][1]}
          onClick={() => {
            this.scrollRight()
          }}
        >
          {arrow[1][0]}
        </Arrow>
      </>
    )
  }
}

const arrow = [
  ["<", 414],
  [">", 1051],
]
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
const Scroller = styled.div`
  background: yellow;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  list-style: none;
  width: ${categories.length * 120}px;
  height: 8vh;
`
const Arrow = styled.button`
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
  top: 10vh;
  left: ${props => props.sign}px;
  opacity: ${props => props.isActive};
  border: none;
  width: 35px;
  height: 10vh;
`
export default Categories
