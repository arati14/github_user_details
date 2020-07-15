import { connect } from "react-redux";
import React from "react";
import * as actionCreator from "../redux/DetailsAction";
import "../App.css";
import { appState } from "../redux/store";
import {Pie} from 'react-chartjs-2';
import { valueData } from "../types/value";

type InputEvent = React.ChangeEvent<HTMLTextAreaElement>;
type FormEvent= React.FormEvent<HTMLFormElement>;
interface dispatchProps{
  getName: (event:InputEvent)=>any,
  getData:(value:string)=>any,
  getRepo:(value:string)=>any,
  getContributionsData:(value:string)=>any,

  }
 type Props=dispatchProps&valueData
function Details(props:Props) {
  const handleChange = (event:InputEvent) => {
    props.getName(event);
  };
  const handleOnClick = (event:FormEvent) => {
    event.preventDefault();
    props.getData(props.value);
    props.getRepo(props.value);
    props.getContributionsData(props.value);
    
  };
    console.log(props.repo);
    console.log(props.repoLanguageData);
    
  
const state = {
  labels:props.contributionData.map((value:any)=>(value.year)),
  datasets: [
    {
      label: props.contributionData.map((value:any)=>(value.year)),
      backgroundColor: [
        '#B21F00',
        '#C9DE00',
        '#2FDE00',
        '#00A6B4',
        '#6800B4'
      ],
      hoverBackgroundColor: [
      '#501800',
      '#4B5000',
      '#175000',
      '#003350',
      '#35014F'
      ],
      data: props.contributionData.map((value:any)=>(value.total))
    }
  ]
}

console.log(Object.values(props.repoLanguageData))
const state1 ={
  labels:Object.keys(props.repoLanguageData),
  datasets: [
    {
      label:Object.keys(props.repoLanguageData) ,
      backgroundColor: [
        '#B21F00',
        '#C9DE00',
        '#2FDE00',
        '#00A6B4',
        '#6800B4'
      ],
      hoverBackgroundColor: [
      '#501800',
      '#4B5000',
      '#175000',
      '#003350',
      '#35014F'
      ],
      data: Object.values(props.repoLanguageData)
    }
  ]

}
// language used in a repositary
let repoData = props.repo.map((repo: any) => repo.language); 
console.log(repoData);
let v = props.repo.map((repo: any) => repo.name); 

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
        <h3 className="user-name">Username: {props.username}</h3>
        <h3 className="full-name">Fullname:{props.fullname}</h3>
        <h3 className="email">Email:{props.email}</h3>
        <h3 className="repository">No of Repository:{props.repo.length}</h3>
  <h3 className="followers">Followers:{props.followers}</h3>
  <h3 className="following">Following:{props.following}</h3>
        <div className="repo-data">
        <h3>Repository Details:</h3>{props.repo.map((repo: any ,index)=>(
          <li key={index}> 
          <a href={repo.html_url}>{repo.name}</a>
          <h3> {repo.description}</h3>
        <h3>forks:{repo.forks_count}</h3>
        <h3>stars:{repo.stargazers_count}</h3>

     
      </li>
      
        ))}
        </div>
        
        
      </div>
      <div className="repository-graph">
     
         <Pie
          data={state}
          options={{
            title:{
              display:true,
              text:'No of Contribution Per Year',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
  
    
             <Pie 
             
          data={state1}
          options={{
            title:{
              display:true,
              text:'Repositary Language',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
 
      </div>
    
  );
}


const mapDispatchToProps ={
  
     getName: (event:InputEvent) => (actionCreator.getName),
     getData: (name:string) => (actionCreator.getData(name)),
     getRepo: (name:string) => (actionCreator.getRepo(name)),
     getContributionsData:(name:string) => (actionCreator.getContributionsData(name)),
  

};
const mapStateToProps = (state:appState) => {
  return {
    value: state.value,
    username: state.username,
    src: state.src,
    email: state.email,
    fullname: state.fullname,
    repo: state.repo,
    data: state.data,
    contributionData :state.contributionData,
    followers :state.followers,
    following :state.following,
    repoLanguageData: state.repoLanguageData,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
