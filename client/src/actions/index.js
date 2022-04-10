import axios from "axios";

export const getPersons = () => (dispatch) => {
  //dispatch({ type: "GET_PERSONS_START" });
    axios
      .get("/persons")
      .then((res) =>
        dispatch({ type: "GET_PERSONS_SUCCESS", payload: res.data })
      )
      .catch((err) => {
        dispatch({ type: "GET_PERSONS_ERROR", payload: err });
      });
};
