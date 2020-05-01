import React from "react";
import { shallow } from "enzyme";

import VinInfo from "apps/main/components/VinInfo";

describe("apps/main/components/VinInfo", () => {
  it("renders without an issue", () => {
    const subject = <VinInfo />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
