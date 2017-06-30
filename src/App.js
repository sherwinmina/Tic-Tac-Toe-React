import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      turn: 'X',
      gameEnded: false
    }
  }
  
  clicked(event) {
    event.target.innerText = this.state.turn;
    this.setState({
      turn: this.state.turn == 'X' ? 'O' : 'X'
    });
  }

  render() {
    return (
      <div className="game">
        <div className="head">
          <h1>Tic-Tac-Toe</h1>
        </div>
        <div className="board" onClick={(e) => this.clicked(e)}>
          <div className="square">1</div>
          <div className="square">2</div>
          <div className="square">3</div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
        </div>
      </div>
    );
  }
}

export default App;
