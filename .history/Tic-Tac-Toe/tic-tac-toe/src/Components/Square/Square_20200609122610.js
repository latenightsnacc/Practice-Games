import React from 'react';
import './Square.css';

class Square extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.playX = this.playX.bind(this);

    }
    playX(e){
        this.setState({value: 'X'})
    }
    render(){
        return (
            <button className="square" onClick={this.playX} >
                {this.state.value}
            </button>
        );
    }
}

export default Square;