import React from 'react';
import './Square.css';

// Class Component
// class Square extends React.Component {

//     render(){
//         return (
//             <button className="square" onClick={this.props.onClick} >
//                 {this.props.value}
//             </button>
//         );
//     }
// }

// Function component
function Square(props) {
    return (
            <button className="square" onClick= {props.onClick} >
                {props.value}
            </button>
    );
}

export default Square;