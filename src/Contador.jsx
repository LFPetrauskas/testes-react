import React from 'react';

export default class Contador extends React.Component {
    

    adiciona = () => {
        this.props.numero++;
    }
    subtrai = () => {
        this.props.numero--;
    }

    render() {
        return (
            <div>
                <div>Número: {this.props.numero}</div>
                <button onClick={this.adiciona}>+</button> <button onClick={this.subtrai}>-</button>
            </div>
        )
    }
}