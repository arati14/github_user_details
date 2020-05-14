import { connect } from "react-redux";
import React from "react";
import * as actionCreator from "../redux/DetailsAction";
import "../App.css";
import { appState } from "../redux/store";
import { ThunkDispatch } from "redux-thunk";
import { appAction, FETCH_USER_NAME, FETCH_USER_DETAILS } from "../types/details";
//import { type } from "os";
type InputEvent = React.ChangeEvent<HTMLTextAreaElement>;
type FormEvent= React.FormEvent<HTMLFormElement>;
interface Props{
  value:string,
  username:string,
  fullname:string,
  src:string,
  email:string,
  getName: (event:InputEvent)=>void,
  getData:(value:Props["value"])=>void,
  
}
function Details(props:Props) {
  const handleChange = (event:InputEvent) => {
    props.getName(event);
  };
  const handleOnClick = (event:FormEvent) => {
    event.preventDefault();
    props.getData(props.value);
  };
  return (
    <div>
      <h1 className="Heading">Github User Details</h1>
      <form onSubmit={handleOnClick}>
        <label className="label">enter the user id:</label>
        <textarea
          className="text-area"
          value={props.value}
          onChange={handleChange}
        />
        <input className="submit-button" type="submit" value="fetch details" />
      </form>
      <div className="display-box">
        <img className="photo" src={props.src} alt=""></img>
        <h3> {props.username}</h3>
        <h3>{props.fullname}</h3>
        <h3>{props.email}</h3>
      </div>
    </div>
  );
}

// }
const mapDispatchToProps = (dispatch:ThunkDispatch<any,any,appAction>) => {
  return {
     getName: (event:InputEvent) => dispatch(actionCreator.getName(event.target.value)),
     getData: (name:string) => dispatch(actionCreator.getData(name)),
    // getName:()=>dispatch(type:FETCH_USER_NAME),
    // getData:()=>dispatch(type:FETCH_USER_DETAILS),
  };
};
const mapStateToProps = (state:appState) => {
  return {
    value: state.value,
    username: state.username,
    src: state.src,
    email: state.email,
    fullname: state.fullname,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
// import { connect } from "react-redux";
// import React from "react";
// import * as actionCreator from "../redux/DetailsAction";
// import "../App.css";
// interface Props extends React.Props<any> {
//   value:string,
//   src:string,
//   getName: (arg0: any)=>void,
//   getData: (arg0: any)=>void,
//   username: React.ReactNode,
//    fullname: React.ReactNode,
//   email: React.ReactNode; 
  
//   }
// function Details(props:Props) {
//   const handleChange = (event:any) => {
//     props.getName(event);
//   };
//   const handleOnClick = (event:any) => {
//     event.preventDefault();
//     props.getData(props.value);
//   };
//   return (
//     <div>
//       <h1 className="Heading">Github User Details</h1>
//       <form onSubmit={handleOnClick}>
//         <label className="label">enter the user id:</label>
//         <textarea
//           className="text-area"
//           value={props.value}
//           onChange={handleChange}
//         />
//         <input className="submit-button" type="submit" value="fetch details" />
//       </form>
//       <div className="display-box">
//         <img className="photo" src={props.src} alt=""></img>
//         <h3> {props.username}</h3>
//         <h3>{props.fullname}</h3>
//         <h3>{props.email}</h3>
//       </div>
//     </div>
//   );
// }
// const mapDispatchToProps = (dispatch:any) => {
//   return {
//     getName: (event:any) => dispatch(actionCreator.getName(event.target.value)),
//     getData: (name:any) => dispatch(actionCreator.getData(name)),
//   };
// };
// const mapStateToProps = (state:any) => {
//   return {
//     value: state.value,
//     username: state.username,
//     src: state.src,
//     email: state.email,
//     fullname: state.fullname,
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Details);