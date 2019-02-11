import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Header } from './components/Header/Header.tsx';
import { MealPlanner } from './components/Planner/MealPlanner';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/" component={MealPlanner} />
        </Switch>
      </div>
    );
  }
}

export default App;
