const INITIAL_STATE = {
  personList: [],
  personDetail: {
    id: "",
    name: "",
    phone: "",
    mobile_phone: "",
    address: "",
    email: "",
  },
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
    case "GET_DETAIL_PERSON_SUCCESS":
      return { ...state, personDetail: action.payload, message: "" };
    case "GET_DETAIL_PERSON_ERROR":
      return { ...state, message: action.payload };
    default:
      return state;
  }
};
