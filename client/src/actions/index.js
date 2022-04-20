import axios from "axios";
import { useParams } from "react-router-dom";

export const getPersons = () => (dispatch) => {
  
  //dispatch({ type: "GET_PERSONS_START" });
  axios
    .get("/persons")
    .then((res) => dispatch({ type: "GET_PERSONS_SUCCESS", payload: res.data }))
    .catch((err) => {
      dispatch({ type: "GET_PERSONS_ERROR", payload: err });
    });
};

export const getDetailPerson = (id) => (dispatch) => {
  
  axios
    .get(`/persons/${id}`)
    .then((res) => {
      const payload = {
        ...res.data
      };
      dispatch({ type: "GET_DETAIL_PERSON_SUCCESS", payload});
    })
    .catch((err) => {
      dispatch({ type: "GET_DETAIL_PERSON_ERROR", payload: err });
    });
};
