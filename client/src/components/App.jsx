import React, { Component } from 'react';
import logo from '../images/logo.svg';

export default class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <h1 className="text-center">My Awesome React Project</h1>
        <img
          src={logo}
          alt=""
          srcSet=""
          className="img-fluid"
          style={{ maxHeight: '100vh' }}
        />
      </div>
    );
  }
}
