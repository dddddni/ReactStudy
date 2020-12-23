import React, { Component } from "react";

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

export default BoardForm