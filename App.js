import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Heroes from './components/Heroes';
import Modal from './components/Modal';

import heroes from './heroes.js'; // import heroes at root component so data can be shared with modal.

class App extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      activeIndex: null
    };
  }

  toggleModal = (index) => {
    this.setState(prevState => ({
      showModal: !prevState.showModal, // don't use this.state inside a setState call, use a function with parameter prevState.
      activeIndex: !prevState.showModal ? index : null // active index for modal, set to null if closing modal.
    }));
  };

  render() {
    const activeHero = heroes[this.state.activeIndex]; // the current active hero.
    return (
      <div id='outer'>``
        <Navbar />
        <div className='container-fluid'>
          <Modal show={this.state.showModal} closeCallback={this.toggleModal}customClass='custom_modal_class'>
            {activeHero && // if there is no activeHero, then don't render this.
              <React.Fragment>
                <div className='row'>
                  <div className='col-md-4'>{activeHero.heroName}</div>
                  <div className='col-md-8'>{activeHero.race1}</div>
                </div>
              </React.Fragment>
            }
          </Modal>
        </div>
        <Heroes heroes={heroes} toggleModal={this.toggleModal}/> {/* Pass heroes as a prop to Heroes */}
      </div>
    );
  }
}

export default App;
