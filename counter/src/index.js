import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import CounterStore  from './stores/counter'
import reportWebVitals from './reportWebVitals';
import { Provider } from 'mobx-react';

// ReactDOM.render(
//   <Counter/>,
//   document.getElementById('root')
// );

const counter = new CounterStore(); // 스토어 인스턴스 생성

// Provider props에 넣어줌

ReactDOM.render(
  <Provider counter = {counter}> 
    <App/>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
