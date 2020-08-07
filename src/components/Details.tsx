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
 
let state1:any[]=[];
for(let i=0;i<props.repoLanguageData.length;i++){
state1[i] ={
  labels:Object.keys(props.repoLanguageData[i]),
  datasets: [
    {
      labels:Object.keys(props.repoLanguageData[i]) ,
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
      data: Object.values(props.repoLanguageData[i])
    } 
  ]
}
}
const state2 = {
  labels: ["Followers", "Following"],
  datasets: [
    {
      backgroundColor: ["#0074D9", "#FF4136"],
      data: [props.followers, props.following],
    },
  ],
};
  return (  
    
    <div>
      <div className="search-box">
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
      </div>
      <div className="display-box">
        <img className="photo" src={props.src} alt=""></img>
        <div className="name-box"><div className="user-name"> {props.username}</div>
        <div className="full-name">{props.fullname}</div></div>
        <div className="details-box">
        <div className="email">Email: {props.email}</div>
        <div className="repository">No of Repository: {props.repo.length}</div>
        <div className="followers">Followers: {props.followers}</div>
        <div className="following">Following: {props.following}</div>
        <div>Bio: {props.bio}</div>
        <div>Location: {props.location}</div>
        <div>Company: {props.company}</div></div>
{/* {console.log(props.bio)} */}
  </div>
     
        <div className="graph1">
          <div className="contr-graph">
          
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
        /></div>
  
  <div className="follow-graph">
            <Pie
          data={state2}
          options={{
            title:{
              display:true,
              text:'No of followers v/s No of following',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        /></div></div>
              <div className="repo">
        <h3 >Repository Details:</h3></div>
        <div className="repo-data">{props.repo.map((repo: any ,index)=>(
          <div className="r">
          <li key={index}> 
          <a href={repo.html_url}>{repo.name}</a>
          <h3> {repo.description}</h3>
        <h3>forks: {repo.forks_count}</h3>
        <h3>stars: {repo.stargazers_count}</h3>

        
      </li>
      
      </div>
        ))}
        </div>
            <div className ="repo-graph">
        {state1.map((value:any,index:any)=>(
          <div className="graph">
          <li key={index}>
             <Pie 
                data={value}
              
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
            
                } 
                }
                
            />
            </li></div>))}</div>
      </div>
 
      
    
  );
}


const mapDispatchToProps ={
  
     getName: (event:InputEvent) => (actionCreator.getName(event.target.value)),
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
    company:state.company,
    bio:state.bio,
    location:state.location,
   
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
