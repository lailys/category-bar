import React from "react"
import renderer from "react-test-renderer"
import CategoryBar from "../categoryBar"



it("CategoryBar should renders correctly", () => {
  const tree = renderer.create( < CategoryBar / > ).toJSON()
  expect(tree).toMatchSnapshot()
})
