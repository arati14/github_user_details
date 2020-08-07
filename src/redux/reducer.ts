import { FETCH_USER_DETAILS, FETCH_USER_NAME,ADD_REPO,CONTRIBUTION_DATA,REPO_LANGUAGE} from "../types/details";
import {valueData} from "../types/value";
import {appAction} from "../types/details";
import { act } from "@testing-library/react";
const initialState: valueData = {
  value: "",
  data: [],
  username: "",
  src: "",
  email: "",
  fullname: "",
  repo: [],
  contributionData:[],
  followers:0,
  following:0,
  repoLanguageData:[],
  company:"",
    bio:"",
    location:"",
    
};

const reducer = (state = initialState, action:appAction):valueData => {
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
        followers: action.data.followers,
        following: action.data.following,
       location:action.data.location,
       bio:action.data.bio,
       company:action.data.company,

      };
      case ADD_REPO:
        return{
          ...state,
          repo:action.data1,
          // data:action.data1.data.name
        }
        case CONTRIBUTION_DATA:
          return{
            ...state,
            contributionData:action.data2,
          }
          case REPO_LANGUAGE:
            return{
              ...state,
              repoLanguageData:action.data3,
            

            }
    default:
      return state;

  }
};
export default reducer;
