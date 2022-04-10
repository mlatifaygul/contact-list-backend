const INITIAL_STATE = {
  personList: [],
  message: "",
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_PERSONS_START":
      return { ...state, message: " " };
    case "GET_PERSONS_SUCCESS":
      return { ...state, personList: action.payload };
    case "GET_PERSONS_ERROR":
      return { ...state, message: action.payload };
    default:
      return state;
  }
};
