import './App.css';
import React, { Component } from 'react';
import BoardForm from './App5_BoardForm';
import BoardItem from './App5_BoardItem';

class App extends Component{
  constructor(props){
    super(props);
    this.child = React.createRef();
  }

  state = {
    maxNO : 3,
    boards : [
      {
        brdno : 1,
        brdwriter : 'Lee SunSin',
        brdtitle : 'If you intend to live then you die',
        brddate : new Date()
      },
      {
        brdno : 2,
        brdwriter : 'So SiNo',
        brdtitle : 'Founder for two countries',
        brddate : new Date()
      }
    ],
  }

 handleSaveData = (data) => {
    let boards = this.state.boards;
    if (data.brdno === null || data.brdno === '' || data.brdno === 'undefined'){
      this.setState({
        maxNO : this.state.maxNO + 1 ,
        boards : boards.concat({brdno : this.state.maxNO, brddate : new Date(), brdwriter : data.brdwriter, brdtitle : data.brdtitle})
      })
    } else {
      this.setState({
        boards : boards.map(row => data.brdno === row.brdno ? {...data} : row)
      })
    }
 }

  handleRemove = (brdno) => {
    this.setState({
      boards : this.state.boards.filter(row => row.brdno !== brdno)
    })
  }

  handleSelectRow = (row) => {
    this.child.current.handleSelectRow(row)
  }

  render(){
    const {boards, selectBoard} = this.state;
  
    return(
      <div>
        <BoardForm onSaveDate = {this.handleSaveData} ref = {this.child}/>
          <table border = "1">
            <tbody>
              <tr align = "center">
                <td width = "50">No.</td>
                <td width = "300">Title</td>
                <td width = "100">Name</td>
                <td width = "100">Date</td>
                <td width = "100">삭제</td>
              </tr>
              { 
                boards.map(row => 
                  (<BoardItem key={row.brdno} row={row} onRemove = {this.handleRemove} onSelectRow = {this.handleSelectRow}/>) 
                ) 
              }
            </tbody>
        </table>
      </div>
    )
  }
}


export default App;
