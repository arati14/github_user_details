import axios from "axios";
import {FETCH_USER_DETAILS,FETCH_USER_NAME} from "../types/details";
import {appAction} from "../types/details";
import { Dispatch } from "react";
export const getName = (name : string ):appAction => {
  return {
    type: FETCH_USER_NAME,
    name: name,
  };
};

export const getData = (name : string) => {
  return async (dispatch: Dispatch<appAction>) => {
    const response = await axios.get(`https://api.github.com/users/${name}`);
    dispatch({
      type: FETCH_USER_DETAILS,
      data: response.data,
    });
  };
};
