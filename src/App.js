import React, { Component } from 'react';
import './App.css';
import GameBoard from './components/GameBoard'
import ColorPicker from './components/ColorPicker'
import GameTimer from './components/GameTimer'
import NewGameButton from './components/NewGameButton'

const colors = ['#7CCCE5', '#FDE47F', '#E04644', '#B576AD'];

class App extends Component {

  constructor(){
    // super must be called before accessing 'this'
    super()
    // state is an object that holds information
    // in its properties
    this.state={
      selColorIdx: 0,
      guesses: [this.getNewGuess(),],
      //to invoke a method in another method, it must be accessed via "this"...
      code: this.genCode(),
    }
  };

  getNewGuess(){
    return {
      code: [null, null, null, null], //for final build
      // code: [3, 2, 1, 0],
      score: { 
        perfect: 0, 
        almost: 0, 
      }, //for testing purposes
    }
  }
  genCode(){
    return new Array(4).fill().map(() => Math.floor(Math.random() * colors.length));
  }
  getWinTries() {
    // if winner, return num guesses, otherwise 0 (no winner)
    let lastGuess = this.state.guesses.length - 1;
    return this.state.guesses[lastGuess].score.perfect === 4 ? lastGuess + 1 : 0;
  }
  handleColorSelection = (colorIdx) => {
    this.setState({selColorIdx: colorIdx});
  }

  render() {
    let winTries = this.getWinTries();

    return (
      <div className="App">
        <button
          onClick={() => this.setState((state) => {
            return {
              selColorIdx: ++state.selColorIdx % 4
            };
          })}>
          Next Color
        </button>

        Selected color: {colors[this.state.selColorIdx]}

        <header className="App-header">React Mastermind</header>

        <GameBoard
          colors={colors}
          guesses={this.state.guesses}
        />

        <div className="sidebar">
          <ColorPicker
            colors={colors}
            selColorIdx={this.state.selColorIdx}
            handleColorSelection={this.handleColorSelection}
          />
          <GameTimer />
          <NewGameButton />
        </div>

        <footer>{(winTries ? `You Won in ${winTries} Guesses!` : 'Good Luck!')}</footer>

      </div>
    );
  }
}

export default App;










// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (


//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>



//   );
// }

// export default App;
