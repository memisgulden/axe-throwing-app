import React from "react";
import {
  Button, Navbar, Jumbotron, Row,
  Col, Popover, OverlayTrigger, Carousel
} from 'react-bootstrap';
import { Players } from "./Players";
import "./Game.css";



class Game extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.gameStarted = this.gameStarted.bind(this);


    this.state = {
      show: false,
      gameStarted: false,
      count: 0,
      doneAddingPlayers: false,

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

  handleClick1 = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleClick7 = () => {
    this.setState({ count: this.state.count + 7 });
  };

  handleClick3 = () => {
    this.setState({ count: this.state.count + 3 });
  };

  handleClick5 = () => {
    this.setState({ count: this.state.count + 5 });
  };


  render() {
    const popoverRight = (
      <Popover id="popover-positioned-right" title="Directions">
        Input each players name. Click on a name to delete.
      </Popover>
    );
    return (

      <div id="gamePage">

        <Navbar id="navBar" >
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
                <OverlayTrigger trigger="click" placement="right" overlay={popoverRight}>
                  <Button id="trigger">Help?</Button>
                </OverlayTrigger>
              </Row>

              <Row>
                <Col xs={5} md={5}>

                  <Jumbotron id="boardJumbo">
                    <Button className="Button" id="large" onClick={this.handleClick7} bsStyle="success">7</Button>
                    <Button className="Button" id="large2" onClick={this.handleClick7} bsStyle="success">7</Button>

                    <Button className="Button" id="small" onClick={this.handleClick1} bsSize="large" bsStyle="primary">1</Button>

                    <Button className="Button" id="medium" onClick={this.handleClick3} bsStyle="warning">3</Button>

                    <Button className="Button" id="medium2" onClick={this.handleClick5} bsStyle="danger">5</Button>


                  </Jumbotron>

                  <h1>Click Count: {this.state.count}</h1>

                </Col>

                <Col xs={7} md={7}>
                  <Jumbotron id="playerJumbo">
                    <Players />
                  </Jumbotron>
                </Col>
              </Row>


            </div>) : (
              <div>

                <Jumbotron id="welcomeJumbo">
                  <h2>Watch the video. Start the game. </h2>
                  <hr />
                  <iframe width="600" height="315" src="https://www.youtube.com/embed/Lki5gMgL2H0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  <Button bsSize="large" block onClick={this.gameStarted}>
                    Start New Game
                </Button>
                </Jumbotron>

                <Jumbotron>
                  <h2>Your Last Visit!</h2>
                  <Carousel>
                    <Carousel.Item id="car1">
                      <Carousel.Caption>
                        <h3>12.21.2018</h3>
                        <p>E. Boston St, Philadelphia PA</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item id="car2">
                      <Carousel.Caption>
                        <h3>12.21.2018</h3>
                        <p>E. Boston St, Philadelphia PA</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item id="car3">
                      <Carousel.Caption>
                        <h3>12.21.2018</h3>
                        <p>E. Boston St, Philadelphia PA</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item id="car4">
                      <Carousel.Caption>
                        <h3>12.21.2018</h3>
                        <p>E. Boston St, Philadelphia PA</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
                </Jumbotron>
              </div>
            )}



        </div>

        {/* TO DO: Make a footer */}


      </div>

    );
  }
}

export default Game;
