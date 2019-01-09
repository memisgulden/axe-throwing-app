import React, { Component } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    loggedIn: false
  }

  handleLogIn = (event) => {
    event.preventDefault();
    console.log("log in clicked");
    axios.post("/login", {
      username: 'admin',
      password: 'password'
    })
      .then((response) => {
        console.log(response)
        this.setState({loggedIn: true, username: response.data.username})
      })
      .catch(function(error){
        console.log(error);
      })
    // this.setState({loggedIn: true})
  }

  componentDidMount () {
    console.log("componentDidMount lifecycle method ran!");

    // axios.get("allusers")
    //   .then(response => {console.log(response)});

    //check session data to see if user should be logged in
    axios.get("/user_data")
    .then (response => {
      console.log(response); 
      if(response.data.loggedIn) {
        this.setState({loggedIn: true, username: response.data.username})
      }else {
        console.log("no logged in user stored in session")
      }
      
    })
  }

  render() {
    let banner = this.state.loggedIn ? `Woah ${this.state.username} is loggin in ` : "unauthorized user";
    return (
      <div className="App">
        <h1>{banner}</h1>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <h3>hello, Axe Throwing App</h3>
        </div>
        <p className="App-intro">
          {!this.state.loggedIn ? 
            (<button onClick={this.handleLogIn}>Log in to app</button>) : ""}
        </p>
      </div>
    );
  }
}

export default App;
