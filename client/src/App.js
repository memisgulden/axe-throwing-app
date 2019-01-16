import React, { Component } from "react";
import axios from "axios";
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
        this.setState({ loggedIn: true, username: response.data.username })
      })
      .catch(function (error) {
        console.log(error);
      })
    // this.setState({loggedIn: true})
  }

  componentDidMount() {
    console.log("componentDidMount lifecycle method ran!");

    // axios.get("allusers")
    //   .then(response => {console.log(response)});

    //check session data to see if user should be logged in
    axios.get("/user_data")
      .then(response => {
        console.log(response);
        if (response.data.loggedIn) {
          this.setState({ loggedIn: true, username: response.data.username })
        } else {
          console.log("no logged in user stored in session")
        }

      })
  }

  render() {
    let banner = this.state.loggedIn ? `Woah ${this.state.username} is loggin in ` : "unauthorized user";
    return (      
      <div className="App">
        <h1>{banner}</h1>
        <p className="App-intro">
          {!this.state.loggedIn ?
            (<button onClick={this.handleLogIn}>Log in to app</button>) : ""}
        </p>

        <div className="container">
          <div className="jumbotron mt-5" id="homePage">
            <h1 className="text-center"><span className="glyphicon glyphicon-screenshot"></span>AXE.app</h1>
            <h3 className="text-center">ready. aim. throw.</h3>
            <hr />
            <div className="d-flex justify-content-center">

              <div className="btn-group btn-group-toggle" data-toggle="buttons">
                <button type="button" className="btn" id="btn1" data-toggle="modal" data-target="#exampleModal" onClick={this.handleShow}>Create New User</button>
                <button type="button" className="btn " data-toggle="modal" data-target="#exampleModal2" data-whatever="@fat">Previous
          User</button>
              </div>

              <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog" role="document">


                  <div className="modal-body">
                    <form>
                      <div className="form-row">
                        <div className="col">
                          <label htmlFor="inputName">First Name</label>
                          <input type="text" className="form-control" placeholder="First name" />
                        </div>
                        <div className="col">
                          <label htmlFor="inputLastName">Last Name</label>
                          <input type="text" className="form-control" placeholder="Last name" />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <label htmlFor="inputEmail4">Email</label>
                          <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor="inputPassword4">Password</label>
                          <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="inputAddress">Address</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="inputAddress2">Address 2</label>
                        <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <label htmlFor="inputCity">City</label>
                          <input type="text" className="form-control" id="inputCity" />
                        </div>
                        <div className="form-group col-md-4">
                          <label htmlFor="inputState">State</label>
                          <select id="inputState" className="form-control">
                            <option value>Choose...</option>
                            <option>...</option>
                          </select>
                        </div>
                        <div className="form-group col-md-2">
                          <label htmlFor="inputZip">Zip</label>
                          <input type="text" className="form-control" id="inputZip" />
                        </div>
                      </div>

                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Submit</button>
                      </div>
                    </form>
                  </div>

                </div>
              </div>
            </div>

            <div className="modal fade" id="exampleModal2" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
              aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="modal-body">
                    <form>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail2">Email Address</label>
                        <input type="email" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp"
                          placeholder="Enter Email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword2">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Password" />
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Submit</button>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>




    );
    
  }
}

export default App;
