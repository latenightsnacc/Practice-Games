import React from 'react';
import './Board.css';
import Square from '../Square/Square';

class Board extends React.Component{
    renderSquare(i) {
        return <Square />;
    }
    
}

export default Board;