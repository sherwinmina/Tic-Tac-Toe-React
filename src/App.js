import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      turn: 'X',
      gameEnded: false,
      board: Array(9).fill(''),
      totalMoves: 0,
      winner: undefined
    }
  }
  
  clicked(event) {
    if(this.state.board[event.target.dataset.square] == '') {
      this.state.board[event.target.dataset.square] = this.state.turn;
      event.target.innerText = this.state.turn;
      this.setState({
        turn: this.state.turn == 'X' ? 'O' : 'X',
        board: this.state.board,
        totalMoves: this.state.totalMoves++
      });

      var result = this.checkWinner();

      if( result == 'X') {
        this.setState({
          gameEnded: true,
          winner: 'X',
          winnerLine: 'X won the game'
        });
      } else if ( result == 'O') {
        this.setState({
          gameEnded: true,
          winner: 'O',
          winnerLine: 'O won the game'
        });
      } else if (result == 'draw') {
        this.setState({
          gameEnded: true,
          winner: 'draw',
          winnerLine: 'The match is a draw'
        })
      }
      console.log(this.state.gameEnded);
    }
  }

  checkWinner() {
    // var moves = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    var moves = [[0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6], [0, 1, 2]];
    var { board } = this.state;
    for(let i=0;i<moves.length;i++) {
      if(board[moves[i][0]] == board[moves[i][1]] && board[moves[i][1]] == board[moves[i][2]])
          return board[moves[i][0]];
    }

    if (this.state.totalMoves == 9) {
      return 'draw';
    }

  }

  render() {
    return (
      <div className="game">
      <div className="status">{this.state.winnerLine}</div>
        <div className="head">
          <h1>Tic-Tac-Toe</h1>
        </div>
        <div className="board" onClick={(e) => this.clicked(e)}>
          <div className="square" data-square="0"></div>
          <div className="square" data-square="1"></div>
          <div className="square" data-square="2"></div>
          <div className="square" data-square="3"></div>
          <div className="square" data-square="4"></div>
          <div className="square" data-square="5"></div>
          <div className="square" data-square="6"></div>
          <div className="square" data-square="7"></div>
          <div className="square" data-square="8"></div>
        </div>
      </div>
    );
  }
}

export default App;
