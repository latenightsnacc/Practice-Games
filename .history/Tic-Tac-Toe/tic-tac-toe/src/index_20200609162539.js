import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

// Square Component
function Square(props) {
  return (
      <button className="square" onClick={props.onClick} >
          {props.value}
      </button>
  );
}

// Board Component
class Board extends React.Component{

  // Renders the square on the board
  renderSquare(i) {
      return (
          // The square component has a prop value and an on click event 
          // When the user clicks on the square it displays either an 'X' or 'O'
          <Square  
          value = {this.props.squares[i]} 
          onClick = { () => this.props.onClick(i)}
          />
      );
  }
  
  // Renders the board for the game and displays the square component in 3 rows
  render() {
      return (
          <div>
              <div className="board-row">
                  {this.renderSquare(0)}
                  {this.renderSquare(1)}
                  {this.renderSquare(2)}
              </div>
              <div className="board-row">
                  {this.renderSquare(3)}
                  {this.renderSquare(4)}
                  {this.renderSquare(5)}
              </div>
              <div className="board-row">
                  {this.renderSquare(6)}
                  {this.renderSquare(7)}
                  {this.renderSquare(8)}
              </div>
          </div>
      );
  }
  
}

// Game Component 

