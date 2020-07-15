import axios from "axios";
import {FETCH_USER_DETAILS,FETCH_USER_NAME,ADD_REPO,CONTRIBUTION_DATA,REPO_LANGUAGE} from "../types/details";
import {appAction} from "../types/details";
import { Dispatch } from "react";
import { ReplOptions } from "repl";
export const getName = (name : string ):appAction => {
  return {
    type: FETCH_USER_NAME,
    name: name,
  };
};

export const getData = (name : string) => {
  return async (dispatch:any) => {
    const response = await axios.get(`https://api.github.com/users/${name}`);
    dispatch({
      type: FETCH_USER_DETAILS,
      data: response.data,
    });
  };
};
export const getRepo =(name : string) => 
  async(dispatch:any) => {
    const response1 = await axios.get(`https://api.github.com/users/${name}/repos`);
  
    dispatch({
      type:ADD_REPO ,
      data1: response1.data,
    });
    const arr=response1.data.map((item:any)=>item.name )
    for(let i=0;i< arr.length;i++){
      dispatch(getRepoLanguage(name,arr[i],i));
    }
   
  }
;
 export const getContributionsData = (name: string) => async (dispatch: any) => {
  const responseContributions = await axios.get(
    `https://github-contributions-api.now.sh/v1/${name}`
  );
  const contributionData = responseContributions.data.years;
  dispatch({
    type: CONTRIBUTION_DATA,
    data2: contributionData,
  });
  console.log(contributionData);

};
const arrlang :any[]=[];
export const getRepoLanguage = (name: string,repoName: string,i:number) => async (dispatch: any) =>{
  const responseLanguage = await axios.get(
`https://api.github.com/repos/${name}/${repoName}/languages`
  );
  // console.log(repoName)
  // console.log(responseLanguage.data)
  arrlang[i]=responseLanguage.data
  dispatch({
    type: REPO_LANGUAGE,
    data3: arrlang,
    
  });
  console.log(arrlang)
  // console.log("arati")
  // console.log(responseLanguage.data)

  
  
};