import React, { Component } from 'react';
import { render } from 'react-dom';
import Modal from 'react-modal';

class App extends Component {
  state = {
    modalIsOpen: false,
    secondModalIsOpen: false
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
    this.closeSecondModal();
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
    this.openSecondModal();
  };

  openSecondModal = () => {
    this.setState({ secondModalIsOpen: true });
  };

  closeSecondModal = () => {
    this.setState({ secondModalIsOpen: false });
  };

  render() {
    return (
      <div>
        <button onClick={this.openModal}>Open Modal</button>
        <button onClick={this.openSecondModal}>Open Second Modal</button>

        <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal}>
          <button onClick={this.closeModal}>close</button>
          <div>I am a modal</div>
        </Modal>

        <Modal
          isOpen={this.state.secondModalIsOpen}
          onRequestClose={this.closeSecondModal}
        >
          <button onClick={this.closeSecondModal}>close</button>
          <div>second modal</div>
        </Modal>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
