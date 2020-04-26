import axios from 'axios';
 import {FETCH_USER_NAME} from './types'
 import {FETCH_USER_DETAILS} from './types'
export const getName =(name)=>{
   
     return{
         type:FETCH_USER_NAME,
         name:name
     }
 }

export const getData =(name)=>{
   
    console.log(name)
    return async (dispatch) => {
        const response = await axios.get(`https://api.github.com/users/${name}`);
          dispatch({
            type: FETCH_USER_DETAILS,
            data:response.data,
          });
        
     
  }}