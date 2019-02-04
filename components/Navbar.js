import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-md navbar-dark bg-dark mb-5'>
        <div className='container-fluid'>
          <a class='navbar-brand mr-auto' href='#'>
            Autochess Helper
          </a>
          <ul className='nav navbar-nav ml-auto'>
            <li className='nav-item mx-2'>
              <i className='fas fa-cog' />
            </li>
            <li className='nav-item mx-2'>
              <i className='fas fa-palette' />
            </li>
            <li className='nav-item mx-2'>
              <i className='fas fa-info-circle' />
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
