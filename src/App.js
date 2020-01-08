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
      guesses: [],
      //to invoke a method in another method, it must be accessed via "this"...
      code: this.genCode(),
    }
  };




  genCode(){
    return new Array(4).fill().map(() => Math.floor(Math.random() * colors.length));
  }





  render() {
    return (
      <div className="App">
        <button
        onClick={()=>
          this.setState({
            selColorIdx: ++this.state.selColorIdx % 4
          })
        }>
          Next Color
        </button>



        Selected color: {colors[this.state.selColorIdx]}




        <header className="App-header">React Mastermind</header>
        <GameBoard />
        <div className="sidebar">
          <ColorPicker colors={colors}/>
          <GameTimer />
          <NewGameButton />
        </div>
        <footer className="component footer">Footer</footer>

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
