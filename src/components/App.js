import React, { Component } from 'react';
import './App.css';

import BoardContainer from '../containers/Board';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BoardContainer />
      </div>
    );
  }
}

export default App;
