import React, { Component } from 'react';
import './App.css';

// class App extends Component {

//   constructor() {
//     super();
//     this.state = {
//       turn: 'X',
//       gameEnded: false,
//       board: ['', '', '', '', '', '', '', '', ''],
//       totalMoves: 0,
//       winner: null
//     }
//   }
  
//   clicked(event) {
//     if(this.state.board[event.target.dataset.square] == '') {
//       this.state.board[event.target.dataset.square] = this.state.turn;
//       event.target.innerText = this.state.turn;
//       this.setState({
//         turn: this.state.turn == 'X' ? 'O' : 'X',
//         board: this.state.board,
//         totalMoves: this.state.totalMoves++
//       });

//       var result = this.checkWinner();

//       if( result == 'X') {
//         this.setState({
//           gameEnded: true,
//           winner: 'X',
//           winnerLine: 'X won the game'
//         });
//       } else if ( result == 'O') {
//         this.setState({
//           gameEnded: true,
//           winner: 'O',
//           winnerLine: 'O won the game'
//         });
//       } else if (result == 'draw') {
//         this.setState({
//           gameEnded: true,
//           winner: 'draw',
//           winnerLine: 'The match is a draw'
//         })
//       }
//     }
//   }

//   checkWinner() {
//     var moves = [[0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6], [0, 1, 2]];
//     var { board } = this.state;
//     for(let i=0;i<moves.length;i++) {
//       if(board[moves[i][0]] == board[moves[i][1]] && board[moves[i][1]] == board[moves[i][2]])
//           return board[moves[i][0]];
//     }

//     if (this.state.totalMoves == 9) {
//       return 'draw';
//     }

//   }

//   reset(event) {
//     //  if(this.state.board[event.target.dataset.square] == '') {
//     // this.state.board[dataset.square] == '';
    
//     this.setState({
//       board: ['', '', '', '', '', '', '', '', '']
//     })
//     console.log(this.state.board)

//   }

//   render() {
//     console.log(this.state.board)
// // console.log(this.state.board)
//     const {board} = this.state;
//     return (
//       <div className="game">
//       <div className="status">{this.state.winnerLine}</div>
//         <div className="head">
//           <h1>Tic-Tac-Toe</h1>
//         </div>
//         <div className="board">
//           <div className="square" onClick={() => this.setState({board: [1]})}>{board}</div>
//           <div className="square" >{board}</div>
//           <div className="square" ></div>
//           <div className="square" ></div>
//           <div className="square" ></div>
//           <div className="square" ></div>
//           <div className="square" ></div>
//           <div className="square" ></div>
//           <div className="square" ></div>
//         </div>
//           {this.state.board}
//         <div>Your Turn: {this.state.turn}</div>
//         <button onClick={() => this.reset()}> Reset </button>
//       </div>
//     );
//   }

// //   render() {
// //     console.log(this.state.board.square)
// // // console.log(this.state.board)
// //     return (
// //       <div className="game">
// //       <div className="status">{this.state.winnerLine}</div>
// //         <div className="head">
// //           <h1>Tic-Tac-Toe</h1>
// //         </div>
// //         <div className="board" onClick={(e) => this.clicked(e)}>
// //           <div className="square" data-square="0"></div>
// //           <div className="square" data-square="1"></div>
// //           <div className="square" data-square="2"></div>
// //           <div className="square" data-square="3"></div>
// //           <div className="square" data-square="4"></div>
// //           <div className="square" data-square="5"></div>
// //           <div className="square" data-square="6"></div>
// //           <div className="square" data-square="7"></div>
// //           <div className="square" data-square="8"></div>
// //         </div>
// //           {this.state.board}
// //         <div>Your Turn: {this.state.turn}</div>
// //         <button onClick={() => this.reset()}> Reset </button>
// //       </div>
// //     );
// //   }
// }

// export default App;



class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      PLAYER_ONE_SYMBOL: "X",
      PLAYER_TWO_SYMBOL: "O",
      currentTurn: "X",
      board: [
        "", "", "", "", "", "", "", "", ""
      ],
      winner: null,
    }
  }

  handleClick(index) {
    if(this.state.board[index] === "" && !this.state.winner) {
      this.state.board[index] = this.state.currentTurn
      this.setState({
        board: this.state.board,
        currentTurn: this.state.currentTurn === this.state.PLAYER_ONE_SYMBOL ? this.state.PLAYER_TWO_SYMBOL : this.state.PLAYER_ONE_SYMBOL,
        winner: this.checkForWinner(),
      })
    }
  }

  checkForWinner() {
    var currentTurn = this.state.currentTurn
    var symbols = this.state.board
    var winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
    return winningCombos.find(function(combo) {
      if(symbols[combo[0]] !== "" && symbols[combo[1]] !== ""  && symbols[combo[2]] !== ""  && symbols[combo[0]] === symbols[combo[1]] && symbols[combo[1]] === symbols[combo[2]]) {
        return currentTurn
      } else {
        return false
      }
    })
  }

  reset() {
    this.setState({
      PLAYER_ONE_SYMBOL: "X",
      PLAYER_TWO_SYMBOL: "O",
      currentTurn: "X",
      board: [
        "", "", "", "", "", "", "", "", ""
      ],
      winner: null,
    })
  }

  render() {
    console.log(this.state.board)
    return (
      <div className="game">
        <div><h1>TIC-TAC-TOE</h1></div>
        {this.state.winner ? <h1>{`The winner is ${this.state.winner}`}</h1> : null}
        <div className="board">
        {this.state.board.map((cell, index) => {
          return <div onClick={() => this.handleClick(index)} className="square">{cell}</div>;
        })}
        </div>
        <h5>Current Turn: {this.state.currentTurn}</h5>
        <button className="button" onClick={() => this.reset()}>reset</button>
      </div>
      
    )
  }
}

export default App;