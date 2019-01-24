import React, { Component } from 'react';
import {
    Button, Table, Modal
} from 'react-bootstrap';

import "./Players.css";


class Players extends React.Component {
    constructor(props) {
        super(props);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    
        this.state = {
            players: [],
            doneAddingPlayers: false,
            show: false,
        }
    }

    addPlayer(event) {
        event.preventDefault();
        event.target.click()
        let currentPlayers = this.state.players;
        let textBox = event.target.previousElementSibling;

        if (textBox.value) {
            currentPlayers.push(textBox.value);
            textBox.value = '';

            this.setState({
                players: currentPlayers
            });
        }
    }

    removePlayer(event) {
        let currentPlayer = event.target.textContent;
        let updatedPlayers = this.state.players.filter((player) => {
            return currentPlayer !== player;
        });

        this.setState({
            players: updatedPlayers
        });

        !this.state.deleted && this.setState({
            deleted: true
        });
    }

    doneAddingPlayers = () => {
        this.setState({ doneAddingPlayers: true });
        console.log("done adding players");
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    render() {
        let cssPlayerItem = 'player-item';
        let cssCounter = 'more-three';
        let playerItems = this.state.players.map((player, i) => {
            return <li onClick={this.removePlayer.bind(this)}
                className={cssPlayerItem}
                key={cssPlayerItem + i}>{player}</li>;
        });
        let playersLength = this.state.players.length;

        if (playersLength < 3) {
            cssCounter = 'less-three';
        } else if (playersLength === 3) {
            cssCounter = 'equal-three';
        }

        return (

            <div className="container">


                <div className="players-list">

                    <p id="playerCount" className={cssCounter} >Player Count: {this.state.players.length}</p>


                    <div className="nav-add">
                        <input type="text" id="input-add" />
                        <Button id="new-player" onClick={this.addPlayer.bind(this)}>New Player</Button>
                        <Button onClick={this.doneAddingPlayers}>Done</Button>
                    </div>

                    <ul>
                        {playerItems}
                    </ul>
                </div>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Round 1</th>
                            <th>Round 2</th>
                            <th>Round 3</th>
                            <th>Round 4</th>
                            <th>Round 5</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Rose</td>
                            <td>5</td>
                            <td>7</td>
                            <td>0</td>
                            <td>4</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jim</td>
                            <td>3</td>
                            <td>10</td>
                            <td>15</td>
                            <td>20</td>
                            <td>21</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Matt</td>
                            <td>14</td>
                            <td>25</td>
                            <td>0</td>
                            <td>15</td>
                            <td>3</td>
                        </tr>
                    </tbody>
                </Table>
                <div>
                    <Button id="gameOver" onClick={this.handleShow}>Game Over</Button>
                </div>

            <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Game Over!</Modal.Title>
                </Modal.Header>
                <Modal.Body>

BLAHHH

                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
            </div>

        );
    }
}

export { Players };