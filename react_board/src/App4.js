import './App.css';
import React, { Component } from 'react';

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
    ]
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
    const {boards} = this.state;
  
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

class BoardForm extends Component{
  state = {
    brdwriter : '',
    brdtitle : ''
  }

  handleSelectRow = (row) => {
    this.setState(row);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSaveDate(this.state);
    this.setState({
      brdno : '',
      brdwriter : '',
      brdtitle : ''
    });
  }

  render(){
    return(
      <form onSubmit = {this.handleSubmit}>
        <input placeholder = "title" name = "brdtitle" onChange = {this.handleChange} value = {this.state.brdtitle}/>
        <input placeholder = "name" name = "brdwriter" onChange = {this.handleChange} value = {this.state.brdwriter}/>
        <button type = "submit">Save</button>
      </form>
    )
  }
}

class BoardItem extends React.Component {

  handleRemove = () => {
    const {row, onRemove} = this.props;
    onRemove(row.brdno);
  }

  handleSelectRow = () => {
    const { row, onSelectRow } = this.props;
    onSelectRow(row);
  }

  render() { 
    return( 
      <tr> 
        <td>{this.props.row.brdno}</td>
        <td><a onClick = {this.handleSelectRow}>{this.props.row.brdtitle}</a></td>
        <td>{this.props.row.brdwriter}</td>
        <td>{this.props.row.brddate.toLocaleDateString('ko-KR')}</td>
        <td><button onClick = {this.handleRemove}>X</button></td>
      </tr> ); 
   } 
 }

export default App;
