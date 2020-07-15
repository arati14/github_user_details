// import React, { Component } from 'react';
// import './App.css';
// import axios from 'axios';

//  class App extends Component {
//    constructor(props) {
//      super(props)

//      this.state = {
//         value: '',
//         data:'',
//         username:'',
//         src:'',
//         email:'',
//         fullname:''
//      }
//      this.handleChange = this.handleChange.bind(this);
//      this.handleSubmit = this.handleSubmit.bind(this);
//    }

//    handleChange(event)
//     {
//       this.setState({value: event.target.value});
//     }
//     async handleSubmit(event)
//       {
//         event.preventDefault();
//         // const axios = require('axios');
//         const response = await axios.get(`https://api.github.com/users/${this.state.value}`);
//         this.setState({data:response,});
//         this.setState({username:this.state.data.data.login,
//         src:this.state.data.data.avatar_url,
//         email:this.state.data.data.email,
//         fullname:this.state.data.data.name});
//      }

//   render() {
//     return (
//       <div>
//         <h1 className="Heading">Github User Details</h1>
//         <form onSubmit={this.handleSubmit}>
//           <label className="label">enter the user id:</label>
//           <textarea className="text-area"  value={this.state.value} onChange={this.handleChange}/>
//           <input className="submit-button" type="submit" value="fetch details" />
//         </form>
//         <div className="display-box">
//             <img className="photo" src={this.state.src} alt=''></img>
//             <h3>{this.state.username}</h3>
//             <h3>{this.state.fullname}</h3>
//             <h3>{this.state.email}</h3>
//          </div>

//       </div>
//     )
//   }
// }

// export default App
import React, { Component } from "react";
import Details from "./components/Details";
import { Provider } from "react-redux";
import store from "./redux/store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
    <Details />
        </div>
      </Provider>
    );
  }
}

export default App;
