import React from 'react';
import './Game.css';
import Board from '../Board/Board';

class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            history: [
                {
                    squares: Array(9).fill(null)
                }
            ],
            stepNumber: 0,
            xIsNext: true
           
        };
    }

    handleClick(i) {
        // const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const history = this.state.history;
        const current = history[history.length -1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        // Checks if the boolean value of the state. If xIsNext is true then 'X' displays in the square component
        // Else if xIsNext is false then 'O' displays in the square component
    
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            // Concatenates new entries on the board to the history array
            history: history.concat([{
                squares: squares,
            }]),
            // Updates who the next player is by negating the boolean value of xIsNext
            xIsNext: !this.state.xIsNext
        });
    }

    // Sets the step number in the state. If the stepNumber is 
    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        })

    }
    
    render(){
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        const  moves = history.map((step, move) => {
            const desc = move ? 'Go to move #' + move : 'Go to game start';
            return (
                <li key={move} className="game-moves" >
                    <button onClick={() => this.jumpTo(move)} > {desc} </button>
                </li>
            )
        })
        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return(
            <div className="game">
                <div className="game-board">
                    <Board
                    squares = {current.squares}
                    onClick= { i => this.handleClick(i)} />
                </div>
                <div className="game-info">
                    <div> {status} </div>
                    <ol> {moves} </ol>
                </div>
            </div>
        );
    }
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i <lines.length; i++){
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a]=== squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

export default Game;
