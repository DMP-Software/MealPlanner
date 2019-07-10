import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './styles/app.scss';
import { MainPage } from './pages/MainPage';
import { Header } from './components/Header/Header';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <section className="app__main-content">
          <Switch>
            <Route exact path="/" component={MainPage} />
          </Switch>
        </section>
      </div>
    );
  }
}

export default App;
