import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Heroes from './components/Heroes';
import Modal from './components/Modal';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  };

  render() {
    return (
      <div id='outer'>
        <Navbar />
        <div className='container-fluid'>
          <button className='modal_opener' onClick={this.toggleModal}>
            Modal
          </button>

          <Modal show={this.state.showModal} closeCallback={this.toggleModal} customClass='custom_modal_class'>
            <React.Fragment>
              <div className='row'>
                <div className='col-md-4'>Sample</div>
                <div className='col-md-8'>Sample</div>
              </div>
            </React.Fragment>
          </Modal>
        </div>
        <Heroes />
      </div>
    );
  }
}

export default App;
