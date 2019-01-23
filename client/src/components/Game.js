import React from "react";
import {
  Button, Navbar, Jumbotron, Row,
  Col,
} from 'react-bootstrap';
import { Players } from "./Players";
import "./Game.css";



class Game extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.gameStarted = this.gameStarted.bind(this);
    this.alert = this.alert.bind(this);


    this.state = {
      show: false,
      gameStarted: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  gameStarted() {
    this.setState({ gameStarted: true });
    this.setState({ show: false });
  }

  alert() {
    console.log("buttons clicked 1");
  }




  render() {
    return (

      <div id="gamePage">

          <Navbar  id="navBar" >
            <Navbar.Header >
              <Navbar.Brand>
                <a href="#main">AXE.app</a>
              </Navbar.Brand>
            </Navbar.Header>
            <Navbar.Text pullRight>ready. aim. throw.</Navbar.Text>
          </Navbar>


          <div className="container">

          {this.state.gameStarted ? (

            <div>
              <Row>
                <Jumbotron id="gameJumbo">
                  <h5>Input each player. Tap a players name to remove.</h5>
                </Jumbotron>
              </Row>,

            <Row>
                <Col xs={12} md={8}>
                  <Button className="Button" bsSize="xsmall" bsStyle="warning">7</Button>

                  <Button className="Button" onClick={this.alert} bsSize="large" bsStyle="primary">1
                  <Button className="Button" bsStyle="success">3
                  <Button className="Button" bsStyle="info">5
                  </Button>
                    </Button>
                  </Button>
                </Col>

                <Col xs={6} md={4}>
                  <Jumbotron>
                    <Players />
                  </Jumbotron>
                </Col>
              </Row>



            </div>) : (
              <Jumbotron id="welcomeJumbo">
                <h2>Watch the video. Start the game. </h2>
                <hr />
                <iframe width="600" height="315" src="https://www.youtube.com/embed/Lki5gMgL2H0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <Button bsSize="large" block onClick={this.gameStarted}>
                  Start New Game
                </Button>
              </Jumbotron>

            )}

        </div>
      </div>

    );
  }
}

export default Game;
