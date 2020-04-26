import axios from "axios";
export const FETCH_USER_DETAILS = "FETCH_USER_DETAILS";
export const FETCH_USER_NAME = "FETCH_USER_NAME";
export const getName = (name) => {
  return {
    type: FETCH_USER_NAME,
    name: name,
  };
};

export const getData = (name) => {
  return async (dispatch) => {
    const response = await axios.get(`https://api.github.com/users/${name}`);
    dispatch({
      type: FETCH_USER_DETAILS,
      data: response.data,
    });
  };
};
