import React from "react";
import { shallow } from "enzyme";
import Headline from "./index";

import { findByDataTestAttr } from "./../../Utils";

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe("Headline Component", () => {
  describe("Component has props", () => {
    let component;
    beforeEach(() => {
      const props = {
        header: "test header",
        desc: "test desc"
      };
      component = setUp(props);
    });

    test("Should render component without error", () => {
      const wrapper = findByDataTestAttr(component, "headlineComponent");
      expect(wrapper.length).toBe(1);
    });
    test("Should render a H1 Tag", () => {
      const h1 = findByDataTestAttr(component, "header");
      expect(h1.length).toBe(1);
    });
    test("Should render a desccription", () => {
      const desc = findByDataTestAttr(component, "desc");
      expect(desc.length).toBe(1);
    });
  });

  describe("Component has no props", () => {
    let component;
    beforeEach(() => {
      component = setUp();
    });
    test("Should not render component", () => {
      const wrapper = findByDataTestAttr(component, "headlineComponent");
      expect(wrapper.length).toBe(0);
    });
  });
});
