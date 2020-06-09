import React from 'react';
import './Square.css';

class Square extends React.Component {
    render(){
        return (
            <button className="square" onClick={() => alert('Button clicked')}>
                {this.props.value}
            </button>
        );
    }
}

export default Square;