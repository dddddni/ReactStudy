import React, { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);

    this.child = React.createRef();
  }

  state = {
    newId : 2,
    list : [
      {
        id : 1,
        name : '김서현',
        phone : '010-8648-7577'
      }
    ]
  }

  // handleSave = (data) => {
  //   let newId = this.state.list.length + 1
  //   this.setState({
  //    list : this.state.list.concat({id : newId, ...data})
  //   })
  // }

  handleSaveDate = (data) => {
    let list = this.state.list;
    if(data.id === null || data.id === '' || data.id === 'undefined'){
      this.setState({
        newId : this.state.newId + 1,
        list : list.concat({id : this.state.newId, name : data.name, phone : data.phone})
      })
    }else {
      this.setState({
        list : list.map(row => row.id === data.id ? {...data} : row)
      })
    }
  }

  handleRemove = (id) => {
    this.setState({
      list : this.state.list.filter(row => row.id !== id)
    })
  }

  handleSelectRow = (row) => {
    this.child.current.handleSelectRow(row)
  }

  render(){
    const {list} = this.state;

    return(
      <div>
        <div>
          <h1>전화번호부</h1>
          <ListForm onSaveData = {this.handleSaveDate} ref ={this.child}/>
        </div>
        <div>
          <table border = "1">
            <tbody>
              <tr align = "center">
                <td width = "50">No.</td>
                <td width = "100">이름</td>
                <td width = "150">전화번호</td>
                <td width = "50">수정</td>
                <td width = "50">삭제</td>
              </tr>
              { 
                list.map(row => 
                  (<ListItem key = {row.id} row = {row} onRemove = {this.handleRemove} onSelectRow = {this.handleSelectRow} />)
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

class ListItem extends Component{

  handleRemove = () => {
    const {row, onRemove} = this.props;
    onRemove(row.id);
  }

  handleSelectRow = () => {
    const { row , onSelectRow } = this.props;
    onSelectRow(row);
  }

  render(){
    return(
      <tr>
        <td>{this.props.row.id}</td>
        <td>{this.props.row.name}</td>
        <td>{this.props.row.phone}</td>
        <td><button onClick = {this.handleSelectRow}>수정</button></td>
        <td><button onClick = {this.handleRemove}>삭제</button></td>
      </tr>
    )
  }
}
  
class ListForm extends Component{

  state = {
    id : '',
    name : '',
    phone : ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.phone === '' || this.state.phone === null || this.state.phone === 'undefined'
        || this.state.name === '' || this.state.name === null || this.state.name === 'undefined'){
          return alert('입력값을 확인하세요!')
    }
    else {
      this.props.onSaveData(this.state);
      this.setState({
        id : '',
        name : '',
        phone : ''
      });
    }
  }

  handleSelectRow = (row) => {
    this.setState(row);
  }

  render(){
    return(
      <form onSubmit = {this.handleSubmit}>
        <input placeholder = "이름" name = "name" onChange = {this.handleChange} value = {this.state.name}/>
        <input placeholder = "전화번호" name = "phone" onChange = {this.handleChange} value = {this.state.phone}/>
        <button type = "submit">저장</button>        
      </form>
    )
  }
}
export default App;
