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
      .then(function(response){
        console.log(response)
      })
      .catch(function(error){
        console.log(error);
      })
    // this.setState({loggedIn: true})
  }

  componentDidMount () {
    console.log("componentDidMount lifecycle method ran!");

    axios.get("allusers")
      .then(response => {console.log(response)});
  }

  render() {
    let banner = this.state.loggedIn ? "Woah youre loggin in " : "unauthorized user";
    return (
      <div className="App">
        <h1>{banner}</h1>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <h3>hello, Axe Throwing App</h3>
        </div>
        <p className="App-intro">
          <button onClick={this.handleLogIn}>Log in to app</button>
        </p>
      </div>
    );
  }
}

export default App;
