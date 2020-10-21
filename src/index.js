import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
    return <button className="square" onClick={props.onClick}>
        {props.move}
    </button>;
}

class Board extends React.Component {
    renderSquare(i) {
        return <Square value={this.props.squares[i]} onClick={() => this.props.onClick(i)}/>
    }

    render() {
        return <div>
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
        </div>;
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            squares: Array(9).fill(null),
            nextMove: "X"
        };

        console.log(this.state);
    }

    handleClick(i) {
        const squares = this.state.squares;
        const move = squares[i];

        if (move) {
            console.log('Square já utilizado');
            return;
        }

        console.log('handleClick - Game', i);

        squares[i] = 'X';

        this.setState(
            {
                squares: squares
            }
        )

        /*let move = "";
        let nextMove = "";
        
        if (this.state.nextMove == "X") {
            move = "X";
            nextMove = "O";
        } else {
            move = "O";
            nextMove = "X";
        }

        this.setState(
            {
                move: move,
                nextMove: nextMove
            }
        )*/
    }

    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board squares ={this.state.squares} onClick={(i) => this.handleClick(i)}/>
                </div>

                <div className="game-info">
                    Informações do Jogo
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    // Componente -> Elemento a ser renderizado
    <Game/>,
    // Em um elemento -> Container em que será renderizado
    document.getElementById('root')
);