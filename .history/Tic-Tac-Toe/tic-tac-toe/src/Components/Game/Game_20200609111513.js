import React from 'react';
import './Game.css';
import Board from '../Board/Board';

class Game extends React.Component {
    render(){
        return(
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
            </div>
        );
    }
}