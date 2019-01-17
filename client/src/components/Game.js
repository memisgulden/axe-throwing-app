import React from "react";
import { Button } from 'react-bootstrap';


class Game extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="card">

          <Button className="Button" bsStyle="warning">7</Button>

          <Button className="Button" bsSize="large" bsStyle="primary">1
        <Button className="Button" bsStyle="success">3
        <Button className="Button" bsStyle="info">5
        </Button>
            </Button>
          </Button>

        </div>
      </div>
    );
  }
}

export default Game;
