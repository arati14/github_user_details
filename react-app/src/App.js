import React, { Component } from 'react';
import './App.css';


 class App extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
      value: '',
      data: '',
      username:'',
      msg:'',
      src:'',
      email:''
      };
      this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
   }
   
  handleChange(event) {
    this.setState({value: event.target.value});
 
  }

 handleSubmit(event) 
  {
    const no=String(this.state.data.id)
     if(this.state.value === no){
      this.setState(
        {username:this.state.data.login,
        src:this.state.data.avatar_url,
        email:this.state.data.email});
    }
    else{
      this.setState({msg:'Incorrect Id'});
    }
    event.preventDefault();
  }
 
  
  async  componentDidMount(){
    const url = "https://api.github.com/users/example";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({data:data});
    console.log(this.state.data.id);
    
    
  }
   
  render() {
    return (
      <div >
        <h1 className="Heading">Github User Details</h1>
        <form onSubmit={this.handleSubmit}>
          <label className="text-area">enter the user id
            <textarea   value={this.state.value} onChange={this.handleChange}/>
          </label>
          <input className="submit-button" type="submit" value="fetch details" />
        </form>
        <div className="display-box">
            <h2>{this.state.msg}</h2>
            <h2>{this.state.username}</h2>
            <img src={this.state.src}></img>
            <h2>{this.state.username}</h2>
            <h2>{this.state.email}</h2>
        </div>
   
      </div>
    )
  }
}

export default App

