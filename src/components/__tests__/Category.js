import React from "react"
import renderer from "react-test-renderer"
import Category from "../category"



it("Category should renders correctly", () => {
  const tree = renderer.create( < Category / > ).toJSON()
  expect(tree).toMatchSnapshot()
})
