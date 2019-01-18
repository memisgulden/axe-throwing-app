import React from "react";
import {
  Button, Navbar, Panel, Jumbotron, Modal,
  FormControl, ControlLabel, Form, FormGroup, InputGroup
} from 'react-bootstrap';


class Game extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.gameStarted = this.gameStarted.bind(this);

    this.state = {
      show: false,
      gameStarted: false,
      name: "",
      players: [{name: ""}]
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


  render() {
    return (

      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#main">AXE.app</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Navbar.Text pullRight>ready. aim. throw.</Navbar.Text>
        </Navbar>

        <div className="container">

          {this.state.gameStarted ? (

          <div>

            <Panel>
              <h5>directions on how to play. blah blah blah. blah blah blah.</h5>
            </Panel>

            <Panel>
              <h3>PLAYERS:</h3>

              <ul>
                <li id="players"></li>
              </ul>
            </Panel>

            <Panel>
              <h3>Rose vs Rose</h3>
            </Panel>


            <Button className="Button" bsStyle="warning">7</Button>

            <Button className="Button" bsSize="large" bsStyle="primary">1
            <Button className="Button" bsStyle="success">3
            <Button className="Button" bsStyle="info">5
            </Button>
            </Button>
            </Button>

          </div>) : (
              <Jumbotron>
                <h3>Welcome /USER/! </h3>
                <hr />
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Lki5gMgL2H0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <Button bsSize="large" block onClick={this.handleShow}>
                  Start New Game
            </Button>
              </Jumbotron>

            )}

          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Welcome!</Modal.Title>
            </Modal.Header>
            <Modal.Body>

              <Form>
                <FormGroup >
                  <ControlLabel>Player #1</ControlLabel>{' '}
                  <FormControl type="text" placeholder="Jane" />
                </FormGroup>{' '}

                <FormGroup >
                  <ControlLabel>Player #2</ControlLabel>{' '}
                  <FormControl type="text" placeholder="John" />
                </FormGroup>{' '}

                <FormGroup >
                  <ControlLabel>Player #3</ControlLabel>{' '}
                  <FormControl type="text" placeholder="Jim" />
                </FormGroup>{' '}

              </Form>

            </Modal.Body>
            <Modal.Footer>
              <Button bsStyle="success" onClick={this.gameStarted}>Submit</Button>
              <Button onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>









        </div>
      </div>

    );
  }
}

export default Game;
