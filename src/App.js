import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TokenPayment from './components/TokenPayment'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TokenPayment />
      </div>
    );
  }
}

export default App;
