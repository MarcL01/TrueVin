import React from "react";
import { shallow } from "enzyme";

import VinLoader from "apps/main/components/VinLoader";

describe("apps/main/components/VinLoader", () => {
  it("renders without an issue", () => {
    const subject = <VinLoader />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
