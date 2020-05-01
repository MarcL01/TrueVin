/* @flow */

type State = {
  // State handle by your reducer goes here
  errorMessage: string;
  decodedInformation: any;
  progress: number;
}

const INITIAL_STATE: State = {
  errorMessage: "",
  decodedInformation: {},
  progress: 0,
  hasInformation: false,
};

export default (state: State = INITIAL_STATE, action: { type: string, payload?: any }) => {
  switch (action.type) {
    case "ERROR":
      return Object.assign({}, state, {
        errorMessage: String(action.payload),
        progress: 0,
        hasInformation: false,
        decodedInformation: {}
      });
    case "CLEAR":
      return Object.assign({}, state, {
        errorMessage: "",
        decodedInformation: {},
        progress: 0,
        hasInformation: false
      });
    case "PROGRESS":
      return Object.assign({}, state, {
        progress: action.payload
      });
    case "UPDATE":
      return Object.assign({}, state, {
        errorMessage: "",
        progress: 0,
        decodedInformation: action.payload,
        hasInformation: true,
      });
    default:
      return state;
  }
};
