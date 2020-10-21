import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

class Board extends React.Component {
    render() {
        return <div>Board</div>;
    }
}

// function é apenas pra renderização

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board/>
                </div>

                <div className="game-info">
                    Informações do Game
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    // Componente
    <Game/>,
    // Em um elemento
    document.getElementById('root')
);