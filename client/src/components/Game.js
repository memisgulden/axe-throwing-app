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

        <div className="container" id="welcome">
          <div className="jumbotron mt-5" className="d-flex align-content-center" id="jumbo">
            <h3>Welcome /USER/! </h3>
            <hr />
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Lki5gMgL2H0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div>
              <button className="btn" data-toggle="modal" data-target="#newGame">
                Start New Game</button>
            </div>
          </div>

          <div className="modal fade" id="newGame" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content" id="modalBox1">

                <div className="modal-body">
                  <form>
                    <div className="form-group row">
                      <label for="inputPlayer1" className="col-sm-3 col-form-label">Player 1:</label>
                      <div className="col-sm-9">
                        <input type="name" className="form-control" id="inputPlayer1" placeholder="" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label for="inputPlayer2" className="col-sm-3 col-form-label">Player 2:</label>
                      <div className="col-sm-9">
                        <input type="name" className="form-control" id="inputPlayer2" placeholder="" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label for="inputPlayer3" className="col-sm-3 col-form-label">Player 3:</label>
                      <div className="col-sm-9">
                        <input type="name" className="form-control" id="inputPlayer3" placeholder="" />
                      </div>
                    </div>

                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                      <button type="button" id="ready" data-dismiss="modal" className="btn btn-primary">Submit</button>
                    </div>
                  </form>



                </div>

              </div>
            </div>
          </div>

        </div>







      </div>

    );
  }
}

export default Game;
