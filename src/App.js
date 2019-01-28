import React, { Component } from 'react';

import { Header } from './components/Header/Header.tsx';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header/>
        <div>Main Page</div>
      </div>
    );
  }
}

export default App;
