import React, { Component } from 'react';
import './App.css';

 class App extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        value: '',
        data:'',
        username:'',
        src:'',
        email:'',
        fullname:''
     }
     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
   }
  
   handleChange(event)
    {
      this.setState({value: event.target.value});
    }
    async handleSubmit(event) 
      {
        event.preventDefault();
        const axios = require('axios');
        const response = await axios.get(`https://api.github.com/users/${this.state.value}`);
        this.setState({data:response,});
        this.setState({username:this.state.data.data.login,
        src:this.state.data.data.avatar_url,
        email:this.state.data.data.email,
        fullname:this.state.data.data.name});
     }
          
  render() {
    return (
      <div>
        <h1 className="Heading">Github User Details</h1>
        <form onSubmit={this.handleSubmit}>
          <label className="text-area">enter the user id
            <textarea   value={this.state.value} onChange={this.handleChange}/>
          </label>
          <input className="submit-button" type="submit" value="fetch details" />
        </form>
        <div className="display-box">
            <img className="photo" src={this.state.src} alt=''></img>
            <h2>{this.state.username}</h2>
            <h2>{this.state.fullname}</h2>
            <h2>{this.state.email}</h2>
         </div>
       
      </div>
    )
  }
}

export default App

