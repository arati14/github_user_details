import { connect } from "react-redux";
import React from "react";
import * as actionCreator from "../redux/DetailsAction";
import "../App.css";
function Details(props) {
  const handleChange = (event) => {
    props.getName(event);
  };
  const handleOnClick = (event) => {
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
const mapDispatchToProps = (dispatch) => {
  return {
    getName: (event) => dispatch(actionCreator.getName(event.target.value)),
    getData: (name) => dispatch(actionCreator.getData(name)),
  };
};
const mapStateToProps = (state) => {
  return {
    value: state.value,
    username: state.username,
    src: state.src,
    email: state.email,
    fullname: state.fullname,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
