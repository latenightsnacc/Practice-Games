import React from 'react';
import './Board.css';
import Square from '../Square/Square';

class Board extends React.Component{

    renderSquare(i) {
        return <Square />;
    }

    render() {
        const status = 'Next player: X';

        return (
            <div>
                {/* Display game status */}
                <div className="status"> {status} </div>

                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(0)}
                    {this.renderSquare(0)}
                </div>
            </div>
        );
    }
    
}

export default Board;