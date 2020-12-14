import React from 'react';
import Square from './Square'

class Board extends React.Component{
    renderSquare(i){
        return <Square value = {this.props.squares[i]} onClick = {() => this.props.onClick(i)} winpos = {this.props.winpos} iPos = {i}/> 
    }

    render(){
        let board  = [];
        for(let i = 0; i<3; i++){   
            let row = [];
            for(let j = 0; j<3; j++){
                row.push(this.renderSquare(((i * 3) + j )));
            }
            board.push(<div className="board-row">{row}</div>);
        }
        return(
            <div>
                {board}
            </div>
        )
    }
}

export default Board;