import React from "react"
import renderer from "react-test-renderer"
import Categories from "../../components/categories"
import Index from "../index"
import Enzyme, {
  mount,
  ReactWrapper,
  configure,
  shallow
} from "enzyme"
import EnzymeAdapter from "enzyme-adapter-react-16"

Enzyme.configure({
  adapter: new EnzymeAdapter(),
})




it("Index should renders correctly", () => {


  const wrapper = mount( < Index / > )
  expect(wrapper.find("button").length).toEqual(2);

})
