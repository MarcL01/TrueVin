/* @flow */

import reducer from "apps/main/reducers/vinDecoder";

describe("apps/main/reducers/vinDecoder", () => {
  it("returns the initial state", () => {
    const state = {
      errorMessage: "",
      decodedInformation: {},
      progress: 100,
    };
    expect(
      reducer({
        errorMessage: "",
        decodedInformation: {},
        progress: 0,
      }, {
        type: "UPDATE"
      })
    ).toEqual(state);
  });
});
