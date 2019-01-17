import React from "react";
import axios from "axios";
import ModalContainer from "./Modal";
import ModalContainer2 from "./Modal2";


class Main extends React.Component {
    state = {
        loggedIn: false,
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
        return (
            <div className="container">
            <div className="jumbotron mt-5">
  
              <h1 className="text-center"><span className="glyphicon glyphicon-screenshot"></span>AXE.app</h1>
              <h3 className="text-center">ready. aim. throw.</h3>
              <hr />
  
              < ModalContainer />
              < ModalContainer2 />
            </div>
          </div>

        );
    }
}

export default Main;
