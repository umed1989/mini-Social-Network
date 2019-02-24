import { GET_ERROR } from "./types";
import axios from "axios";

const registerUser = userData => dispatch => {
  axios
    .post("/api/users/register", userData)
    .then()
    .catch(err => dispatch({ type: GET_ERROR, payload: err.response.data }));
};

export default registerUser;
