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
  personListErr: "",
  personDetailErr: ""
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_PERSONS_SUCCESS":
      return { ...state, personList: action.payload, personListErr: "" };
    case "GET_PERSONS_ERROR":
      return { ...state, personListErr: action.payload };
    case "GET_DETAIL_PERSON_SUCCESS":
      return { ...state, personDetail: action.payload, personDetailErr: "" };
    case "GET_DETAIL_PERSON_ERROR":
      return { ...state, personDetailErr: action.payload };
    default:
      return state;
  }
};
