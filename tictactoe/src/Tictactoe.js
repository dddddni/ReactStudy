import React from 'react';
import './style.css';

// 네모칸 버튼
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

// 네모칸으로 구성된 보드판
class Board extends React.Component {  
  renderSquare(i) {
    return <Square value = {this.props.squares[i]} onClick = {() => this.props.onClick(i)}/>;
  }

  render() {
    return (
      <div>
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
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      // history라는 배열안에 squares라는 배열이 들어가있음.
      // history[0]에 squares 배열
      // history[1]에 squares 배열
      // history : 단계를 의미
      history : [{
        // 단계에서 이루어진 배열의 집합(1번칸에 x, 2번칸에 O의 모음)
        squares : Array(9).fill(null),
        }],
      stepNumber : 0,
      xIsNext : true
      };
    }

  handleClick(i){
    // slice() 기존 배열을 수정하지 않고 배열의 복사본을 만들어서 수정
    // history를 처음부터 stepNumber 까지 복사한다.
    const history  = this.state.history.slice(0, this.state.stepNumber + 1);
    // 현재 history 배열을 가져온다.
    const current = history[history.length - 1];
    // 현재 history 배열에 있는 square를 복사한다. 
    const squares = current.squares.slice();
    // 복사한 square를 가지고 승자를 계산한다.
    if (calculateWinner(squares) || squares[i]){
        return;
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      // 현재 history배열에 history를 추가한다.
      history : history.concat([{
        squares : squares
      }]),
      stepNumber : history.length,
      xIsNext : !this.state.xIsNext,
    })
  }

  jumpTo(step){
    this.setState({
      stepNumber : step,
      xIsNext : (step % 2) === 0,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ? 'Go to move #' + move : 'Go to game start';
      return(
        <li key = {move}>
          <button onClick = {() => this.jumpTo(move)}>{desc}</button>
        </li>
      )
    })
    
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board 
            squares = {current.squares}
            onClick = {(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares){
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++){
    const [a, b, c] =  lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]){
      return squares[a];
    }
  }
  return null;
}

export default Game;