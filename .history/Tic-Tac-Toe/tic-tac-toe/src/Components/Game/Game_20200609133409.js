import React from 'react';
import './Game.css';
import Board from '../Board/Board';

class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
            history: []
        };
    }

    handleClick(i) {
        const history = this.state.history;
        const current = history[history.length -1];
        const squares = this.state.squares.slice();
        if (this.calculateWinner(current.squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares,
            }]),
            xIsNext: !this.state.xIsNext
        });
    }

    render(){
        const history = this.state.history;
        const current = history[history.length -1];
        const winner = this.calculateWinner(current.squares);
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
                    onClick {(i) => this.handleClick(i)} />
                </div>
                <div className="game-info">
                    <div> {status} </div>
                    {/* <ol> </ol> */}
                </div>
            </div>
        );
    }
}

export default Game;