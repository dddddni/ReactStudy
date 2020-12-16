import React, { Component } from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

@observer
class Counter extends Component {
  @observable number = 0;
  
  @action
  increase = () => {
  	this.number++;
  }
  
  @action
  decrease = () => {
    this.number--;
  }
  
  render() {
    return (
      <div>
        <h1>{this.number}</h1>
        <button onClick={this.increase}>+1</button>
        <button onClick={this.decrease}>-1</button>
      </div>
    )
  }
}

// decorate(Counter, {
//   number: observable,
//   increase: action,
//   decrease: action
// })
// 더 이상 사용되지 않음

// export default observer(Counter);  
// observer가 class명 상단으로 올라감

export default Counter;