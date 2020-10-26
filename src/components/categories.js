import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import Category from "./category"
import styled from "styled-components"
import debounce from "lodash.debounce"

class Categories extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      categories: props.categories,
      hasOverflow: false,
      canScrollLeft: false,
      canScrollRight: false,
      buttonLeft: 0,
      buttonRight: 1,
      distance: 0,
      error: null,
      errorInfo: null,
    }
    this.scrollBox = null
    this.overflow = this.overflow.bind(this)
    this.debounceOV = debounce(this.overflow, 200)
    this.getScrollPosition = this.getScrollPosition.bind(this)
    this.debounceSP = debounce(this.getScrollPosition, 200)
  }
  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    })
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
    if (prevState.categories.length !== this.state.categories.length) {
      this.overflow()
      this.getScrollPosition()
    }
  }

  getScrollPosition() {
    try {
      const { scrollLeft, scrollWidth, clientWidth } = this.scrollBox
      this.setState({
        canScrollLeft: scrollLeft > 0,
        canScrollRight: scrollLeft !== scrollWidth - clientWidth,
      })
      this.setState({
        buttonLeft: scrollLeft >= 100 ? 1 : 0,
        buttonRight: scrollLeft <= 480 ? 1 : 0,
      })
    } catch (error) {
      if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
        console.log(error)
      }
      return null
    }
  }

  overflow() {
    try {
      const { scrollWidth, clientWidth } = this.scrollBox
      const hasOverflow = scrollWidth > clientWidth
      this.setState({ hasOverflow })
    } catch (error) {
      if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
        console.log(error)
      }
      return null
    }
  }
  scrollLeft() {
    try {
      if (this.state.distance <= 120) {
        this.setState({
          buttonLeft: 0,
        })
      }
      if (this.state.distance <= 480) {
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
    } catch (error) {
      if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
        console.log(error)
      }
      return null
    }
  }
  scrollRight() {
    try {
      console.log(this.state.distance, ">")
      if (this.state.distance >= 120) {
        this.setState({
          buttonLeft: 1,
        })
      }
      if (this.state.distance > 480) {
        this.setState({
          buttonRight: 0,
        })
      }

      if (this.state.distance <= 480) {
        this.setState(prevState => ({
          distance: prevState.distance + 120,
        }))
        this.scrollBox.scrollTo({
          left: this.state.distance + 120,
          behavior: "smooth",
        })
      }
    } catch (error) {
      if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
        console.log(error)
      }
      return null
    }
  }

  render() {
    const { categories, buttonLeft, buttonRight, errorInfo, error } = this.state
    if (error) return <p>{errorInfo}</p>
    return (
      <>
        <Scroller
          categories={categories}
          ref={node => {
            this.scrollBox = node
          }}
        >
          {Array.isArray(categories) ? (
            categories.map((cat, i) => <Category category={cat} key={i} />)
          ) : (
            <></>
          )}
        </Scroller>
        <Arrow
          isActive={buttonLeft}
          arrowLocation={arrow[0][1]}
          arrowSign={arrow[0][0]}
          onClick={() => {
            this.scrollLeft()
          }}
        >
          {arrow[0][0]}
        </Arrow>
        <Arrow
          isActive={buttonRight}
          arrowLocation={arrow[1][1]}
          arrowSign={arrow[1][0]}
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
Categories.propTypes = {
  categories: PropTypes.array,
}
const arrow = [
  ["<", "calc(((100vw - 600px) / 2) )"],
  [">", "calc(((100vw - 600px) / 2) + 565px)"],
]

const Scroller = styled.div`
  background: #131414;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  list-style: none;
  scrollbar-width: none;
  width: ${props => props.categories.length * 120 + 1}px;
  height: 8vh;
  & ::-webkit-scrollbar {
    display: none;
  }
`
const Arrow = styled.button`
  background: #131414;
  // background: #131414d0;
  color: #fc32fc;
  font-size: 130%;
  font-weight: bold;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: ${props =>
    props.arrowSign === "<" ? "flex-start" : "flex-end"};
  position: absolute;
  left: ${props => (props.arrowSign === "<" ? 0 : 565)}px;
  opacity: ${props => props.isActive};
  border: none;
  width: 35px;
  height: 8vh;
`

export default Categories
