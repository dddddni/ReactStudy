import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

// @observer
// class Counter extends Component {
//   @observable number = 0;
  
//   @action
//   increase = () => {
//   	this.number++;
//   }
  
//   @action
//   decrease = () => {
//     this.number--;
//   }
  
//   render() {
//     return (
//       <div>
//         <h1>{this.number}</h1>
//         <button onClick={this.increase}>+1</button>
//         <button onClick={this.decrease}>-1</button>
//       </div>
//     )
//   }
// }

// 해당 컴포넌트를 props로 전달받아서 사용
@inject('counter')
@observer
class Counter extends Component {
  render() {
    const { counter } = this.props;
    return (
      <div>
        <h1>{counter.number}</h1>
        <button onClick={counter.increase}>+1</button>
        <button onClick={counter.decrease}>-1</button>
      </div>
    );
  }
}

export default Counter;