import React from "react";
import { shallow } from "enzyme";
import Header from "./index";

import { findByDataTestAttr } from "./../../Utils";

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe("Header Component", () => {
  let component;

  beforeEach(() => {
    component = setUp();
  });

  test("Should render the header component without error", () => {
    // console.log(component.debug());
    const wrapper = findByDataTestAttr(component, "headerComponent");
    expect(wrapper.length).toBe(1);
  });

  test("Should render a logo", () => {
    const logo = findByDataTestAttr(component, "imgLogo");

    expect(logo.length).toBe(1);
  });
});
