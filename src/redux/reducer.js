import { FETCH_USER_DETAILS, FETCH_USER_NAME } from "./DetailsAction";

const initialState = {
  value: "",
  data: "",
  username: "",
  src: "",
  email: "",
  fullname: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_NAME:
      return {
        ...state,
        value: action.name,
      };
    case FETCH_USER_DETAILS:
      return {
        ...state,
        username: action.data.login,
        src: action.data.avatar_url,
        email: action.data.email,
        fullname: action.data.name,
      };
    default:
      return state;
  }
};
export default reducer;
