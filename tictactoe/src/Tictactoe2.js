import React from 'react';
import Board from './Board';
import CalculateWinner from './CalculateWinner';

class Game extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            history : [{
                squares : Array(9).fill(null),
                position : -1,
            }],
            stepNumber : 0,
            xIsNext : true,
            OrderAsc : true,
        }
    }

    handleClick(i){
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();

        if(CalculateWinner(squares) || squares[i]){
            return;
        }

        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history : history.concat([{
                squares : squares,
                position : i,
            }]),
            stepNumber : history.length,
            xIsNext : !this.state.xIsNext
        })
    }

    jumpTo(step){
        this.setState({
            stepNumber : step,
            xIsNext : (step % 2) === 0,
        })
    }

    handleOrderAscChange = () => {
        this.setState({
            OrderAsc : !this.state.OrderAsc,
        })
    }

    render(){
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const win = CalculateWinner(current.squares);  
        let winner;
        let pos = {
            pos1 : '',
            pos2 : '',
            pos3 : '',
        }
        
        // 승자가 있는 경우에 값 가져옴.
        if(win){
            win.map((a,b) => {
                 if((win[b] === 'X') || (win[b] === 'O')){
                     winner = win[b]
                 } else if(pos.pos1 === ''){
                    pos.pos1 = win[b]
                 } else if (pos.pos2 === '' ){
                    pos.pos2 = win[b]
                 } else if(pos.pos3 === '' ){
                    pos.pos3 = win[b]
                 }
            })
        }

        const moves = history.map((step, move) => {                   
        // const desc = move ? 'Go to move #' + move : 'Go to game start';
        // 1. 이동 기록 목록에서 특정 형식(행, 열)으로 각 이동의 위치를 표시                
        // 현재 위치
        const position = history[move].position;
        // 열 값(세로)
        const row = parseInt(position % 3);
        // 행 값(가로)
        const column = parseInt(position / 3);
        const desc = move ? 'Go to move # ' + move + '(' +(column + ',' + row) + ')' : 'Go to game start';

        return(
            <li key = {move}>
            {move === this.state.stepNumber ? 
                <button onClick = {() => this.jumpTo(move)}>
                    <b>{desc}</b>
                </button> : 
                <button onClick = {() => this.jumpTo(move)}>
                    {desc}
                </button>}
            </li>
            )
        })
    
        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            // 6. 승자가 없는 경우 무승부라는 메시지를 표시해주세요
            if(this.state.stepNumber >= 9){
                status = 'Draw!';    
            }
            else{
                status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
            }
        }

        return (
        <div className="game">
            <div className="game-board">
            <Board 
                squares = {current.squares}
                onClick = {(i) => this.handleClick(i)}
                winpos = {pos}
            />
            </div>
            <div className="game-info">
                <div>{status}</div>
                {/* 4. 오름차순이나 내림차순으로 이동을 정렬하도록 토글 버튼을 추가해주세요. */}
                {this.state.OrderAsc ? <button onClick = {this.handleOrderAscChange}>오름 차순</button> : <button onClick = {this.handleOrderAscChange}>내림 차순</button>}
                {this.state.OrderAsc ? <ol>{moves}</ol> : <ol>{moves.reverse()}</ol>}
            </div>
        </div>
        );
    }
}

export default Game;