import React, { Component } from 'react';

class Players extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            players: [],
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
            <div className="players-list">
                <div className="nav-add">
                    <input type="text" id="input-add" />
                    <button id="new-player"
                        onClick={this.addPlayer.bind(this)}>New Player</button>
                </div>
                <p className={cssCounter} >Player Count: {this.state.players.length}</p>
                <ul>
                    {playerItems}
                </ul>
            </div>
        );
    }
}

export { Players };