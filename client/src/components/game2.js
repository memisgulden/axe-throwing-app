import React from "react";
import { Button, Navbar, Panel } from 'react-bootstrap';


class Game extends React.Component {
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

      </div>

    );
  }
}

export default Game;
