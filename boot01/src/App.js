import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false
    }

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    })
  }

  render() {
    return (
      <div className="App">
        <Button color="info" onClick={this.toggle}> 모달 열기 </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>확인</Button>
            <Button color="secondary" onClick={this.toggle}>취소</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default App;